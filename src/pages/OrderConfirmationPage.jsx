import React from 'react'
import { CiTrophy } from 'react-icons/ci';

const checkOut = () => {
  return {
    _id: "12345",
    createdAt: new Date(),
    checkedOutItems: [
      {
        productId: "1",
        name: "Jacket",
        color: "black",
        size: "M",
        price: "150",
        quantity: "1",
        image: "https://picsum.photos/150?random=1",
      },
      {
        productId: "2",
        name: "Jacket",
        color: "black",
        size: "M",
        price: "150",
        quantity: "1",
        image: "https://picsum.photos/150?random=2",
      },
    ],
    shippingAddress: {
      address: "123 fashion mart",
      city: "New York",
      country: "USA",
    }
  }
}

const OrderConfirmationPage = () => {

  const order = checkOut(); // call the function

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt)
    orderDate.setDate(orderDate.getDate() + 10)
    return orderDate.toLocaleDateString()
  }

  return (
    <div className='max-w-xl mx-auto p-6 bg-white'>

      <h1 className='text-4xl font-bold text-center text-emerald-700 mb-8'>
        Thank you for your order!
      </h1>

      {order && (
        <div className='p-6 rounded-lg border'>

          <div className='flex justify-between mb-6'>
            {/* Order id and date */}
            <div>
              <h2 className='text-xl font-semibold'>Order Details</h2>

              <p>
                OrderId : {order._id}
              </p>

              <p className='text-gray-500'>
                OrderDate : {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>

            {/* Estimated delivery */}
            <div>
              <p className='text-emerald-700 text-sm'>
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(order.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className='mb-6'>
            {order.checkedOutItems.map((item) => (
              <div
                key={item.productId}
                className='flex items-center mb-4'
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className='w-16 h-16 object-cover rounded-md mr-4'
                />

                <div>
                  <h4 className='text-md font-semibold'>
                    {item.name}
                  </h4>

                  <p className='text-sm text-gray-500'>
                    {item.color} | {item.size}
                  </p>
                </div>

                <div className='ml-auto text-right'>
                  <p className='text-md'>${item.price}</p>
                  <p className='text-sm text-gray-500'>
                    Qty: {item.quantity}
                  </p>
                </div>

              </div>
            ))}
          </div>

          {/* Payment and Delivery Info */}
          <div className='grid grid-cols-2 gap-8'>

            {/* Payment */}
            <div>
              <h4 className='text-lg font-semibold mb-2'>Payment</h4>
              <p className='text-gray-600'>Paypal</p>
            </div>

            {/* Delivery */}
            <div>
              <h4 className='text-lg font-semibold mb-2'>Delivery</h4>

              <p className='text-gray-600'>
                {order.shippingAddress.address}
              </p>

              <p className='text-gray-600'>
                {order.shippingAddress.city},{" "}
                {order.shippingAddress.country}
              </p>
            </div>

          </div>

        </div>
      )}

    </div>
  )
}

export default OrderConfirmationPage