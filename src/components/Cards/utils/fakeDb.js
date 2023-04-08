// add to db

const addToDb = id =>{
//   get item from db
let shoppingCart = {};

const storedCart = localStorage.getItem('shoppingCart');
if(storedCart){
    shoppingCart = JSON.parse(storedCart)
}

// add quantity
const qauntity = shoppingCart[id];
if(qauntity){
    const newQuantity = qauntity + 1;
    shoppingCart[id] = newQuantity;
}else{
     shoppingCart[id] = 1;
}

localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))

}

export {addToDb}