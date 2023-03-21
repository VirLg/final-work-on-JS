// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BEST_URL = 'https://pixabay.com/api/';
const KEY = '34368263-756a5eb3a3e360b335b61bac8';

class GalleryAPIServise {
    constructor() {
        this.requrefUlestApi = '';
        this.page = 1;
    }
    async fetchGallery() {
          console.log(this.requrefUlestApi);
        try {
            const responce = await fetch(`${BEST_URL}/?key=${KEY}&category=${this.requestApi}&per_page=40,&page=${this.page}`)
        
            if (!responce.ok) {
                throw new Error(responce.statusText)
            }
            const data = await responce.json()
            this.incrementPage()
            return data
        } catch (e) { 
            console.log(e)
        }
    }
    get request() { 
        return this.requestApi
    }
    set request(newRequest) { 
         this.requestApi = newRequest
    }
    incrementPage() { 
        this.page+=1
    }

}        


export default { GalleryAPIServise };