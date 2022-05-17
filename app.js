const btn=document.getElementById('button');
const image=document.getElementById('imageR')
btn.addEventListener('click',function(){
 imageR.src=`./images/${Math.floor(Math.random()*49)+1}.PNG`
})