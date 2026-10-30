import './sources.css';
import type { NewsSource } from '../../../types/index';

class Sources {
    private data: NewsSource[] = [];
    private page = 0;
    private readonly pageSize = 12;

    constructor() {
        document.querySelector<HTMLButtonElement>('.sources__previous')!.addEventListener('click', () => {
            if (this.page > 0) {
                this.page -= 1;
                this.render();
            }
        });
        document.querySelector<HTMLButtonElement>('.sources__next')!.addEventListener('click', () => {
            if ((this.page + 1) * this.pageSize < this.data.length) {
                this.page += 1;
                this.render();
            }
        });
    }

    draw(data: NewsSource[]): void {
        this.data = data;
        this.page = 0;
        this.render();
    }

    private render(): void {
        const container = document.querySelector<HTMLElement>('.sources')!;
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp')!;
        const start = this.page * this.pageSize;

        this.data.slice(start, start + this.pageSize).forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

            sourceClone.querySelector<HTMLElement>('.source__item-name')!.textContent = item.name;
            const button = sourceClone.querySelector<HTMLButtonElement>('.source__item')!;
            button.setAttribute('data-source-id', item.id);
            button.setAttribute('aria-pressed', String(container.getAttribute('data-source') === item.id));
            button.addEventListener('click', () => {
                container.querySelectorAll<HTMLButtonElement>('.source__item').forEach((source) => {
                    source.setAttribute('aria-pressed', String(source === button));
                });
            });

            fragment.append(sourceClone);
        });

        container.replaceChildren(fragment);
        const pageCount = Math.ceil(this.data.length / this.pageSize);
        document.querySelector<HTMLElement>('.sources__pagination')!.hidden = pageCount <= 1;
        document.querySelector<HTMLElement>('.sources__page')!.textContent = `${this.page + 1} / ${pageCount}`;
        document.querySelector<HTMLButtonElement>('.sources__previous')!.disabled = this.page === 0;
        document.querySelector<HTMLButtonElement>('.sources__next')!.disabled = this.page + 1 >= pageCount;
    }
}

export default Sources;
