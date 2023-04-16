document.addEventListener('DOMContentLoaded',() =>{
    const anclas_enlaces = document.querySelectorAll('.link--anchor')
    posSecciones = []
    diferencia = 100
    
    anclas_enlaces.forEach((r) => {
        objHref = r.getAttribute('href')
        nomUbica = objHref 
        posTop = document.querySelector(objHref).offsetTop
        posSecciones.push({nombre: nomUbica , posicion: posTop})
    })
    
    for(var clave in posSecciones) {
       console.log(clave +": " + posSecciones[clave].nombre);
       console.log(clave +": " + posSecciones[clave].posicion);
        
    }
    
    quitaClase = ()=>{
        anclas_enlaces.forEach((ancla) => {
                ancla.classList.remove('ancla-activa')
        })
    }
    
    document.addEventListener('click',(e) => {
        quitaClase();
        if(e.target.classList.contains('link--anchor')) {
            enlace = e.target
            enlace.classList.add('ancla-activa')
        } 
    })
    document.addEventListener('scroll',()=>{
        console.log(posSecciones.length)
        quitaClase()
        posMin = posSecciones[0].posicion
        posMax = posSecciones[posSecciones.length-1].nombre
        posMaxPos = document.querySelector(posMax).offsetHeight
        topPosMax = posSecciones[posSecciones.length-1].posicion + posMaxPos 
       
        quitaClase()
       if(scrollY > topPosMax || scrollY+diferencia < posMin){
        quitaClase()
        return
       }
        for(var clave in posSecciones) {
            posicionA  = posSecciones[clave].posicion
            if(scrollY + diferencia > posicionA){
                quitaClase()
                enlace = document.querySelector('a[href^="'+ posSecciones[clave].nombre +'"]')
                enlace.classList.add('ancla-activa')
            }
         }
    })
})