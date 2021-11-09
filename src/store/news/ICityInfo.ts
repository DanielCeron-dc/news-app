export interface INews {
    id: number;
    author: string;
    title: string;
    publishedAt: Date;
    description: string;
    content: string;
    urlToImage: string;
}

export interface ICurrentWheather {
    temperature: number;
    wheatherDescription: string[];
}

export default interface ICityInfo {
    news: INews[];
    currentWheather: ICurrentWheather;
}