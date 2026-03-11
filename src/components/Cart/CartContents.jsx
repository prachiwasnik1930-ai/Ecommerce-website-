import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri'

const CartContents = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      quantity: 1,
      colour: "black",
      price: 200,
      image: "https://picsum.photos/800?random=1"
    },
    {
      productId: 2,
      name: "jeans",
      size: "M",
      quantity: 1,
      colour: "blue",
      price: 2000,
      image: "https://picsum.photos/200?random=2"
    }
  ]

  return (
    <div>
      {cartProducts.map((product) => (
        <div
          key={product.productId}
          className="flex items-start justify-between gap-5 py-4 border-b"
        >
          {/* Image + Details */}
          <div className="flex items-start gap-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-20 object-cover rounded"
            />

            <div className="flex flex-col text-sm">
              <h3 className="font-medium">{product.name}</h3>

              <p className="text-gray-500">
                size:{product.size} | colour:{product.colour}
              </p>

              <div className="flex items-center gap-2 mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                <span>{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
              </div>
            </div>
          </div>

          {/* Price + Delete */}
          <div className="flex flex-col items-end">
            <p className="font-medium">$ {product.price.toLocaleString()}</p>

            <button className="mt-2">
              <RiDeleteBin3Line className="h-6 w-6 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CartContents
