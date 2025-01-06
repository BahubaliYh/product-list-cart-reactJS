import { useSelector, useDispatch } from "react-redux"
import { CartItem } from "../types"
import { removeFromCart } from "../cartSlice"
import Modal from "./Modal"
import { useState } from "react"

const ShoppingCart: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const cartItems = useSelector((state: { cart: CartItem[] }) => state.cart)

  const dispatch = useDispatch()
  console.log("cartItems", cartItems)
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const handleConfirmOrder = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-red mb-4">
        Your Cart ({cartItems.length})
      </h2>

      {!cartItems.length ? (
        <div className="flex flex-col justify-center items-center">
          <img src={"/assets/images/illustration-empty-cart.svg"} alt="" />
          <p className="text-rose-500 font-medium">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium text-rose-900">{item.name}</p>
                  <div className="flex items-center gap-4 text-rose-500">
                    <span className="text-red">{item.quantity}x</span>
                    <span>@{item.price}</span>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-gray-400 hover:text-gray-600 border rounded-full border-rose-500 w-4 h-4 flex items-center justify-center"
                >
                  <img src={"/assets/images/icon-remove-item.svg"} alt="" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center py-4">
            <span>Order Total</span>
            <span className="font-bold text-xl text-rose-900">
              ${total.toFixed(2)}
            </span>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-2 text-gray-600 text-sm mt-2 justify-center">
            <img src={"/assets/images/icon-carbon-neutral.svg"} alt="" />
            <p>
              This is a{" "}
              <span className="text-black font-medium">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>

          <button
            onClick={handleConfirmOrder}
            className="w-full bg-red text-white py-3 rounded-lg mt-4 opacity-75 hover:opacity-100 transition duration-300"
          >
            Confirm Order
          </button>
        </>
      )}
      <Modal
        isOpen={isModalOpen}
        orderDetails={cartItems}
        totalAmount={total}
        handleCloseModal={handleCloseModal}
      />
    </div>
  )
}

export default ShoppingCart
