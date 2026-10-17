import { useRouter } from "next/router"

import { useEffect, useState } from "react"
import ProductCard from "@/components/productCard/ProductCard"
import styles from '@/styles/ProductsByCategory.module.css'


export default function ProductsByCategory({product}) {
   const { category } = useRouter().query
   const [products, setProducts] = useState(product)
   const [saveInput, setSaveInput] = useState("")   // ← مقدار اولیه رشته خالی

  

   useEffect(()=>{
      async function getProduct() {
         const res= await  fetch(`/api/products/${category}?search=${saveInput}`)
      const data= await res.json()
      setProducts(data)
      }
       if (category) {
      getProduct()}
   
   },[saveInput, category])
  


   return (
      <div className="container">
         <div className={`${styles.searchContainer} section`}>
            <input
               onChange={(e)=>setSaveInput(e.target.value)}
               value={saveInput}
               type="text"
               placeholder="دنبال چی میگردی؟"
               className={styles.search}
            />
         </div>

         <div className="section">
            <h1>محصولات ({category})</h1>
            <div className="row">
               {products.length > 0 ? (
                  products.map((product) => (
                     <div className="col" key={product.id}>
                        <ProductCard {...product} />
                     </div>
                  ))
               ) : (
                  <p>محصولی یافت نشد</p>
               )}
            </div>
         </div>
      </div>
   )
}
export async function getServerSideProps(context){
 const {category}= context.params
 const res= await fetch(`http://localhost:3000/api/products/${category}`)
 const data= await res.json()
   return{
      props :{
         product:data
      }
   }
}