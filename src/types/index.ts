export interface NewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface NewsArticle {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

export interface ApiResponse {
    status: 'ok';
}

export interface SourcesResponse extends ApiResponse {
    sources: NewsSource[];
}

export interface NewsResponse extends ApiResponse {
    totalResults: number;
    articles: NewsArticle[];
}
