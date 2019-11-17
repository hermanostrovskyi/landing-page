export class PortfolioFilter {
    portfolioItems: NodeListOf<HTMLDivElement>;
    portfolioClassName: string;
    filterList: HTMLUListElement;

    constructor(className: string) {
        this.portfolioClassName = className;
        this.portfolioItems = document.querySelectorAll(`.portfolio__list-item`);
        this.filterList = document.querySelector(`.portfolio-nav__list`);
        this.filterPortfolio('all');
        this.addFilterListClickListener();
    }

    addFilterListClickListener(): void {
        this.filterList.addEventListener('click', (event) => {
            const target = (event.target as HTMLInputElement);
            if (target.closest('a')) {
                this.filterPortfolio(target.innerHTML);
            }
        });
    }

    filterPortfolio(type: string): void {
        const portfolioItems = [...this.portfolioItems];
        portfolioItems.forEach((portfolioItem) => portfolioItem.classList.remove(`portfolio__list-item--active`));
        if (type === 'all') {
            portfolioItems.forEach((portfolioItem) => portfolioItem.classList.add(`portfolio__list-item--active`));
        } else {
            portfolioItems.forEach((portfolioItem) => {
                if (portfolioItem.dataset.type === type) {
                    portfolioItem.classList.add(`portfolio__list-item--active`);
                }
            });
        }
    }
}
