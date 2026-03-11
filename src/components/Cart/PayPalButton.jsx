import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js'

const PayPalButton = ({ amount, onSuccess, onError }) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":"Adwvt7DbX4iX8kSnIBYvJsSAW6AmFY85Zrepk9xOEvOKVYa8hPQPMnaCRbrohyF0ARzPGHT8hwxkUYMO"
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                     currency_code: "USD", 
                  value: amount.toString()  
                }
              }
            ]
          })
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            onSuccess(details)
          })
        }}
        onError={(err) => {
          console.error(err)
          onError(err)
        }}
      />
    </PayPalScriptProvider>
  )
}

export default PayPalButton