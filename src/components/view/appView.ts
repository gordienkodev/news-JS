import News from './news/news';
import Sources from './sources/sources';
import type { NewsArticle, NewsSource } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: { articles?: NewsArticle[] } | null | undefined): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: { sources?: NewsSource[] } | null | undefined): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
