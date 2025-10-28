export type User ={
    id : string;
    username :string;
    name : string;
    image : string;
    bio : string;
}

export type Post ={
    id:string;
    createAtt: string;
    content :string;
    user_id : string;
    user :User;   
}