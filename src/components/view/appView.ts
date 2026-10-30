import News from './news/news';
import Sources from './sources/sources';
import type { NewsResponse, SourcesResponse } from '../../types/index';

export class AppView {
    news: News;
    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: Pick<NewsResponse, 'articles'> | null | undefined): void {
        const values = data?.articles ?? [];
        this.news.draw(values);
    }

    drawSources(data: Pick<SourcesResponse, 'sources'> | null | undefined): void {
        const values = data?.sources ?? [];
        this.sources.draw(values);
    }
}

export default AppView;
