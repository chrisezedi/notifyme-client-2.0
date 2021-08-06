export interface Channel{
    name:string,
    description:string,
    category:string,
    imgurl?:string,
    subscribers?:[],
    _id:string,
    admin?:{
        _id:string,
        firstname:string,
        imgurl:string
    },
    isSubscribed:boolean;
}