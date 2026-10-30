export interface INewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
    urlToImage?: string;
    author?: string;
    source?: {
        name: string;
    };
    publishedAt?: string;
    title?: string;
}

export interface INewsArticle {
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

export interface IApiResponse {
    status: string;
    sources: INewsSource[];
}
