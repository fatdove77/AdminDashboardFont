import service from "./index";

//
export const apiArticleEdit = info => service.post('/api/v1/articleEdit', info);


export const   getOrders =async()=>{
 return   await fetch('https://dummyjson.com/carts/1')
.then(res => res.json())
}