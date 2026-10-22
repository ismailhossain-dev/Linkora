type IAuthor ={
    id:string;
    name:string;
    email:string;
    activeStaus:string;
    role:string;
    createdAt:string;
    updatedAt:string
}

type IComment ={
    id:string;
    authorId: string;
    content: string;
    postId: string;
    status:string;
    createAt:string;
    updateAt: string
    length?:number

}
export type IPost ={
    id: string;
    title:string;
    content:string;
    thumbnail:string;
    isFeatured: boolean;
    status:string;
    tags:string[];
    views:number;
    createAt:string;
    updateAt:string;
    isPremium:boolean;
    authorId:string;
    comments?: IComment;
    author?:IAuthor;
    _count?: {
        comments: number
    }

}