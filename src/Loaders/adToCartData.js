import { getDataFromDb } from "../components/Cards/utils/fakeDb";

const addToCartProduct = async () => {
  const productsData = await fetch('products.json');
  const products = await productsData.json();
  console.log(products)

  const storedCart = getDataFromDb();
  let cartArray = [];

  for (const id in storedCart) {
    const foundProduct = products.find((product) => product.id === id);
    foundProduct.quantity = storedCart[id];
    cartArray.push(foundProduct);
  }
  return cartArray;
};
export default addToCartProduct;