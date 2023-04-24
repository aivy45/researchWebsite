import './RegistrationFee.css'

function RegFee() {
    return ( 
   <>
    <div className="reFeeMain">
        <hr />
        <h3>Registration Fee For ICICC 2023 (Springer)</h3>

        <div className="reFeeTable">

            {/* table head  */}
            <div className="reFeetd">
                <h2>Category</h2>
                <h2>Early Registration (before 10th January, 2022)</h2>
                <h2>Late Registration (after 10th January, 2022)</h2>
            </div>
           
           {/* tr1  */}
           <div className="reFeetr">
            <p>Research Scholar/Student</p>
            <p>INR 10000</p>
            <p>INR 11000</p>
           </div>

           {/* tr2 */}
           <div className="reFeetr">
            <p>Academician</p>
            <p>INR 11000</p>
            <p>INR 12000</p>
           </div>

           {/* tr3  */}
           <div className="reFeetr">
            <p>Industrial Participants</p>
            <p>INR 12000</p>
            <p>INR 13000</p>
           </div>

           {/* tr4  */}
           <div className="reFeetr">
            <p>Foreigner Research Scholar/Student (Outside India)</p>
            <p>USD 200</p>
            <p>USD 250</p>
           </div>

           {/* tr5  */}
           <div className="reFeetr">
            <p>Foreigner Academician (Outside India)</p>
            <p>USD 250</p>
            <p>USD 300</p>
           </div>

           {/* tr6  */}
           <div className="reFeetr">
            <p>Foreigner Industrial Participant (Outside India)</p>
            <p>USD 300</p>
            <p>USD 350</p>
           </div>

        </div>
<div className="reSpDiscount">
    <h1>Special Discount of 10% for Universal Inovator (UI) Member</h1>
</div>

    </div>
   </>

     );
}

export default RegFee;