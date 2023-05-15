const kors=document.querySelectorAll('.kor')
const notify=document.querySelector('.notify')

kors.forEach(kor=>{
    kor.addEventListener('click',function(){
        notify.style.display = "block"
        setTimeout(function(){
        notify.style.display = 'none'
        }, 3000);
    })
});