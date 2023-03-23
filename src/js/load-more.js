class LoadMore { 
    constructor() {
        

        const btn = document.querySelector(".button")
        
        btn.addEventListener('click', handleClick)
        function handleClick(){ 
        btn.classList.add("button--loading")
        }

    }

    btnEnable() { 
btn.disable= false
    }

btnDisable() { 
btn.disable= true
    }


}



export default {LoadMore}