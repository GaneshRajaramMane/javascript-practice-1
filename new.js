var rect=document.querySelector(".d");

rect.addEventListener("mousemove",function(detail){
    var rectlocation=rect.getBoundingClientRect();
    var insiderect=detail.clientX-rectlocation.left;

    if(insiderect<rectlocation.width/2){
        var redcolour=gsap.utils.mapRange(
            0,
            rectlocation.width/2,
            255,
            0,
            insiderect
            );
        gsap.to(rect,{
            backgroundColor:`rgb(${redcolour},0,0)`,
            ease:Power4,
        });
    }
    else{
        var bluecolour=gsap.utils.mapRange(
            rectlocation.width/2,
            rectlocation.width,
            0,
            255,
            insiderect
            );
        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${bluecolour})`,
            ease:Power4,
        });
    }

})
rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"white",
    });
})
