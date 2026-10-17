import Link from "next/link"
import styles from "./SubMenu.module.css"

  const brands = {
  laptops: ["asus", "lenovo", "apple", "dell", "msi", "hp"],
  mobiles: ["apple", "samsung", "xiaomi"],
 
  cameras: ["canon", "nikon"],
} 


function SubMenu({showSubMenu}) {
  const categoryBrands = brands[showSubMenu]
   return (
      <div className={styles.subMenu}>
         <div className="container">
            <ul>
               {categoryBrands.map((brand) => (
          <li key={brand}>
            <Link href={`/products/${showSubMenu}/${brand}`}>
              {brand}
            </Link>
          </li>
        ))}
            </ul>
         </div>
      </div>
   )
}

export default SubMenu
