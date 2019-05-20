
class App {
    router:any;
    constructor(){
        this.router = 'router-view';
        this.initEvent();
    }
    initEvent = ()=>{
       this.router = document.getElementById(this.router);
       window.addEventListener('hashchange',this.hashChange)

    }
    hashChange = () => {
        switch(location.hash){
            case '#blog':
                this.router.innerHTML = "这是bolg页面";
                break;
            case '#code':
                this.router.innerHTML = "这是code页面";
                break;
            case '#text':
                this.router.innerHTML = "这是text页面";
                break;
            case '#text':
                this.router.innerHTML = "这是text页面";
                break;
                default:
                this.router.innerHTML = "这是404页面"

        }
    }
}
let sys = new App();