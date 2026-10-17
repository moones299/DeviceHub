import ProductCard from "@/components/productCard/ProductCard";
import Link from "next/link";


export default function Home({laptops , mobiles , cameras}) {
  return (
    <>
   <div className="container">
      <div className="section">
           <h1 className="link">
            <Link href='/products/laptops'>لپ تاپ (laptop)</Link>
           </h1>
    <div className="row">
      {laptops.slice(0,4).map((laptop)=>(
        <div key={laptop.id} className="col">
          <ProductCard {...laptop}/>
        </div>
      ))}
    </div>

     <h1 className="link">
       <Link href='/products/mobiles'> موبایل (mobile)</Link>
      </h1>
    <div className="row">
      {mobiles.slice(0,4).map((mobile)=>(
        <div key={mobile.id} className="col">
          <ProductCard {...mobile}/>
        </div>
      ))}
    </div>

     <h1 className="link">
       <Link href='/products/cameras'> دوربین (camera)</Link>
      </h1>
    <div className="row">
      {cameras.slice(0,4).map((camera)=>(
        <div key={camera.id} className="col">
          <ProductCard {...camera}/>
        </div>
      ))}
    </div>
      </div>
   </div>
    </>
  );
}
export async function getServerSideProps() {

  const laptops = await fetch(
    "http://localhost:3000/api/products/laptops"
  )

  const mobiles = await fetch(
    "http://localhost:3000/api/products/mobiles"
  )

  const cameras = await fetch(
    "http://localhost:3000/api/products/cameras"
  )

  return {
    props: {
      laptops: await laptops.json(),
      mobiles: await mobiles.json(),
      cameras: await cameras.json()
    }
  }
}
