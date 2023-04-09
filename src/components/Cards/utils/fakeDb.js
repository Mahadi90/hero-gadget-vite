// add to db

const addToDb = id =>{

//   get item from db

let shoppingCart = {};

const storedCart = localStorage.getItem('shoppingCart')
if(storedCart){
    shoppingCart = JSON.parse(storedCart)
}

// add quantity
const quantity = shoppingCart[id];
if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
}
else{
    shoppingCart[id] = 1;
}

// set item to db
localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart))
}


// get data from db
const getDataFromDb = () =>{
    let shoppingCart = {};

    const storedCart = localStorage.getItem('shoppingCart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}
export {addToDb, getDataFromDb}