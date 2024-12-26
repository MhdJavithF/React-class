import React from 'react'
import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseQty, increaseQty, removeFromCart, updateQty } from '../Reducers/cart.reducer'


const CartPage = ({open, setOpen}) => {

  const cartItems = useSelector(state => state.cart.items);
  
  const productList = useSelector(state => state.productList.list);
  const dispatch = useDispatch();

  const getProduct = (productID) => {
    return productList.find(product => product.id == productID)
  }

  const handleRemove = (productID) => (e) => {
    dispatch(removeFromCart(productID));
  }

  const handleDecreaseQty = (productID) => () => {
    dispatch(decreaseQty(productID));
  }

  const handleIncreaseQty = (productID) => () => {
    dispatch(increaseQty(productID));
  }

  const handleUpdate = (productID) => (e) => {
    dispatch(updateQty({productID, value: e.target.value}));
  }

  const calculateSubtotal = () => {
    return Object.keys(cartItems).reduce((total, productId) => {
      const product = getProduct(productId); // Get product details
      const quantity = cartItems[productId]; // Get quantity from cart
      const price = product?.price || 0; // Ensure price is valid
      return total + price * quantity;
    }, 0);
  };

  return (
    <Dialog open={Boolean(open)} onClose={() => setOpen(false)} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full sm:max-w-md">
            <DialogPanel
              transition
              className="pointer-events-auto w-full h-full transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:w-screen sm:max-w-md sm:h-auto sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">

                        {Object.keys(cartItems)?.map((productId) => (
                          <li key={getProduct(productId).id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img  src={getProduct(productId).image} className="size-full object-scale-down" />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a >{getProduct(productId).title}</a>
                                  </h3>
                                  <p className="ml-4">${getProduct(productId).price}</p>
                                </div>
                              </div>
                              <div className="flex flex-1 items-center justify-between text-sm ">
                                  <div class="flex items-center">
                                    <label for="quantity1" class="mr-2">
                                      Qty:
                                    </label>
                                    <button
                                      onClick={handleDecreaseQty(productId)}
                                      class="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
                                    >
                                      -
                                    </button>
                                    <input
                                      type="number"
                                      id="quantity1"
                                      class="border rounded-md px-2 py-1 mx-2 w-24"
                                      min="1"
                                      value={cartItems[productId]}
                                      onChange={handleUpdate(productId)}
                                    />
                                    <button
                                      onClick={handleIncreaseQty(productId)}
                                      class="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
                                    >
                                      +
                                    </button>
                                  </div>
                                
                                  <div className='remove'>
                                    <button type="button" onClick={handleRemove(productId)} className="font-medium text-red-600 hover:scale-90">
                                        Remove
                                      </button>
                                  </div>
                              </div>
                            </div>
                          </li>
                        ))}

                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${calculateSubtotal().toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}


export default CartPage