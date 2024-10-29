const imgbox = document.querySelector(".img-box")
const images = document.querySelectorAll(".image")

let slidernum = 0;

setInterval(()=> {
    if(slidernum < images.length){
        imgbox.style.transform = `translateX(-${slidernum*100}%)`
        slidernum++;
    }else{
        imgbox.style.transform = `translateX(0vw)`
        slidernum = 0;
    }
},3000)