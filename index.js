
$("#slideDownNav,#newnavUl").click(function () {
    $("#newnavUl").slideToggle();
});

function h1Animate() {
    $("h1").addClass('fadeInDown');
    setInterval(function () {
        $("h1").removeClass('fadeInDown');
    }, 1000)
}

h1Animate();

function activeWords(){
    let index=0;
    let length=$("#activeWords span").length;
    setInterval(function () {
        if (index>=length){
            index=0;
        }
        let colorArr=['#6bd5e1','#ffd98e','#e62a76','#774898','#e62a76','#b5592a','#9cd3d3','#ea9085','#ca431d','#f9499e'];
        let random=Math.ceil((Math.random())*(colorArr.length-1));
        $("#activeWords span").eq(index).css({'fontSize':"25px","color":colorArr[random]}).siblings().css({'fontSize':"18px","color":"#eee"});
        index++;
    },300)
}
activeWords();

$("footer a").mouseover(function () {
    let index=$(this).index();
    let colorArr=['red','dodgerblue','orangered','royalblue','black'];
    $("footer a").eq(index).css('color',colorArr[index]).siblings().css('color',"#eee");
});
$("footer a").mouseleave(function () {
    $("footer a").css('color',"#eee");
});


$("#nav li,#newnavUl li").click(function () {

    $(".section").hide();
    let index=$(this).index();
    let animateArr=['fadeInRight','flipInX','lightSpeedIn'];
    $("#nav li").eq(index).css({'backgroundColor':'rgba(0,0,0,0.3)'}).siblings().css({'backgroundColor':''});
    $("#mainUl li").eq(index).show().addClass(animateArr[index]).siblings().hide().removeClass(animateArr);
});