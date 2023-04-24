import "./ResRazorPay.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function RazorPay() {
    return (   
        <>
         <div className="razorPay" data-aos="slide-right">
    <h1>Pay via RazorPay</h1>
    <p>For payment from Indian Authors/Attendees, use the following payment link
Pay via Razorpay</p>
    <div className="razorPayBtn">
        <button><a href="https://pages.razorpay.com/pl_IOTJy0iZ8kxq43/view" target="_blank">Pay via RazorPay</a></button>
    </div>
 </div>
        </> 
     );
}

export default RazorPay;