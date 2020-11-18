import { IArticles } from 'src/app/shared/types/articles.interface';

export interface IGetFeedResponse {
	articles: IArticles[] 
	articlesCount: number
}