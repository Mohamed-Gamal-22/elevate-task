'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { Order } from '@/types/order';
import { CartItem } from '@/types/cardDetails';

export default function Orders() {
  const { data: session } = useSession();
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);



  const fetchOrders = useCallback( async () => {
    try {
      const token = session?.token;
      const res = await fetch('https://flower.elevateegy.com/api/v1/orders', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();

      if (data.message === 'success') {
        setOrders(data.orders);
      } else {
        Swal.fire('Error', 'Failed to fetch orders', 'error');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error details:', error.message);
        Swal.fire('Error', 'Something went wrong while fetching orders: ' + error.message, 'error');
      } else {
        console.error('Unknown error:', error);
        Swal.fire('Error', 'Something went wrong while fetching orders', 'error');
      }
    } finally {
      setLoading(false);
    }
  }, [session?.token])



  useEffect(() => {
    if (session?.token) {
      fetchOrders();
    }
  }, [session, fetchOrders]);

  if (loading) {
    return <p className="w-[80%] mx-auto p-10 text-center mt-10 text-lg font-semibold bg-red-400 text-white">Loading orders...</p>;
  }

  if (orders.length === 0) {
    return <p className="w-[80%] mx-auto text-center mt-10 p-10 text-lg bg-red-400 font-semibold text-white">No orders found.</p>;
  }

  return (
    <div className="grid w-[80%] mx-auto gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
  {orders.map(order => (
    <div
      key={order._id}
      className="border rounded-lg shadow hover:shadow-lg transition duration-300 p-4 bg-white"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">Order #{order.orderNumber}</h3>
        <span
          className="text-xs font-semibold py-1 px-2 rounded-full text-white"
          style={{ backgroundColor: '#F82BA9' }}
        >
          {order.state}
        </span>
      </div>

      <p className="text-sm text-gray-500 mb-1">
        Date: {new Date(order.createdAt).toLocaleDateString()}
      </p>

      <div className="space-y-2 mt-4">
        {order.orderItems.map((item: CartItem) => (
          <div key={item._id} className="flex items-center gap-4">
            <Image
              width={300}
              height={400}
              src={item.product.imgCover}
              alt={item.product.title}
              className="w-16 h-16 rounded object-cover"
            />
            <div>
              <h4 className="font-medium">{item.product.title}</h4>
              <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              <p className="text-sm text-gray-600">Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between text-sm font-medium text-gray-800">
        <span>Total: ${order.totalPrice}</span>
        <span>Payment: {order.paymentType}</span>
      </div>
    </div>
  ))}
</div>

  );
}
