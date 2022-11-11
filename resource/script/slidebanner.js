let bannerImg = [
    '<img src="https://source.unsplash.com/1600x900/?nature,sun"></img>',
    '<img src="https://source.unsplash.com/1600x900/?nature,water"></img>',
    '<img src="https://source.unsplash.com/1600x900/?nature,trees"></img>',
    '<img src="https://source.unsplash.com/1600x900/?nature,flowers"></img>',
    '<img src="https://source.unsplash.com/1600x900/?nature,animals"></img>',
    '<img src="https://source.unsplash.com/1600x900/?nature,clouds"></img>',
]

let number = bannerImg.length;
function SlideShow(index) {
    this.i = index;
    function nextSlide() {
        this.i += 1;
    }
    this.getIndex = setInterval(() => {
        console.log(this.i);
        if (this.i < number - 1) {
            return ++this.i;
       } else {
            return this.i = 0
       }
    }, 5000);
}

let slide1 = new SlideShow(0)
let slide2 = new SlideShow(1)
let slide3 = new SlideShow(2)
let slide4 = new SlideShow(3)
let slide5 = new SlideShow(4)
let slide6 = new SlideShow(5)

setInterval(() => {
    document.getElementById('mainBanner').innerHTML=bannerImg[slide1.i]
    document.getElementById('category1').innerHTML=bannerImg[slide2.i]
    document.getElementById('category2').innerHTML=bannerImg[slide3.i]
    document.getElementById('category3').innerHTML=bannerImg[slide4.i]
    document.getElementById('category4').innerHTML=bannerImg[slide5.i]
    document.getElementById('category5').innerHTML=bannerImg[slide6.i]
}, 5000);

