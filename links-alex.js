document.addEventListener('DOMContentLoaded',() =>{
    const anclas = document.querySelectorAll('.link--anchor')
    console.log(anclas)
    
    quitaClase = ()=>{
        anclas.forEach((ancla) => {
                ancla.classList.remove('ancla-activa')
        })
    }
    document.addEventListener('click',(e) => {
    quitaClase();
        if(e.target.classList.contains('link--anchor')){
           console.log(e.target)
            e.target.classList.add('ancla-activa')
        }
    })
    
})