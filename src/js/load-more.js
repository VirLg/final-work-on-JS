 

class LoadMore { 

    constructor() {
        
        this.btn = document.querySelector(".button")
        
 this.btn.addEventListener('click', ()=>this.btn.classList.add("button--loading"))      
    }
    
    btnEnable() { 
        this.btn.disabled = false
        
    }

btnDisable() { 
this.btn.disabled= true
    }




}

export default {LoadMore}