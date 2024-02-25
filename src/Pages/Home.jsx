import Products from "../components/Products";
import Categories from "../components/categories";
import Header from "../components/Header/Header";
import ProductsData from "../components/productsData";
import { useState } from "react";

const Home = () => {

  const [products, setProducts] = useState(ProductsData.products);

  const handleProducts = (products) => {
    setProducts(products);
  }

  return (
    <>
        <Header />
        <Categories ProductsData={products} handleProducts={handleProducts} initialProducts={ProductsData.products} />
        <Products ProductsData={products} />
    </>
  )
}

export default Home;