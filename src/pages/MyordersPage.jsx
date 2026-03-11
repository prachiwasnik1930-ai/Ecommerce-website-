import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyordersPage = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      const mockOrders = [
        {
          _id: "12345",
          createdAt: new Date(),
          shippingAddress: { city: "Nagpur", country: "India" },
          orderItems: [
            {
              name: "Product 1",
              image: "https://picsum.photos/500/500?random=1",
            },
          ],
          totalPrice: 100,
          isPaid: true,
        },
        {
          _id: "12348",
          createdAt: new Date(),
          shippingAddress: { city: "Pune", country: "India" },
          orderItems: [
            {
              name: "Product 2",
              image: "https://picsum.photos/500/500?random=2",
            },
          ],
          totalPrice: 1000,
          isPaid: false,
        },
      ];

      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleRowClick=(orderId)=>{
    navigate(`/orders/${orderId}`)
  }

  return (
    <div>
      <h2 className="text-xl sm:text-2xl font-bold mb-6">
        My Orders
      </h2>

      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Order Id</th>
              <th className="py-3 px-4">Created</th> {/* ✅ Added */}
              <th className="py-3 px-4">City</th>
              <th className="py-3 px-4">Price</th>
              <th className="py-3 px-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={()=> handleRowClick(order._id)}
                  className="border-b bg-white hover:bg-gray-50"
                >
                  <td className="py-4 px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-12 h-12 object-cover rounded-lg"
                    />
                  </td>

                  <td className="py-4 px-4 font-medium text-gray-900">
                    #{order._id}
                  </td>

                  {/* ✅ Created Date */}
                  <td className="py-4 px-4">
                    {order.createdAt.toLocaleDateString()}
                  </td>

                  <td className="py-4 px-4">
                    {order.shippingAddress.city}
                  </td>

                  <td className="py-4 px-4">
                    ₹{order.totalPrice}
                  </td>

                  <td className="py-4 px-4">
                    {order.isPaid ? (
                      <span className="text-green-600 font-semibold">
                        Paid
                      </span>
                    ) : (
                      <span className="text-red-600 font-semibold">
                        Pending
                      </span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-6 text-center">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyordersPage;
