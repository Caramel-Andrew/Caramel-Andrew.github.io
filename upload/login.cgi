#!/usr/local/bin/perl


#��������������������������������������������������������������������
# [�o�[�W����]
$ver = "5.1";

#��������������������������������������������������������������������
# [�X�V����]
# �@Ver 4.5�܂�
# �@�@�EFlash Player 9.0�ȉ��ł̓G���[�\��
# �@�@�E�t�@�C�����X�g�ƃA�b�v���[�h��ʂ𕪊�
# �@�@�E�t�@�C�����X�g����t����KB�P�ʂŕ\��
# �@�@�E�t�@�C���T�C�Y100MB�ȏ�̓A�b�v�s�\
# �@�@�E���O�A�E�g�@�\
# �@�@�E�t�@�C���^�C�v�w��
# �@Ver 5.0
# �@�@�E�S�p�t�@�C�����̃A�b�v���[�h�Ή�
# �@�@�E�t�@�C�����ɑ��M�҂ƃR�����g��t��
# �@�@�E�f�U�C���ύX
# �@�@�E�����t�@�C�����̂��̂̓A�b�v�ł��Ȃ��悤�ɑΉ�
# �@�@�E�t�@�C���폜�O�ɃA���[�g�\��
# �@Ver 5.1
# �@�@�E�ݒu�̊ȈՉ�
#��������������������������������������������������������������������
# [�ݒ�]

# ���O�C��ID
$dfusername = 'guest';

# ���O�C���p�X���[�h
$dfpassword = 'guest';

# ���[���̃^�C�g��
$msub = '�y�t�@�C���]���zFuploader';

# sendmail�p�X
$sendmail = '/usr/sbin/sendmail';

# �t�@�C���^�C�v
@filetype = (
	mov,
	gif,
	jpeg,
	jpg,
	zip,
	lzh,
	pdf,
	eps,
	ai,
	psd,
	xls,
	doc
);

# $datadir �� $url ��CGI�t�@�C���ƃA�b�v���[�h����t�H���_��
# ������ꍇ�Ɏg�p
# Fuploader��ݒu�����t�H���_��(�`�������� / �̂���)
$datadir = '';
# �t�@�C����ۑ�����t�H���_��(�`�������� http:// �̂���)
$url = '';

# �t�@�C�����X�g
$listfile = './file.dat';

#��������������������������������������������������������������������

use CGI;
local $query = new CGI;
require './jcode.pl';

$scurl = "http://" . $ENV{'HTTP_HOST'};
$docroot = $ENV{'DOCUMENT_ROOT'};
$scriptname = $ENV{'SCRIPT_NAME'};
$scriptname =~ s/login.cgi//g;
if($datadir eq ""){
	$datadir = $docroot . $scriptname;
}
if($url eq ""){
	$url = $scurl . $scriptname;
}

print "Content-type: text/html\n\n";
$method = $ENV{'REQUEST_METHOD'};
$buf = $ENV{'QUERY_STRING'};
foreach (split(/&/, $buf)) {
	($key, $val) = split(/=/);
	$val =~ tr/+/ /;
	$val =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("H2", $1)/eg;
	&jcode'convert(*val, 'sjis');
	$val =~ s/\0//g;
	$val =~ s/[\x00-\x20]+/ /g;
	$in{$key} .= "\0" if (defined($in{$key}));
	$in{$key} .= $val;
}

if($method eq "POST"){
	$mode = $query->param('mode');
	$session = $query->param('session');
	if($mode eq "del"){
		&DEL();
	}elsif($mode eq "view"){
		&VIEW();
	}elsif($mode eq "login"){
		&LOGIN();
	}
	
	if($in{'certify'} eq $dfusername){
		$filename = $query->param('Filename');
		$filename_true = $filename;
		$time = time;
		if($filename =~ /[^\w\s\-\.\?\<\>\!\"\#\$\%\&\'\~]/){
			@setname = split(/\./ , $filename);
			$filename = $time . "." . $setname[1];
		}
		$file = $query->param('Filedata');
		
		$riferclear = 0;
		if($filename && $file){
			$riferclear .= $ENV{'QUERY_STRING'};
			@inside_certify = split(/=/ , $riferclear);
			
			if($inside_certify[1] eq $dfusername || $inside_certify[1] ne ""){
				open(OUT, ">$datadir$filename");
				binmode(OUT);
				while(read($file,$buffer,1024)){
					print OUT $buffer;
				}
				close(OUT);
				close($file);
			}
			$count = 0;
			open(IN,"$listfile");
			eval "flock(IN, 1);";
			
			$top = <IN>;
			($no) = split(/<>/, $top);
			$count = $no + 1;
			push(@new,$top);
			
			while (<IN>) {
				push(@new,$_);
			}
			close(IN);
			
			if($count eq 0){
				$count = 1;
			}
			
			unshift(@new,"$count<>$time<>$filename<>$filename_true<>$in{'sender'}<>$in{'mess'}<>$in{'size'}<>0<>\n");
			
			open(OUT,">$listfile");
			eval "flock(IN, 2);";
			print OUT @new;
			close(OUT);
		}
	}
	
	$filename = $query->param('filetitle');
	if($mode eq "entry" && $session eq $dfusername){
		($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time);
		$year += 1900;
		$mon += 1;
		$date = "$year�N$mon��$mday�� $hour��$min��$sec�b\n";
		
		$mailcheck = $query->param('mailcheck');
		$mailto = $query->param('sendto');
		$com = $query->param('comment');
		
		$mbody = <<EOM;
--------------------------------------------------------
���̃��[���̓t�@�C���A�b�v���[�_�[[Fuploader]����
���M���ꂽ���[���ł��B
--------------------------------------------------------

�����M�����F$date
���t�@�C�����F$filename
�����b�Z�[�W
$com

--------------------------------------------------------
EOM
		
		if($mailcheck == 1){
			$msub = &base64($msub);
			open(MAIL,"| $sendmail -t") || &error("���M���s");
			print MAIL "To: $mailto\n";
			print MAIL "From:  $mailto\n";
			print MAIL "Subject: $msub\n";
			print MAIL "MIME-Version: 1.0\n";
			print MAIL "Content-type: text/plain; charset=ISO-2022-JP\n";
			print MAIL "Content-Transfer-Encoding: 7bit\n";
			print MAIL "X-Mailer: $ver\n\n";
			&jcode::convert(\$mbody,'jis');
			print MAIL $mbody . "\n";
			close(MAIL);
		}
	}
}

sub LOGIN {
	$username = $query->param('username');
	$password = $query->param('password');
	
	if($username eq $dfusername && $password eq $dfpassword){
		$filedata = "isValidLogin=1&fileTypeArray=";
		foreach $value (@filetype) {
			$filedata .= $value . ",";
		}
		print $filedata;
	}else{
		print "isValidLogin=0";
	}
}


sub DEL {
	$delfile = "";
	$delno = $query->param('delfilename');
	open(IN,"$listfile");
	eval "flock(IN, 1);";
	while (<IN>) {
		($no,$time,$pass) = split(/<>/, $_);
		if($delno ne $no){
			push(@new,$_);
		}
		if($delno eq $no){
			$delfile = $pass;
		}
	}
	close(IN);
	
	open(OUT,">$listfile");
	eval "flock(IN, 2);";
	print OUT @new;
	close(OUT);
	
	unlink $datadir . $delfile;
	print "&del=0";
	exit;
}


sub VIEW {
	if($session eq $dfusername){
		$listdata = "&viewlist=";
		
		open(IN,"$listfile");
		eval "flock(IN, 1);";
		while (<IN>) {
			@list = split(/<>/, $_);
			$no = $list[0];
			$time = $list[1];
			($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime($time);
			$year += 1900;
			$mon += 1;
			$time = "$year/$mon/$mday $hour:$min";
			
			$pass = $list[2];
			$pass = $url . $pass;
			$name = $list[3];
			$sender = $list[4];
			$mess = $list[5];
			$size = $list[6];
			if($#list > 0){
				$listdata .= $no . "," . $time . "," . $pass . "," . $name . "," . $sender . "," . $mess . "," . $size . "|";
			}
		}
		close(IN);
		print $listdata;
		exit;
	}else{
		print "non access";
	}
}


sub base64 {
	local($sub) = @_;
	&jcode'convert(*sub, 'jis', 'sjis');
	
	$sub =~ s/\x1b\x28\x42/\x1b\x28\x4a/g;
	$sub = "=?iso-2022-jp?B?" . &b64enc($sub) . "?=";
	$sub;
}
sub b64enc {
	local($ch)="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	local($x, $y, $z, $i);
	$x = unpack("B*", $_[0]);
	for ($i=0; $y=substr($x,$i,6); $i+=6) {
		$z .= substr($ch, ord(pack("B*", "00" . $y)), 1);
		if (length($y) == 2) {
			$z .= "==";
		} elsif (length($y) == 4) {
			$z .= "=";
		}
	}
	$z;
}

__END__


