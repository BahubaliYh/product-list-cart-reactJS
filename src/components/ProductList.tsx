import productData from "../data.json"
import ProductCard from "./ProductCard"
const ProductList: React.FC = () => {
  const products = productData
  return (
    <div>
      <h1 className="text-3xl font-bold  mb-3 text-rose-900 ml-4">Desserts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
