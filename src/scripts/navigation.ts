export class Navigation {
    navClass: string;
    toggleBtn: HTMLButtonElement | null;
    menuList: HTMLUListElement | null;


    constructor(navClass: string) {
        this.navClass = navClass;
        this.toggleBtn = document.querySelector(`.${this.navClass}__toggle`);
        this.menuList = document.querySelector(`.${this.navClass}__list`);
        this.addToggleBtnListener();
        this.activateMenuItem();
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

    activateMenuItem(): void {
        if (this.menuList) {
            this.menuList.addEventListener('click', (event) => {
                const target: HTMLLinkElement = event.target as HTMLLinkElement;

                if (this.isTargetMenuItem(target) && !this.isMenuItemActive(target)) {
                    const linkList: HTMLLinkElement[] = this.makeMenuItemArray(target);
                    this.deactivateActiveMenuItems(linkList);
                    this.addActiveLinkClass(target);
                }
            });
        }
    }

    isTargetMenuItem(eventTargetElement: HTMLElement): boolean {
        return !!eventTargetElement.closest(`.${this.navClass}__link`);
    }


    makeMenuItemArray(eventTargetElement: HTMLElement): HTMLLinkElement[] {
        // @ts-ignore
        return [...eventTargetElement.parentElement.parentElement.querySelectorAll(`.${this.navClass}__link`)];
    }


    deactivateActiveMenuItems(linkList: HTMLLinkElement[]): void {
        linkList.forEach((linkItem: HTMLLinkElement): void => {
            if (this.isMenuItemActive(linkItem)) {
                this.removeActiveLinkClass(linkItem);
            }
        });
    }

    isMenuItemActive(menuItem: HTMLLinkElement): boolean {
        return menuItem.classList.contains(`${this.navClass}__link--active`)
    }

    removeActiveLinkClass(menuItem: HTMLLinkElement): void {
        menuItem.classList.remove(`${this.navClass}__link--active`);
    }

    addActiveLinkClass(menuItem: HTMLLinkElement): void {
        menuItem.classList.add(`${this.navClass}__link--active`);
    }

}
