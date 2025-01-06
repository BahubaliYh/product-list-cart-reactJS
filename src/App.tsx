import ProductList from "./components/ProductList"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  return (
    <div className="App bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <ProductList />
          </div>
          <div className="w-full lg:w-1/3">
            <ShoppingCart />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
