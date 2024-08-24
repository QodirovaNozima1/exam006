import React, { useState, useEffect } from 'react'
import { LiaCartPlusSolid } from "react-icons/lia";
import { PiSpinnerBold } from "react-icons/pi";
import axios from '../../api/Index'
import { Link } from 'react-router-dom';
const API_URL = "https://dummyjson.com"
const Product = () => {
  
    const [products, setProducts] = useState(null)
    const [categories, setCategories] = useState(null)
    const [selectCategory, setSelectCategory] = useState("")
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [onset, setOnset] = useState(1)
    const limit = 4



    useEffect(()=>{
        axios
        .get(`/products/category-list`)
        .then(res => setCategories(res.data))
        .catch(err => console.log(err))
    },[])
    console.log(categories);
    console.log(selectCategory);
    
    

    useEffect(() => {
        setLoading(true)
        axios
            .get(`/products${selectCategory}`,{
                params:{
                    limit: limit * onset
                }
            })
            .then(res => {
                console.log(res.data);
                setTotal(res.data.total);
                setProducts(res.data.products)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
    }, [onset, selectCategory])
    
    
    const [offset, setOffset] = useState(0)
    const handClick = () => {
        setOffset(offset + 1)
    }

    const productItem = products?.map((product) => (
        <div key={product.id}>
            <Link to = {`/product/${product.id}`}>
            <img src={product.images[0]} alt="" />
            </Link>
            <div className='product__box'>
                <h3 className=''>{product.brand}</h3>
                <p className=''>12%</p>
                <p className='product__desck'>{product.description}</p>
                <p className=''>${product.price}</p>
            </div>
            <button className=''>New</button>
            <button className=''><LiaCartPlusSolid className='' /></button>
            <div className=''>
                <button disabled={offset <= 0}  onClick={()=> setOffset(p=>p-1)} >-</button>
                <button className=''>{offset}</button>
                <button onClick={handClick}>+</button>
            </div>
        </div>
    ))
    const categoryItems = categories?.map(item =>(
        <option key={item} value={`/category/${item}`}>{item}</option>
    ))
 
    return (
        <div className=''>
            <div className=''>
                <p className=''>Скидки <b className=''>%</b></p>
                <p className=''>Все товары в категории</p>
            </div>

             <select value={selectCategory} onChange={e => setSelectCategory(e.target.value)} name="" id="">
             <option value="" >All</option>
             {categoryItems}
             </select>
            <div>
                { productItem}
            </div>
            <div>
            {loading && <button><PiSpinnerBold /></button>}
            </div>

            {
                limit * onset <= total &&
                <button onClick={() => setOnset(p => p + 1)} className='py-2 px-6 border rounded-md block mx-auto mt-5 bg-emerald-300 text-slate-100 text green'>See more</button>
            }
        </div>
    )
}

export default Product