function b(){var a=Math.ceil(6*Math.random());$.className="",$.src="a/"+a+".svg"}function c(){e.preventDefault();$.className||($.className="a",a.play(),setTimeout(b,1e3))}var $=document.querySelector("img"),a=new Audio("a/r.mp3");a.load(),navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/iPhone|iPad|iPod/i)||(document.onclick=c),document.onkeydown=c,document.ontouchmove=function(a){a.preventDefault()},document.oncontextmenu=function(a){a.preventDefault()},b();
