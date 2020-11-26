// let myheading = document.querySelector('h1')
// myheading.textContent = 'JavaScript, Hello world!'

let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === './styles/homePage.jpg'){
        myImage.setAttribute('src','./images/beautifulWomanRidingHorse.jpg');
    }else{
        myImage.setAttribute('src','./styles/homePage.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字：');
    localStorage.setItem('name',myName);
    myHeading.textContent = '骑着小马的'+myName+'，帅呆了！！！';
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '骑着小马的'+storedName+'，帅呆了！！！';
}

myButton.onclick = function(){
    setUserName();
}