import ProductCard from "@/components/productCard/ProductCard";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";


function productsByCategory({product}){
 //   const {category,brand}=useRouter().query;
   
   // const[deviceBrand, setDeviceBrand]=useState(product)
   // useEffect(()=>{
     //   async function getProduct(){
        //    const res= await fetch(`/api/products/${category}/${brand}`)
        //    const data= await res.json()
        //    const filterProduct= data.filter((item)=>
         //   item.brand.toLowerCase() === brand.toLowerCase()
         //   )
        //    setDeviceBrand(filterProduct)
      //  }
     //  if(category && brand){
    //   getProduct()
      
    //   }
   // },[category , brand])
    return(
        <>
      <div className="container">
         <div className="section">
        <div className="row"> 
            {product.map((brand)=>(
                <div key={brand.id} className="col">
                    <ProductCard {...brand} />
                </div>
            ))}
        </div>
       </div>
      </div>
        </>
    )
}
export default productsByCategory;
 
export async function getServerSideProps(context) {
const{category , brand}=context.params
const res= await fetch(`http://localhost:3000/api/products/${category}/${brand}`)
const data= await res.json()
    return{
        props :{
         product :data
        }
    }
    
}