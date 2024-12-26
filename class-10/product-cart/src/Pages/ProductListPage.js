import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../Reducers/productList.reducer'
import { addToCart } from '../Reducers/cart.reducer';
import { PiShoppingCartBold } from "react-icons/pi";
import Pagination from '../Component/Pagination';

const ProductListPage = ({setOpen}) => {
  
  const products = useSelector(state => state.productList.list);
  const cartProducts = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => dispatch(setProducts(data)));
  },[]);

  const handleAddToCart = (e) => {
    const productID = e.target.dataset.id;
    dispatch(addToCart(productID));
  }

  const handleButtonClick = () => {
    setOpen(true); // Open the CartPage dialog
  };

  return (
    <>
      <button 
        className="
          flex items-center justify-center gap-2 
          border-2 border-black rounded-full 
          p-2.5 bg-black text-white 
          left-10
          hover:scale-105 absolute  
          sm:top-16 sm:left-10 md:top-15 md:left-10 
          lg:top-15 lg:left-20
        " 
        onClick={handleButtonClick}
      >
        <PiShoppingCartBold className="text-2xl md:text-3xl lg:text-4xl" />
        {/* <p className="text-sm md:text-base lg:text-lg font-bold">Cart Details</p> */}
      </button>  
      <h2 className="sr-only">Products</h2>
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-2">

      

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group border rounded-lg hover:scale-105 shadow-xl">
            <img
              alt='product image'
              src={product.image}
              className="aspect-square bg-white object-scale-down rounded-lg bg-gray-200 object-cover hover:opacity-75 xl:aspect-[7/8]"
            />
            <h3 className="m-2 text-sm text-gray-700">{product.title}</h3>
            <p className="mx-2 text-sm text-gray-800 line-clamp-2">{product.description}</p>
            <p className="m-2 text-lg font-medium text-gray-900">${product.price}</p>
            <div className="flex justify-center m-2">
              <button 
                onClick={handleAddToCart} 
                data-id={product.id} 
                className={`px-4 py-1 text-sm text-white font-semibold rounded border hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  Object.keys(cartProducts).includes(String(product.id))
                    ? "bg-green-500 border-green-200 hover:bg-green-600 focus:ring-green-600"
                    : "bg-blue-500 border-blue-200 hover:bg-blue-600 focus:ring-blue-600"
                }`}
              >
                { Object.keys(cartProducts).includes(String(product.id)) ? "Added" : "Add to Cart" }
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Pagination />
    </>
  )
}

export default ProductListPage