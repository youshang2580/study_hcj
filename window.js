/*
    window对象
	    直接使用，可省略window.
*/
//属性

/*方法*/
// 提示框相关方法
//alert("弹出警告框");
//confirm("确认取消提示框");

// 窗口相关的方法
//打开新窗口
/*
var url1 = "https://baidu.com";
var newWindow;
document.getElementById("open").onclick = function() {
	newWindow = open(url1);
};


//关闭窗口
document.getElementById("close").onclick = function() {
	newWindow = close();
};

*/
//定时器
//轮播图
var num = 1;
var img = document.getElementById("img");//获取img对象
function fun() {
	num++;
	if(num > 6) {
		num = 1;
	}
	//执行一次更换一次图片
	img.src = "https://恋语.xyz/home/image/鬼刀18/" + num + "_鬼刀.jpg";
}
//setTimeout(fun,5000);
setInterval(fun,8000);
