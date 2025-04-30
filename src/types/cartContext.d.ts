import { CartDetailsType } from "./cardDetails";

export type CartItem = {
    id: string;
    product: string;
    quantity: number;
    // Add other properties as needed
  };
  
export type CartContextType = {
    addToCard: (product: string, quantity: number) => Promise<void>;
    updateProductQuantity: (cartItemId: string, newQuantity: number) => Promise<{message:string, numOfCartItems :number, cart: CartDetailsType}>;
    getLogedUserCard: () => Promise<{message:string, numOfCartItems :number, cart: CartDetailsType}>;
    removeSpecificProduct: (cartItemId: string) => Promise<{message:string, numOfCartItems :number, cart: CartDetailsType}>;
    clearUserCard: () => Promise<{message:string, numOfCartItems :number, cart: CartDetailsType}>;
    numberOfCartItem: number | null;
    setnumberOfCartItem: React.Dispatch<React.SetStateAction<number | null>>;
  };
  