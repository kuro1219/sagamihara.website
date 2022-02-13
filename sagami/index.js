

var pics_src = new Array("image/IMG_7048.jpg","image/IMG_4127.JPG","image/IMG_6285.jpg","image/IMG_7105.jpg","image/IMG_5746.jpg","image/IMG_4126.JPG","image/IMG_6811.jpg"
,"image/IMG_5691.jpg","image/IMG_6183.jpg","image/IMG_4133.JPG","image/IMG_4131.JPG","image/IMG_7344.JPG","image/IMG_4150.JPG","image/IMG_4129.JPG"
,"image/IMG_4149.JPG","image/IMG_4156.jpg",);
var num = -1;

slideshow_timer();

//画面自動遷移
function slideshow_timer(){
    if (num == 15){
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("photo").src=pics_src[num];
    setTimeout("slideshow_timer()",2000);
}
