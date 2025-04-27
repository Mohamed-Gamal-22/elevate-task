'use client';

import { createContext, useState, useEffect } from "react";
import { addToCartAction } from "../actions/addtocart.action";
import { getCartAction } from '../actions/get-user-card.action';
import { updateCartQuantityAction } from '../actions/update-cart-product-quantity.action';
import { removeCartItemAction } from '../actions/remove-product.action';
import { clearCartAction } from '../actions/clear-cart.action';
import { getSession } from "next-auth/react";
import Swal from 'sweetalert2';

export const CartContext = createContext({});

export default function CartContextProvider(props: any) {
  const [numberOfCartItem, setnumberOfCartItem] = useState<any>(null);

  async function addToCard(product: string, quantity: number = 1) {
    const response = await addToCartAction({ product, quantity });
    console.log(response);
    if (response.message == "success") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product Added Successfully",
        showConfirmButton: true,
        timer: 1500
      });
      getLogedUserCard();
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Something Wrong While Add Product To Cart",
        showConfirmButton: true,
        timer: 1500
      });
    }
  }

  async function getLogedUserCard() {
    const response = await getCartAction();
    console.log(response);
    setnumberOfCartItem(response.numOfCartItems);
    return response;
  }

  async function updateProductQuantity(cartItemId: string, newQuantity: number) {
    const response = await updateCartQuantityAction({ cartItemId, newQuantity });
    return response;
  }

  async function removeSpecificProduct(cartItemId: string) {
    const response = await removeCartItemAction({ cartItemId });
    return response;
  }

  async function clearUserCard() {
    const response = await clearCartAction();
    return response;
  }

  async function checkIfLogin() {
    const session = await getSession() // check on session

    if (session?.token) {
      // if user is loged in 
      await getLogedUserCard();
    }
  }

  useEffect(() => {
    checkIfLogin();
  }, []);

  return (
    <CartContext.Provider value={{
      addToCard,
      updateProductQuantity,
      getLogedUserCard,
      removeSpecificProduct,
      clearUserCard,
      numberOfCartItem,
      setnumberOfCartItem
    }}>
      {props.children}
    </CartContext.Provider>
  );
}
