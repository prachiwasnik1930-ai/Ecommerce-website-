import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OrderDetailsPage = () => {

    const {id} = useParams()
    const [orderDetails,setOrderDetails] = useState(null)

    useEffect(()=>{
        const mockOrderDetails = {
            _id : id,
            createAt : new Date(),
            isPaid : true,
            isDeliver : false,
            paymentMethod : "Paypal",
            shippingMethod  : "standard",
            shippingAddress : {city : "New York" , country : "USA"},
            orderItems : [
                {
                    productID : "1",
                    name : "Jacket",
                    price : 120,
                    quantity : 1,
                    image : "https://picsum.photos/150?random=1"
                },

                {
                    productID : "2",
                    name : "Jacket",
                    price : 120,
                    quantity : 1,
                    image : "https://picsum.photos/150?random=2"
                }
            ]
        }
        setOrderDetails(mockOrderDetails)
    },[id]);
  return (
    <div className='max-w-7xl mx:auto p-4 sm:p-6'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6'>Order Details</h2>
        {!orderDetails ? <p>No Order details found</p>
         : <div className='p-4 sm:p-6 rounded-lg border'>
            {/* order info  */}
            <div className='flex flex-col sm:flex-row justify-between mb-8'>
                <h3 className='text-lg md:text-xl font-semibold'>
                    OrderId : #{orderDetails._id}
                    </h3>
                    <p className='text-gray-600'>
                        {new Date(orderDetails.createdAt).toLocaleDateString()}
                    </p>
                
            </div>
            </div>}
    </div>
  )
}

export default OrderDetailsPage