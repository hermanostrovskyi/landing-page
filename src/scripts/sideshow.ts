export class Sideshow {
    currentSlide: number;
    baseSelectorClass: string;
    slideItems: NodeListOf<HTMLDivElement>;
    prevBtn: HTMLLinkElement;
    nextBtn: HTMLLinkElement;

    constructor(slideshowContainerClass: string) {
        this.currentSlide = 0;
        this.baseSelectorClass = slideshowContainerClass;
        this.slideItems = document.querySelectorAll(`.${slideshowContainerClass}__item`);
        this.prevBtn = document.querySelector(`.${slideshowContainerClass}__prev-btn`);
        this.nextBtn = document.querySelector(`.${slideshowContainerClass}__next-btn`);
        this.showSlide();
        this.onPrevListener();
        this.onNextListener();
    }

    showSlide(): void {
        [...this.slideItems].forEach((slideItem) => slideItem.classList.remove(`${this.baseSelectorClass}__item--active`));

        this.slideItems[this.currentSlide].classList.add(`${this.baseSelectorClass}__item--active`);
    }

    setCurrentSlide(): void {
        this.currentSlide = this.currentSlide > this.slideItems.length - 1 ? 0 : this.currentSlide;
        this.currentSlide = this.currentSlide < 0 ? this.slideItems.length - 1 : this.currentSlide;
    }

    onPrevListener(): void {
        this.prevBtn.addEventListener('click', () => {
            this.currentSlide--;
            this.setCurrentSlide();
            this.showSlide();
        });
    }

    onNextListener(): void {
        this.nextBtn.addEventListener('click', () => {
            this.currentSlide++;
            this.setCurrentSlide();
            this.showSlide();
        });
    }

}
