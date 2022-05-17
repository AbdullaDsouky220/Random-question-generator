const btn=document.getElementById('button');
const image=document.getElementById('imageR')
btn.addEventListener('click',function(){
 imageR.src=`${window.location.href}/images/${Math.floor(Math.random()*35)+1}.png`
})