export type Product = {
    _id: string;
    id: string;
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
    __v: number;
    discount: number;
    sold: number;
    rateAvg: number;
    rateCount: number;
  };
  
  export type OrderItem = {
    _id: string;
    product: Product;
    price: number;
    quantity: number;
  };
  
  export type Order = {
    _id: string;
    user: string;
    orderItems: OrderItem[];
    totalPrice: number;
    paymentType: 'cash' | 'card' | string;
    isPaid: boolean;
    isDelivered: boolean;
    state: 'inProgress' | 'completed' | 'cancelled' | string;
    createdAt: string;
    updatedAt: string;
    orderNumber: string;
    __v: number;
  };
  