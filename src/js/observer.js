import handleLoadMore from '../index'

const refSentinel = document.querySelector('#sentinel')
const target = document.querySelector('#sentinel');

async function onObserver (entries) { 
  await entries.forEach(entri => { 
    if (entri.isIntersecting||pageXOffset) { 
       
handleLoadMore.handleLoadMore()
     }
     
   } )
}

const options = {
  rootMargin:'-100px',
}
const observer = new IntersectionObserver(onObserver, options)
observer.observe(refSentinel)



export default { observer}





