#!/usr/local/bin/perl

#��������������������������������������������������������������������
#��  FUPLOADER v3.0
#��  Copyright (c) FLASHRAVE
#��  http://flashrave.org/
#��������������������������������������������������������������������
#��������������������������������������������������������������������
#��  [���p�ɂ�������]
#��  ���t�@�C���̎g�p�A�܂��͂�����g�p�ł��Ȃ��������Ƃɂ��
#��	 ���Q���������Ƃ��Ă������ł͈�ؐӔC�𕉂��܂���B
#��������������������������������������������������������������������
#��������������������������������������������������������������������
#��  [����]
#��  v1.0�@��ʌ��J
#��  v2.0�@�t�@�C���ꗗ��SWF���ŕ\��
#��        ���O�C���@�\�ǉ�
#��  v3.0�@�t�@�C���̃_�E�����[�h�@�\
#��        �s���A�N�Z�X�΍�
#��������������������������������������������������������������������
#��������������������������������������������������������������������
#��  [�ݒu]
#��  public_html (�z�[���f�B���N�g��)
#��	      �b
#��	      �{-- fuploader             [755]
#��	            ��   login.cgi       [755]
#��	            ��   index.html  [644]
#��	            ��   fuploader.swf   [644]
#��������������������������������������������������������������������

#��������������������������������������������������������������������
# [�ݒ�]

# ���O�C��ID
$dfusername = "guest";

# ���O�C���p�X���[�h
$dfpassword = "guest";

# �ݒu�����f�B���N�g��(http�Ŏn�܂�Ȃ�����)
# �Ō�� /�i�X���b�V���j��t���Ă�������
$datadir = "./";

# URL(http�Ŏn�܂����)
$url = "http://www.yoyomiracle.jp/upload/";

#��������������������������������������������������������������������

use CGI;
local $query = new CGI;

print "Content-type: text/html\n\n";
$mode = $query->param('mode');
$session = $query->param('session');
if($mode eq "del"){
	&DEL();
}elsif($mode eq "view"){
	&VIEW();
}elsif($mode eq "login"){
	&LOGIN();
}


$filename = $query->param('Filename');
#if($filename !~ /^([a-zA-Z0-9-_]+)/){
if($filename =~ /[^\w\s\-\.\?\<\>\!\"\#\$\%\&\'\~]/){
	$time = time;
	@setname = split(/\./ , $filename);
	$filename = $time . "." . $setname[1];
}

$file = $query->param('Filedata');

if($filename && $file){
	open(OUT, ">$datadir$filename");
	binmode(OUT);
	while(read($file,$buffer,1024)){
		print OUT $buffer;
	}
	close(OUT);
	close($file);
}


sub LOGIN {
	$username = $query->param('username');
	$password = $query->param('password');
	
	if($username eq $dfusername && $password eq $dfpassword){
		print "isValidLogin=1";
	}else{
		print "isValidLogin=0";
	}
}


sub DEL {
	$mode = $query->param('delfilename');
	unlink $datadir . $mode;
	print "&del=0";
	exit;
}


sub VIEW {
	if($session eq $dfusername){
	
	$listdata = "&viewlist=";
	opendir(CURRENT , $datadir);
	while ($current = readdir(CURRENT)) {
		if($current ne "." && $current ne ".." && $current ne "index.html" && $current ne "fuploader.swf" && $current ne "login.cgi"){
			$fileUrl = $datadir . $current; # �t�@�C���̈ʒu
			@foo = stat($fileUrl);	# stat�Ńt�@�C�����擾
			$atime = localtime($foo[8]);	# �A�N�Z�X��
			($ss, $mn, $hh, $dd, $mm, $yy) = localtime($foo[9]);	# �X�V����
			
			$yy += 1900;
			$mm++;
			$dttm = sprintf("%04d.%02d.%02d %02d:%02d:%02d", $yy, $mm, $dd, $hh, $mn, $ss);
			
			$size = -s $fileUrl;
			$size = $size / 1024;
			$size = int($size + 0.5);
			
			$listdata .= $current . "," . $dttm . "," . $size . "," . $url . "|";
		}
	}
	closedir(CURRENT);
	print "&viewlist=" . $listdata;
	exit;
	}else{
		print "non access";
	}
}



__END__




