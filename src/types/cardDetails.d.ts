// Represents each product in the cart
 type Product = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    imgCover: string;
    images: string[];
    price: number;
    priceAfterDiscount: number;
    quantity: number;
    category: string;
    occasion: string;
    createdAt: string;
    updatedAt: string;
    discount: number;
    sold: number;
    rateAvg: number;
    rateCount: number;
    id: string;
  };
  
  // Represents a cart item that contains a product and its quantity
export type CartItem = {
    product: Product;
    price: number;
    quantity: number;
    _id: string;
  };
  
  // Represents the entire cart with cart items, total price, and discount
export type CartDetailsType = {
    _id: string;
    user: string;
    cartItems: CartItem[];
    discount: number;
    totalPrice: number;
    totalPriceAfterDiscount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
  