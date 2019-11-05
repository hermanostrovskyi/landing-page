export class Navigation {
    navClass: string;
    toggleBtn: HTMLButtonElement | null;
    menuList: HTMLUListElement | null;


    constructor(navClass: string) {
        this.navClass = navClass;
        this.toggleBtn = document.querySelector(`.${this.navClass}__toggle`);
        this.menuList = document.querySelector(`.${this.navClass}__list`);
        this.addToggleBtnListener();
    }

    addToggleBtnListener(): void {
        if (this.toggleBtn) {
            this.toggleBtn.addEventListener('click', () => {
                this.toggleMenuSwitchActiveClass();
                this.toggleMenuListVisibility();
            });
        }
    }

    toggleMenuListVisibility(): void {
        if (this.menuList) {
            this.menuList.classList.toggle(`${this.navClass}__list--active`)
        }
    }

    toggleMenuSwitchActiveClass(): void {
        if (this.toggleBtn) {
            this.toggleBtn.classList.toggle(`${this.navClass}__toggle--active`);
        }
    }
}
