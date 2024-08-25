import React, { createContext, memo, useState} from 'react'
import Products from '../../components/product/Product'
import { useFetch } from '../../hook/useFetch'
import Hero from "../../components/hero/Hero"
import Types from '../../components/types/Types';
import Delivery from '../../components/delivery/Delivery';
import Catalog from '../../components/catalog/Catalog'



const Home = () => {
  const [category, setCategory] = useState("");
  const { data, loading } = useFetch(`products${category ? `/category/${category}` : ""}`,{ limit: 10 },[category] );
  const { data: categories } = useFetch("products/category-list");
  console.log(data);
  const products = (
    <ul className="flex container scroll-hide mx-auto mb-5 overflow-x-auto whitespace-nowrap gap-4">
      <li className="border rounded-3xl p-3" onClick={() => setCategory("")} >All </li>
      {categories?.map((all) => (
        <li className="border rounded-3xl p-3" key={all}>
          <button onClick={() => setCategory(all)}>{all.split("-").join(" ")} </button>
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      <Hero/>
      <Types />
      {products}
      <Products data={data?.products} />
      <Delivery/>
      <Catalog/>
    </div>
  );
};

export default Home;
