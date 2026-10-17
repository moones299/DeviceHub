import OffCanvasMeun from "@/components/offCanvasMenu/OffCanvasMenu"
import styles from "./Navbar.module.css"
import Link from "next/link"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"

function Navbar(){
    const [showCanvaMenu , setShowCanvaMenu]= useState(false)
    return(
      <>
      <div className={styles.navbar}>
        <div className="container">
            <ul>
                <li   onClick={()=> setShowCanvaMenu(prev => !prev)}>
                   
                    <GiHamburgerMenu size="20px"  />
                </li>
                <li>
                    <Link href='/'>صفحه ی اصلی</Link>
                </li>
                <li>
                    <Link href='/articles'>مقالات</Link>
                </li>
                <li>
                    <Link href='/about'>درباره ی ما</Link>
                </li>
                <li>
                    <Link href='/contact'>تماس با ما</Link>
                </li>
            </ul>
        </div>
      </div>
      {showCanvaMenu &&
      <OffCanvasMeun
        onClose={() => setShowCanvaMenu(false)}
      />}
      </>
    )
}

export default Navbar