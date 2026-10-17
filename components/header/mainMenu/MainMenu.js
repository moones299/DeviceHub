import Link from "next/link"
import StyleS from './MainMenu.module.css'
import { RxCaretDown } from "react-icons/rx"
import { useState } from "react"
import SubMenu from "../subMenu/subMenu"
function MainMenu() {
   const[showSubMenu, setShowSubMenu]=useState(null)
   return(
      <>
      <div className={StyleS.menubar}>
         <div className="container">
            <ul>
               <li
               onMouseEnter={()=> setShowSubMenu("laptops")}
               onMouseLeave={()=> setShowSubMenu(null)}
               >
                  <Link href='/products/laptops'>لپ تاپ</Link>
                   <RxCaretDown />
                    {showSubMenu == 'laptops' && 
                    <SubMenu showSubMenu={showSubMenu} />}
                  
               </li>
                <li
                 onMouseEnter={()=> setShowSubMenu("mobiles")}
               onMouseLeave={()=> setShowSubMenu(null)}
                >
                  <Link href='/products/mobiles'>موبایل</Link>
                   <RxCaretDown />
                    {showSubMenu == 'mobiles' && 
                    <SubMenu showSubMenu={showSubMenu}/>}
               </li>
                <li
               
                >
                  <Link  href='/products/tablets'>تبلت</Link>
                   <RxCaretDown />
                   
               </li>
                <li
                 onMouseEnter={()=> setShowSubMenu("cameras")}
               onMouseLeave={()=> setShowSubMenu(null)}
                >
                  <Link  href='/products/cameras'>دوربین</Link>
                   <RxCaretDown />
                    {showSubMenu == 'cameras' && 
                    <SubMenu showSubMenu={showSubMenu} />}
               </li>
               

            </ul>
         </div>
      </div>
      </>
   )
}

export default MainMenu
