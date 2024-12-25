import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../Reducers/productList.reducer'
import { addToCart } from '../Reducers/cart.reducer';

const ProductListPage = ({setOpen}) => {
  
  const products = useSelector(state => state.productList.list);
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
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-2">
      <div>
      <button onClick={handleButtonClick}>Open Cart</button>
    </div>
      <h2 className="sr-only">Products</h2>

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
              <button onClick={handleAddToCart} data-id={product.id} className="px-4 py-1 text-sm text-white font-semibold bg-blue-500 rounded border border-blue-200 hover:bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductListPage