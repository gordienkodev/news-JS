import AppLoader from './appLoader';
import type { ApiResponse, NewsArticle } from '../../types/index';

class AppController extends AppLoader {
    getSources(callback: (data: ApiResponse) => void): void {
        super.getResp<ApiResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: { articles: NewsArticle[] }) => void): void {
        let target = e.target;
        const newsContainer = e.currentTarget;

        if (!(newsContainer instanceof HTMLElement)) return;

        while (target instanceof HTMLElement && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (!sourceId) return;

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<{ articles: NewsArticle[] }>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentElement;
        }
    }
}

export default AppController;
