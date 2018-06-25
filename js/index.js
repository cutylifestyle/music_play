window.onload = function () {
    //设置默认的content高度
    var screenH = document.documentElement.clientHeight || document.body.clientHeight;
    var navH = document.getElementById("nav-wrap").offsetHeight;
    var divContent = document.getElementById("content");
    divContent.style.height = (screenH - navH)+"px";
    //动态设置content的高度
    window.onresize = function () {
        //todo 这段代码中screenH前面的var能不能去掉，以及分析这段代码的执行流程
        var screenH = document.documentElement.clientHeight || document.body.clientHeight;
        divContent.style.height = (screenH - navH)+"px";
    }
};