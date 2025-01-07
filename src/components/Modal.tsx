import { CartItem } from "../types"

interface ModalProps {
  isOpen: boolean
  orderDetails: CartItem[]
  totalAmount: number
  handleCloseModal: () => void
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  orderDetails,
  totalAmount,
  handleCloseModal,
}) => {
  console.log("order Deatils", orderDetails)

  if (!isOpen) return null
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg  w-[550px] max-h-[80vh] overflow-y-auto">
        <img
          src={"/assets/images/icon-order-confirmed.svg"}
          className="mb-5"
          alt=""
        />
        <h1 className="text-3xl font-bold">Order Confirmed</h1>
        <p className="text-rose-500 mb-6">We hope you enjoy your food!</p>
        <div className="flex flex-col gap-6 bg-gray-100 p-4">
          {orderDetails.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <img
                src={`${import.meta.env.BASE_URL}${order.image.thumbnail}`}
                className="h-10 rounded-md"
                alt=""
              />
              <div className="flex-grow ml-4">
                <p className="font-semibold text-sm text-rose-900">
                  {order.name}
                </p>
                <div className="text-sm flex gap-4">
                  <span className="text-red">{order.quantity}X</span>
                  <span className="text-rose-500">@${order.price}</span>
                </div>
              </div>
              <div className="text-rose-900 font-semibold">
                <span>${(order.price * order.quantity).toFixed(2)}</span>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center py-4">
            <span>Order Total</span>
            <span className="font-bold text-xl text-rose-900">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
        <button
          onClick={handleCloseModal}
          className="w-full bg-red text-white py-3 rounded-lg mt-4 opacity-75 hover:opacity-100 transition duration-300"
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default Modal
