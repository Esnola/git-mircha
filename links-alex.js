document.addEventListener('DOMContentLoaded',() =>{
    const anclas_enlaces = document.querySelectorAll('.link--anchor')
    posSecciones = []
    diferencia = 150
    

    
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
    /*
    posSecciones.forEach((res,num) =>{
        console.log('Numero: ' + num + ' Resultado ' + res.nombre);
    })
    */
    
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
           /* 
                var objetivo = enlace.getAttribute('href')
                var posTop = document.querySelector(objetivo).offsetTop
            */
        } 
    })
    document.addEventListener('scroll',()=>{
        for(var clave in posSecciones) {
          //  console.log(clave +": " + posSecciones[clave].nombre);
           // console.log(clave +": " + posSecciones[clave].posicion);
            posicionA  = posSecciones[clave].posicion
            if(scrollY > posicionA){
                quitaClase()
                enlace = document.querySelector('a[href^="'+ posSecciones[clave].nombre +'"]')
               // enlaceQuitar =document.querySelector('a[href^="'+ posSecciones[clave - 1].nombre +'"]')
               // console.log(enlace)
               //  enlaceQuitar
                 enlace.classList.add('ancla-activa')
            }
            
         }
    })
})