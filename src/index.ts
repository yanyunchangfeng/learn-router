
class App {
    router:any;
    linkList:any;
    constructor(){
        this.router = 'router-view';
        this.initEvent();
    }
    initEvent = () => {
       this.router = document.getElementById(this.router);
       this.linkList = document.querySelectorAll('a[href^="/"]');
       this.linkList.forEach((el:HTMLElement,index:number) => el.addEventListener('click', e => {
           e.preventDefault();
           history.pushState({id:index},'', el.getAttribute('href'));
           this.popState();
       }
       ));
       window.addEventListener('DOMContentLoaded',this.hashChange);
       window.addEventListener('DOMContentLoaded',this.popState);
       window.addEventListener('hashchange',this.hashChange);
       window.addEventListener('popstate',this.popState);
    }
    popState = () => {
       switch(location.pathname){
           case '/blog':
               this.router.innerHTML = "这是history bolg";
               break;
           case '/code':
               this.router.innerHTML = "这是histoy code";
               break;
           case '/text':
               this.router.innerHTML = "这是history text";
               break;
           case '/design':
               this.router.innerHTML = "这是history design";
               break;
           default:
               this.router.innerHTML = "这是history 404页面"    
       }
    }
    hashChange = () => {
        switch(location.hash){
            case '#/blog':
                this.router.innerHTML = "这是 hash bolg页面";
                break;
            case '#/code':
                this.router.innerHTML = "这是 hash code页面";
                break;
            case '#/text':
                this.router.innerHTML = "这是 hash text页面";
                break;
            case '#/design':
                this.router.innerHTML = "这是 hash design页面";
                break;
                default:
                this.router.innerHTML = "这是 hash 404页面"
        }
    }
}
let sys = new App();

declare var module:any;

if(module.hot){
//    module.hot.accept();
}