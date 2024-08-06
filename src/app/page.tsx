import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div>
      <Slider />

      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          <h1 className="/text">Featured Products</h1>
          <ProductList />
      </div>

    </div>
  )
}

export default HomePage