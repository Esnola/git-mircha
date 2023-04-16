document.addEventListener('DOMContentLoaded',() =>{
    const anclas_enlaces = document.querySelectorAll('.link--anchor')
    posSecciones = []
    diferencia = 100
    
    anclas_enlaces.forEach((r) => {
        objHref = r.getAttribute('href')
        indice = String( objHref)
        posSecciones.push(document.querySelector(objHref).offsetTop)
    })
    console.log(posSecciones)
   
    for(var clave in posSecciones) {
       // console.log(clave+": " +posSecciones[clave]);
        
    }
    
    posSecciones.forEach((res,clave) =>{
        console.log('Clave ' + clave + ' Resultado ' + res);
    })
    
    
    quitaClase = ()=>{
        anclas_enlaces.forEach((ancla) => {
                ancla.classList.remove('ancla-activa')
        })
    }
    document.addEventListener('click',(e) => {
        quitaClase();
        if(e.target.classList.contains('link--anchor')) {
            var enlace = e.target
            enlace.classList.add('ancla-activa')
            var objetivo = enlace.getAttribute('href')
            var posTop = document.querySelector(objetivo).offsetTop
        } 
    })
    document.addEventListener('scroll',()=>{
        maximo = posSecciones.length -1
       for(let i=0; i < posSecciones.length; i++){
            sig = (i <= maximo ) ? i+1 : i
          if(scrollY >  posSecciones[i]-diferencia  && scrollY < posSecciones[sig]){
            console.log(posSecciones[i])
        }
       }
    })
})