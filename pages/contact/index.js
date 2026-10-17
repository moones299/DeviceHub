import styles from '@/styles/Contact.module.css'
import { FaPhone } from "react-icons/fa6"
import { IoLocationSharp } from "react-icons/io5"
import { IoTimeSharp } from "react-icons/io5"
function contact(){
    return(
        <>
        <div className="container">
            <div className={styles.contactcontainer}>
                <h4>پیگیری سفارش، انتقاد و پیشنهاد</h4>
                <p>برای پیگیری یا سؤال درباره سفارش و ارسال پیام بهتر است از فرم زیر استفاده کنید.</p>
                <form action="">
                   <div className={styles.inputbox}>
                    <label htmlFor="fullname">نام و نام خانوادگی</label>
                    <input type="text" id="fullname" />
                   </div>
                     <div className={styles.inputbox}>
                    <label htmlFor="fullname">شماره تماس</label>
                    <input type="text" id="phone" />
                   </div>
                  
                    <div className={styles.inputbox}>
                    <label htmlFor="fullname"> ایمیل</label>
                    <input type="text" id="email" />
                   </div>
                    <div className={styles.inputbox}>
                    <label htmlFor="fullname">شماره سفارش</label>
                    <input type="text" id="order" />
                   </div>
                    <div className={styles.inputbox}>
                    <label htmlFor="fullname">متن پیام</label>
                   <textarea rows='5'  type="text" id="message"/>
                   </div>
                  
                  
                </form>
            </div>
             <div>
            <div className={styles.contactBox}>
               <FaPhone size="25px" color="#666" />
               <p>
                  تلفن فروش:45691000 - داخلی 2 | خدمات پس از فروش:داخلی 3 | پیگیری سفارشات:داخلی 1
               </p>
            </div>

            <div className={styles.contactBox}>
               <IoLocationSharp size="25px" color="#666" />
               <p>
                  نشانی (دفتر مرکزی):تهران، خیابان مطهری، خیابان فجر، کوچه مدائن، پلاک ۷، ساختمان
                  مقداد آی تی
               </p>
            </div>
            <div className={styles.contactBox}>
               <IoTimeSharp size="25px" color="#666" />
               <p>
                  ساعت کاری مجموعه: شنبه تا چهارشنبه (از ساعت ۹ تا ۱۸) پنجشنبه (از ساعت ۹ الی ۱۴)
               </p>
            </div>
         </div>
        </div>
        </>
    )
}
export default contact;