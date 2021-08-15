let div = document. getElementById('playMain'); 
div.addEventListener('click',()=>{movieToggle();});

// function imp(){
//   document.getElementById('Play1').addEventListener("click",()=>{movieToggle();},false);
// }


function movieToggle(){
  let trailer =document.querySelector(".trailer")
  trailer.classList.toggle("active");
  let video = document.querySelector("video")
  
  video.pause();
  video.currentTime=0;
}




let dra1 =document.getElementById('dra1');

let onTog1=document.getElementById('closeD1').onclick=function(){dra1.style.display='none';};

function funDrama1(){
  if (dra1.style.display =='none' ){
    dra1.style.display='block';
    dra2.style.display='none';
    dra3.style.display='none';
    dra4.style.display='none';
    dra5.style.display='none';
  }
  else{
    dra1.style.display='none';
  }
}

let dra2 =document.getElementById('dra2');

let onTog2=document.getElementById('closeD2').onclick=function(){dra2.style.display='none';};

function funDrama2(){
  if (dra2.style.display =='none' ){
    dra1.style.display='none';
    dra3.style.display='none';
    dra4.style.display='none';
    dra5.style.display='none';
    dra2.style.display='block';
  }
  else{
    dra2.style.display='none';
  }
}
let dra3 =document.getElementById('dra3');

let onTog3=document.getElementById('closeD3').onclick=function(){dra3.style.display='none';};

function funDrama3(){
  if (dra3.style.display =='none' ){ 
  dra1.style.display='none';
  dra2.style.display='none';
  dra4.style.display='none';
  dra5.style.display='none';
  dra3.style.display='block';
  }
  else{
    dra3.style.display='none';
  }
}
let dra4 =document.getElementById('dra4');

let onTog4=document.getElementById('closeD4').onclick=function(){dra4.style.display='none';};

function funDrama4(){
  if (dra4.style.display =='none' ){
    dra1.style.display='none';
    dra2.style.display='none';
    dra3.style.display='none';
    dra5.style.display='none';
    dra4.style.display='block';
  }
  else{
    dra4.style.display='none';
  }
}
let dra5 =document.getElementById('dra5');

let onTog5=document.getElementById('closeD5').onclick=function(){dra5.style.display='none';};

function funDrama5(){
  if (dra5.style.display =='none' ){
    dra1.style.display='none';
    dra2.style.display='none';
    dra3.style.display='none';
    dra4.style.display='none';
    dra5.style.display='block';
  }
  else{
    dra5.style.display='none';
  }
}


let thri1 =document.getElementById('thri1');

let onTogT1=document.getElementById('closeT1').onclick=function(){thri1.style.display='none';};

function funThriller1(){
  if (thri1.style.display =='none' ){
    thri1.style.display='block';
    thri2.style.display='none';
    thri3.style.display='none';
    thri4.style.display='none';
    thri5.style.display='none';
  }
  else{
    thri1.style.display='none';
  }
}

let thri2 =document.getElementById('thri2');

let onTogT2=document.getElementById('closeT2').onclick=function(){thri2.style.display='none';};

function funThriller2(){
  if (thri2.style.display =='none' ){
    thri1.style.display='none';
    thri3.style.display='none';
    thri4.style.display='none';
    thri5.style.display='none';
    thri2.style.display='block';
  }
  else{
    thri2.style.display='none';
  }
}
let thri3 =document.getElementById('thri3');

let onTogT3=document.getElementById('closeT3').onclick=function(){thri3.style.display='none';};

function funThriller3(){
  if (thri3.style.display =='none' ){ 
    thri1.style.display='none';
    thri2.style.display='none';
    thri4.style.display='none';
    thri5.style.display='none';
    thri3.style.display='block';
  }
  else{
    thri3.style.display='none';
  }
}
let thri4 =document.getElementById('thri4');

let onTogT4=document.getElementById('closeT4').onclick=function(){thri4.style.display='none';};

function funThriller4(){
  if (thri4.style.display =='none' ){
    thri1.style.display='none';
    thri2.style.display='none';
    thri3.style.display='none';
    thri5.style.display='none';
    thri4.style.display='block';
  }
  else{
    thri4.style.display='none';
  }
}
let thri5 =document.getElementById('thri5');

let onTogT5=document.getElementById('closeT5').onclick=function(){thri5.style.display='none';};

function funThriller5(){
  if (thri5.style.display =='none' ){
    thri1.style.display='none';
    thri2.style.display='none';
    thri3.style.display='none';
    thri4.style.display='none';
    thri5.style.display='block';
  }
  else{
    thri5.style.display='none';
  }
}


let child1 =document.getElementById('child1');

let onTogC1=document.getElementById('closeC1').onclick=function(){child1.style.display='none';};

function funChildren1(){
  if (child1.style.display =='none' ){
    child1.style.display='block';
    child2.style.display='none';
    child3.style.display='none';
    child4.style.display='none';
    child5.style.display='none';
  }
  else{
    child1.style.display='none';
  }
}

let child2 =document.getElementById('child2');

let onTogC2=document.getElementById('closeC2').onclick=function(){child2.style.display='none';};

function funChildren2(){
  if (child2.style.display =='none' ){
    child1.style.display='none';
    child3.style.display='none';
    child4.style.display='none';
    child5.style.display='none';
    child2.style.display='block';
  }
  else{
    child2.style.display='none';
  }
}
let child3 =document.getElementById('child3');

let onTogC3=document.getElementById('closeC3').onclick=function(){child3.style.display='none';};

function funChildren3(){
  if (child3.style.display =='none' ){ 
    child1.style.display='none';
    child2.style.display='none';
    child4.style.display='none';
    child5.style.display='none';
    child3.style.display='block';
  }
  else{
    child3.style.display='none';
  }
}
let child4 =document.getElementById('child4');

let onTogC4=document.getElementById('closeC4').onclick=function(){child4.style.display='none';};

function funChildren4(){
  if (child4.style.display =='none' ){
    child1.style.display='none';
    child2.style.display='none';
    child3.style.display='none';
    child5.style.display='none';
    child4.style.display='block';
  }
  else{
    child4.style.display='none';
  }
}
let child5 =document.getElementById('child5');

let onTogC5=document.getElementById('closeC5').onclick=function(){child5.style.display='none';};

function funChildren5(){
  if (child5.style.display =='none' ){
    child1.style.display='none';
    child2.style.display='none';
    child3.style.display='none';
    child4.style.display='none';
    child5.style.display='block';
  }
  else{
    child5.style.display='none';
  }
}


let sus1 =document.getElementById('sus1');

let onTogS1=document.getElementById('closeS1').onclick=function(){sus1.style.display='none';};

function funSuspense1(){
  if (sus1.style.display =='none' ){
    sus1.style.display='block';
    sus2.style.display='none';
    sus3.style.display='none';
    sus4.style.display='none';
    sus5.style.display='none';
  }
  else{
    sus1.style.display='none';
  }
}

let sus2 =document.getElementById('sus2');

let onTogS2=document.getElementById('closeS2').onclick=function(){sus2.style.display='none';};

function funSuspense2(){
  if (sus2.style.display =='none' ){
    sus1.style.display='none';
    sus3.style.display='none';
    sus4.style.display='none';
    sus5.style.display='none';
    sus2.style.display='block';
  }
  else{
    sus2.style.display='none';
  }
}
let sus3 =document.getElementById('sus3');

let onTogS3=document.getElementById('closeS3').onclick=function(){sus3.style.display='none';};

function funSuspense3(){
  if (sus3.style.display =='none' ){ 
    sus1.style.display='none';
    sus2.style.display='none';
    sus4.style.display='none';
    sus5.style.display='none';
    sus3.style.display='block';
  }
  else{
    sus3.style.display='none';
  }
}
let sus4 =document.getElementById('sus4');

let onTogS4=document.getElementById('closeS4').onclick=function(){sus4.style.display='none';};

function funSuspense4(){
  if (sus4.style.display =='none' ){
    sus1.style.display='none';
    sus2.style.display='none';
    sus3.style.display='none';
    sus5.style.display='none';
    sus4.style.display='block';
  }
  else{
    sus4.style.display='none';
  }
}
let sus5 =document.getElementById('sus5');

let onTogS5=document.getElementById('closeS5').onclick=function(){sus5.style.display='none';};

function funSuspense5(){
  if (sus5.style.display =='none' ){
    sus1.style.display='none';
    sus2.style.display='none';
    sus3.style.display='none';
    sus4.style.display='none';
    sus5.style.display='block';
  }
  else{
    sus5.style.display='none';
  }
}


let rom1 =document.getElementById('rom1');

let onTogR1=document.getElementById('closeR1').onclick=function(){rom1.style.display='none';};

function funRomance1(){
  if (rom1.style.display =='none' ){
    rom1.style.display='block';
    rom2.style.display='none';
    rom3.style.display='none';
    rom4.style.display='none';
    rom5.style.display='none';
  }
  else{
    rom1.style.display='none';
  }
}

let rom2 =document.getElementById('rom2');

let onTogR2=document.getElementById('closeR2').onclick=function(){rom2.style.display='none';};

function funRomance2(){
  if (rom2.style.display =='none' ){
    rom1.style.display='none';
    rom3.style.display='none';
    rom4.style.display='none';
    rom5.style.display='none';
    rom2.style.display='block';
  }
  else{
    rom2.style.display='none';
  }
}
let rom3 =document.getElementById('rom3');

let onTogR3=document.getElementById('closeR3').onclick=function(){rom3.style.display='none';};

function funRomance3(){
  if (rom3.style.display =='none' ){ 
    rom1.style.display='none';
    rom2.style.display='none';
    rom4.style.display='none';
    rom5.style.display='none';
    rom3.style.display='block';
  }
  else{
    rom3.style.display='none';
  }
}
let rom4 =document.getElementById('rom4');

let onTogR4=document.getElementById('closeR4').onclick=function(){rom4.style.display='none';};

function funRomance4(){
  if (rom4.style.display =='none' ){
    rom1.style.display='none';
    rom2.style.display='none';
    rom3.style.display='none';
    rom5.style.display='none';
    rom4.style.display='block';
  }
  else{
    rom4.style.display='none';
  }
}
let rom5 =document.getElementById('rom5');

let onTogR5=document.getElementById('closeR5').onclick=function(){rom5.style.display='none';};

function funRomance5(){
  if (rom5.style.display =='none' ){
    rom1.style.display='none';
    rom2.style.display='none';
    rom3.style.display='none';
    rom4.style.display='none';
    rom5.style.display='block';
  }
  else{
    rom5.style.display='none';
  }
}