import './registration.css'
import Footer from '../Footer/footer';
import PayPal from './ResPayPal';
import RazorPay from './ResRazorPay';
import RegistrationFee from './RegistrationFee'

function Registrations() {
    return ( 
    <>
        <div className="registration">
            <div className="reContainer">
             <h1 className="reHeading">Registration</h1>
<hr className='reLine'/>
{/* Registration and all  */}
<div className="RegistrationMain">
             {/* Registrations Details  */}
 <div className="reDetail">

    <div className="rePara">
    <p>Once Your paper is accepted, the registration process begins. you have to complete the following steps.</p>
    
    <p> <span className='reParaBold'>Step1 - Registration Fee:</span> It is mandatory for at least one author of an accepted paper to register in order for the paper to appear in the proceedings and included in the Technical Program.</p>
    </div>

    <div className="reAuthors">
        <h2>Author/Co-Author Registration Fee Includes</h2>
        <div className="reAuthorsInst">
          <ol>
            <li>Welcome reception</li>
            <li>Badge</li>
            <li>Conference Kit with Proceeding</li>
             <li>Participation in the technical program</li>
            <li>Coffee breaks</li>
            <li>Lunch</li>
            <li>Banque</li>
          </ol>
        </div>
    </div>



 </div>

{/* Registration Account Details  */}
<div className="reAccountMain">
<h1 className='reAccountHeading'>Registration Account Details</h1>

<div className="reAccountTransfer">

 <div className="reAccount">
     
       <div className="reAccountBank">
        <h2 className='reAccountBankHeading'>Pay via Bank Transfer</h2>

        <div className="reBankDetails">
            {/* 1st one  */}
            <div className="reBank1 reBank">
                <h2>ACCOUNT NAME</h2>
                <p>ICICC</p>
            </div>

            {/* 2nd one  */}
            <div className="reBank2 reBank">
                <h2>ACCOUNT NUMBER</h2>
                <p>510909010080523</p>
            </div>

            {/* 3rd one  */}
            <div className="reBank3 reBank">
                <h2>BANK</h2>
                <p>City Union Bank</p>
            </div>

            {/* 4th one  */}
            <div className="reBank4 reBank">
                <h2>BRANCH</h2>
                <p>Sector-8, Rohini Delhi</p>
            </div>

            {/* 5th one  */}
            <div className="reBank5 reBank">
                <h2>BRANCH CODE</h2>
                <p>244</p>
            </div>

            {/* 6th one  */}
            <div className="reBank6 reBank">
                <h2>IFSC CODE</h2>
                <p>CIUB0000244</p>
            </div>
 {/* 7th one  */}
            <div className="reBank7 reBank">
                <h2>MICR</h2>
                <p>600054027</p>
            </div>
{/* 8th one  */}
            <div className="reBank8 reBank">
                <h2>SWIFT CODE</h2>
                <p>CIUBIN5M</p>
            </div>

{/* 9th one  */}
            <div className="reBank9 reBank">
                <h2>ACCOUNT TYPE</h2>
                <p>CURRENT</p>
            </div>

        </div>
       </div>
 </div>

 {/* pay via paypal  */}
 <div className="Paypal">
 <PayPal/>
 </div>

 {/* pay via razorpay  */}
 <div className="Razor">
<RazorPay/>
</div>


 </div>

 </div>

 </div>

{/* Registration Fee part  */}
<div className="reFee">
  <RegistrationFee/>
</div>


 </div>
           
        </div>
        <Footer/>
        </>
     );
}

export default Registrations;