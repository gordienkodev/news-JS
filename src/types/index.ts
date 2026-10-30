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
    source: {
        name: string;
    };
    publishedAt: string;
    title: string;
}

export interface IApiResponse {
    status: string;
    sources: INewsSource[];
}
