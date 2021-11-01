#!/usr/local/bin/perl

#┌─────────────────────────────────
#│  FUPLOADER v3.0
#│  Copyright (c) FLASHRAVE
#│  http://flashrave.org/
#└─────────────────────────────────
#┌─────────────────────────────────
#│  [利用にあたって]
#│  当ファイルの使用、またはそれを使用できなかったことにより
#│	 損害が生じたとしても当方では一切責任を負いません。
#└─────────────────────────────────
#┌─────────────────────────────────
#│  [履歴]
#│  v1.0　一般公開
#│  v2.0　ファイル一覧がSWF内で表示
#│        ログイン機能追加
#│  v3.0　ファイルのダウンロード機能
#│        不正アクセス対策
#└─────────────────────────────────
#┌─────────────────────────────────
#│  [設置]
#│  public_html (ホームディレクトリ)
#│	      ｜
#│	      ＋-- fuploader             [755]
#│	            │   login.cgi       [755]
#│	            │   index.html  [644]
#│	            └   fuploader.swf   [644]
#└─────────────────────────────────

#──────────────────────────────────
# [設定]

# ログインID
$dfusername = "guest";

# ログインパスワード
$dfpassword = "guest";

# 設置したディレクトリ(httpで始まらないもの)
# 最後に /（スラッシュ）を付けてください
$datadir = "./";

# URL(httpで始まるもの)
$url = "http://www.yoyomiracle.jp/upload/";

#──────────────────────────────────

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
			$fileUrl = $datadir . $current; # ファイルの位置
			@foo = stat($fileUrl);	# statでファイル情報取得
			$atime = localtime($foo[8]);	# アクセス日
			($ss, $mn, $hh, $dd, $mm, $yy) = localtime($foo[9]);	# 更新時刻
			
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




