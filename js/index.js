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
    };

    //读取song-display-none中的歌词内容
    var divContainerSongWord = document.getElementById("song-word");
    var divNoneSongWord = document.getElementById("song-display-none");
    var songText = divNoneSongWord.innerText;
    //对lrc歌词进行切割提取
    var arrSongText = songText.split("[");
    for(var i = 0 ; i< arrSongText.length;i++) {
        var arrSongStatement = arrSongText[i].split("]");
        var timeStamp = arrSongStatement[0].split(":");
        var result = timeStamp[1];
        if(result){
            var idName = parseInt(timeStamp[0])*60+parseInt(result.split(".")[0]);
        }
        if (arrSongStatement[1]) {
            divContainerSongWord.innerHTML += "<p"+" id="+idName+">" + arrSongStatement[1] + "</p>";
        }
    }

    //控制音频的播放
    var audio = document.getElementById("player");
    //获取歌词容器中所有歌词的p标签
    var pLists = divContainerSongWord.getElementsByTagName("p");
    //监听音频播放时间变化
    audio.addEventListener("timeupdate",function () {
        console.log(this.currentTime);
        var curTime = parseInt(this.currentTime);
        if (pLists && pLists.length > 0) {
            for(var i = 0 ; i < pLists.length;i++){
                console.log(pLists[i].id);
                // var songStatement = document.getElementById(curTime);
                // if(pLists[i] == songStatement){
                //     songStatement.style.color = "red";
                // }else{
                //     pLists[i].style.color = "#ffffff";
                // }
            }
        }
    });

    var btnPlayPause = document.getElementById("play-pause");
    var isPlaying = false;
    btnPlayPause.onclick = function () {
        if(!isPlaying){
            this.style.backgroundPosition = "-60px "+"-60px";
            isPlaying = true;
            audio.play();
        }else{
            this.style.backgroundPosition = "0px"+" 0px";
            isPlaying = false;
            audio.pause();
        }
    };

    function timeMatch(curTime){

    }
