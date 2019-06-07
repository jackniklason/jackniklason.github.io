let hray = ["images/image-three.jpg","images/image-four.jpg","images/image-five.jpg","images/image-six.jpg","images/image-seven.jpg","images/image-eight.jpg","images/image-two.jpg"];
let dray = ["images/dog-two.jpg","images/dog-three.jpg","images/dog-four.jpg","images/dog-five.jpg","images/dog-six.jpg","images/dog-seven.jpg","images/dog-eight.jpg","images/dog-nine.jpg", "images/dog-ten.jpg", "images/dog-eleven.jpg", "images/dog-one.jpg"];

let hbutton = document.getElementById('hbutton');
let dbutton = document.getElementById('dbutton');
let himg = document.getElementById('hike');
let dimg = document.getElementById('dog');
let i = 0;
let j = 0;
hbutton.onclick = function(){
    himg.setAttribute('src', hray[i%7]);
    i++;
}
dbutton.onclick = function(){
    dimg.setAttribute('src', dray[j%11]);
    j++
}