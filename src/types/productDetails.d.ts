export interface Product {
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
    createdAt: string; // or Date, if you parse it
    updatedAt: string; // or Date
    __v: number;
    discount: number;
    sold: number;
    rateAvg: number;
    rateCount: number;
  }
  