export class ToTop {
    toTop: HTMLLinkElement;

    constructor() {
        this.toTop = document.querySelector('.toTop');
        window.addEventListener('scroll', () => {
            this.scrollListener();
        })
    }

    scrollListener() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop >  80) {
            if(this.toTop.classList.contains('toTop--disabled')) {
                this.toTop.classList.remove('toTop--disabled');
            }
        } else {
            this.toTop.classList.add('toTop--disabled');
        }
    }
}
