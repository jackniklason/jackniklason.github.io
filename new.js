let myImage = document.querySelector('.images');
let mySelect = document.getElementById('jsid');
let oSection = document.getElementById('other');
function getValue() {
    if (mySelect.options[mySelect.selectedIndex].value === 'camp') {
        myImage.setAttribute('src', 'images/image-two.jpg');
        myImage.setAttribute('id', '');
        myImage.style.width = '400px';
        myImage.style.height = '530px';
        let ifid = document.getElementById('ifid');
        oSection.removeChild(ifid);
    }
    else if(mySelect.options[mySelect.selectedIndex].value === 'def'){
        myImage.setAttribute('src', 'images/cam.png');
        myImage.setAttribute('id', '');
        myImage.style.width = '400px';
        myImage.style.height = '400px';
        let ifid = document.getElementById('ifid');
        oSection.removeChild(ifid);
    }
    else if (mySelect.options[mySelect.selectedIndex].value === 'dog') {
        myImage.setAttribute('src', 'images/dog-one.jpg');
        myImage.setAttribute('id', '');
        myImage.style.width = '534px';
        myImage.style.height = '300px';
        let ifid = document.getElementById('ifid');
        oSection.removeChild(ifid);
    }
    else if (mySelect.options[mySelect.selectedIndex].value === 'social'){
        myImage.setAttribute('src', 'images/linkedlogo.png');
        myImage.setAttribute('id', 'stay');
        myImage.style.width = '200px';
        myImage.style.height = '200px';
        let gitLogo = document.createElement('img');
        gitLogo.src = 'images/gitlogo.png';
        gitLogo.id = 'ifid';
        oSection.appendChild(gitLogo);
        gitLogo.onclick = function(){
            window.location.href = 'https://github.com/jackniklason/';
        }
    }
}
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc ==='images/image-two.jpg'){
        myImage.setAttribute('src', 'images/image-three.jpg');
        myImage.style.width = '530px';
        myImage.style.height = '400px';
    } else if(mySrc === 'images/image-three.jpg') {
        myImage.setAttribute('src', 'images/image-four.jpg');
        myImage.style.width = '534px';
        myImage.style.height = '300px';
    } else if(mySrc === 'images/image-four.jpg') {
        myImage.setAttribute('src', 'images/image-five.jpg');
        myImage.style.width = '576px';
        myImage.style.height = '280px';
    } else if(mySrc === 'images/image-five.jpg'){
        myImage.setAttribute('src', 'images/image-six.jpg');
        myImage.style.width = '576px';
        myImage.style.height = '432px';
    } else if(mySrc === 'images/image-six.jpg'){
        myImage.setAttribute('src', 'images/image-seven.jpg');
        myImage.style.width = '576px';
        myImage.style.height = '432px';
    } else if(mySrc === 'images/image-seven.jpg'){
        myImage.setAttribute('src', 'images/image-eight.jpg');
        myImage.style.width = '530px';
        myImage.style.height = '400px';
    }  else if(mySrc === 'images/image-eight.jpg'){
        myImage.setAttribute('src', 'images/image-two.jpg');
        myImage.style.width = '400px';
        myImage.style.height = '530px';
    } else if(mySrc === 'images/dog-one.jpg'){
        myImage.setAttribute('src', 'images/dog-two.jpg');
        myImage.style.width = '530px';
        myImage.style.height = '400px';
    } else if(mySrc === 'images/dog-two.jpg'){
        myImage.setAttribute('src', 'images/dog-three.jpg');
        myImage.style.width = '530px';
        myImage.style.height = '400px';
    } else if(mySrc === 'images/dog-three.jpg'){
        myImage.setAttribute('src', 'images/dog-four.jpg');
        myImage.style.width = '466px';
        myImage.style.height = '350px';
    } else if(mySrc === 'images/dog-four.jpg'){
        myImage.setAttribute('src', 'images/dog-five.jpg');
        myImage.style.width = '534px';
        myImage.style.height = '300px';
    } else if(mySrc === 'images/dog-five.jpg'){
        myImage.setAttribute('src', 'images/dog-six.jpg');
        myImage.style.width = '534px';
        myImage.style.height = '300px';
    } else if(mySrc === 'images/dog-six.jpg'){
        myImage.setAttribute('src', 'images/dog-seven.jpg');
        myImage.style.width = '534px';
        myImage.style.height = '300px';
    } else if(mySrc === 'images/dog-seven.jpg'){
        myImage.setAttribute('src', 'images/dog-eight.jpg');
        myImage.style.width = '534px';
        myImage.style.height = '300px';
    } else if(mySrc === 'images/dog-eight.jpg'){
        myImage.setAttribute('src', 'images/dog-one.jpg');
        myImage.style.width = '534px';
        myImage.style.height = '300px';
    } else if(mySrc === 'images/cam.png'){
        
    }
    else {
        window.location.href = 'https://www.linkedin.com/in/jack-niklason-698132184/';
    }
}
