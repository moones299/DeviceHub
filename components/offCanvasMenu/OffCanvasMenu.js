import Link from "next/link"
import styles from './OffCanvasMenu.module.css'
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
function OffCanvasMeun({onClose}){
  
    return(
       <>
       <div className={styles.submenu}>
        <ul>
         <li onClick={onClose}>
            <IoCloseSharp size="20px"  />
         </li>
            <li>
                  <Link onClick={onClose} href='/products/laptops'>لپ تاپ</Link>
                  
               </li>
                <li>
                  <Link onClick={onClose} href='/products/mobiles'>موبایل</Link>
                  
               </li>
                <li>
                  <Link onClick={onClose}   href='/products/tablets'>تبلت</Link>
                  
               </li>
                <li>
                  <Link onClick={onClose}   href='/products/cameras'>دوربین</Link>
                  
               </li>

        </ul>
       </div>
      
       </>
    )
}
export default OffCanvasMeun