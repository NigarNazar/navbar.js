const neroElement = document.getElementsByClassName("nero")


for( let i=0; i <neroElement.length; i++ ){
    neroElement[i].addEventListener('click', function(){
        const pepers = document.getElementsByClassName('peper')
        console.log('pepers')
        if(pepers.length >0){
            pepers[0].className = pepers[0].className.replace('peper' , " ")
        }
        this.className += "peper"
        
    })
}