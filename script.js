const loader=document.querySelector(".loader");
const loaderNumber=document.querySelector(".loader-number");
const loaderBar=document.querySelector(".loader-bar span");
const introText=document.querySelector(".intro-text");
const introItem1=document.querySelector(".intro-item1");
const introItem2=document.querySelector(".intro-item2");
const accessScreen=document.querySelector(".access-screen");
const accessCode=document.querySelector("#accessCode");
const accessButton=document.querySelector("#accessButton");
const accessMessage=document.querySelector(".access-message");
const introMessage=document.querySelector(".intro-message");
const dex=document.querySelector(".dex");
const dex1=document.querySelector(".dex1");
const mainContent=document.querySelector(".main-content");
const cards=document.querySelectorAll(".photo-card");
const nextButton=document.querySelector(".next");
const contentNext=document.querySelector("#contentNext");
const correctCode="8410";
let progress=0;
const loading=setInterval(()=>{
    progress++;
    loaderBar.style.width=progress+"%";
    loaderNumber.textContent=progress+"%";
    if(progress>=100){
        clearInterval(loading);
        loader.classList.add("loaded");
        introItem1.classList.add("show");
        setTimeout(()=>{
            introItem1.classList.remove("show");
            introItem1.classList.add("hide");
            introItem2.classList.add("show");
        },1500);
        setTimeout(()=>{
            introItem2.classList.remove("show");
            introItem2.classList.add("hide");
            accessScreen.classList.add("show");
        },3000);
    }
},40);
accessButton.addEventListener("click",()=>{
    if(accessCode.value===correctCode){
        accessScreen.classList.remove("show");
        dex.classList.add("show");
        setTimeout(()=>{
            dex.classList.remove("show");
            dex.classList.add("hide");
        },1500);
        setTimeout(()=>{
            dex1.classList.add("show");
        },3200);
        setTimeout(()=>{
            dex1.classList.remove("show");
            dex1.classList.add("hide");
            mainContent.classList.add("show");
            nextButton.classList.add("show");
        },4600);
    }else{
        accessMessage.textContent="salah...kamu bukan raraa yaa :(";
    }
});
let current=0;
function showPhoto(index){
    cards.forEach(card=>{
        card.classList.remove("active");
    });
    cards[index].classList.add("active");
}
nextButton.addEventListener("click",()=>{
    current++;
    if(current<cards.length){
        showPhoto(current);
    }else{
        nextButton.classList.remove("show");
        contentNext.classList.add("show");
    }
});
showPhoto(current);
