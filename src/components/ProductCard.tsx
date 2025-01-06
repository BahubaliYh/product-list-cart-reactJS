import { Product } from "../types"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, decrementQuantity } from "../cartSlice"
import { RootState } from "../store"

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const dispatch = useDispatch()

  const handleIncremnet = () => {
    dispatch(addToCart(product))
  }

  const handleDecrement = () => {
    dispatch(decrementQuantity(product.id))
  }

  const handleMobileClick = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(!isMobile)
    }
  }

  // Use Redux state instead of local state for quantity
  const quantity = useSelector(
    (state: RootState) =>
      state.cart.find((item) => item.id === product.id)?.quantity || 0
  )

  return (
    <div className="p-4">
      <div className="relative">
        <img
          src={`${product.image.desktop}`}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-1/2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            className={`bg-white text-red border border-red px-6 py-3 sm:px-5 sm:py-3 md:px-4 md:py-2 rounded-full hover:bg-red hover:text-white transition duration-300 flex items-center justify-center shadow-lg cursor-pointer whitespace-nowrap ${
              isHovered || isMobile ? "opacity-0" : "opacity-100"
            }`}
            aria-label="Add to cart"
            onClick={handleMobileClick}
          >
            <img
              src={"/assets/images/icon-add-to-cart.svg"}
              alt=""
              className={`w-4 h-4 mr-2 ${
                isHovered || isMobile ? "filter invert" : ""
              }`}
            />
            <span className="text-xs sm:text-sm md:text-base">Add to Cart</span>
          </button>
          {(isHovered || isMobile) && (
            <div className="absolute inset-0 flex items-center justify-between bg-red text-white px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full">
              <button
                onClick={handleDecrement}
                className="text-lg font-bold w-6 h-6 flex items-center justify-center cursor-pointer border border-white rounded-full text-white hover:bg-white hover:text-red transition duration-300"
              >
                -
              </button>
              <span className="text-xs sm:text-sm md:text-base font-semibold mx-2">
                {quantity}
              </span>
              <button
                onClick={handleIncremnet}
                className="text-lg font-bold w-6 h-6 flex items-center justify-center cursor-pointer border border-white rounded-full text-white hover:bg-white hover:text-rose-900 transition duration-300"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
      <p className="text-rose-500 mt-8">{product.category}</p>
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-red font-bold mt-2">${product.price.toFixed(2)}</p>
    </div>
  )
}

export default ProductCard
