var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/image-one.jpg'){
        myImage.setAttribute('src', 'images/image-two.jpg');
    } else if(mySrc === 'images/image-two.jpg') {
        myImage.setAttribute('src', 'images/image-three.jpg');
    } else if(mySrc === 'images/image-three.jpg') {
        myImage.setAttribute('src', 'images/image-four.jpg');
    } else if(mySrc === 'images/image-four.jpg'){
        myImage.setAttribute('src', 'images/image-five.jpg');
    }
    else {
        myImage.setAttribute('src', 'images/image-one.jpg');
    }
}