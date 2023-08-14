export interface Post {
	id?: number;
    createdByUserId?: string;
    createdDateTime?: Date;
	caption?: string;
	postType?: number;
}