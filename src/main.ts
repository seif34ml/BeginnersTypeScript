let myName: string = 'Seif'
//let age:Number
let date:Date
let active:Boolean
let albumID:any

date=new Date('Tue Jul 25 2023 14:55:14 GMT+0300');
console.log(date);
active=false
albumID=true
albumID=34
albumID='ss345'
albumID={name:'ss'}
albumID=[1,2,3,'h']
console.log(albumID)


let array:[string,number,Boolean]=['string',1,true]

array[0]='seif' // as array first char 0 is string typescript emits error as it is assigned as numebr


interface Album{
 name:String,
 id:Number|String,
 albumsongs:[...any]
}



let album:Album={

    name:'seif',
    id:'hj345',
    albumsongs:['song 1','song 2','ff']
}




