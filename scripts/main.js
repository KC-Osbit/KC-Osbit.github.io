let myImage = document.querySelector('img')

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/osbit-logo.svg') {
        myImage.setAttribute('src','images/osbit-logo-black.png')
    } else {
        myImage.setAttribute('src','images/osbit-logo.svg')
    }

}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName){
        setUserNmae();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Osbit is cool, ' +myName;
    }
}
myButton.onclick = function() {
    setUserName();
}