import Footer from "../Footer/footer";
import ImpDate from "../impDates/impDates";
import Venue from "./conferenceImg.png"
import './conference.css'
function Conference() {
    return (
        <>
       <div className="conference">
        <h1>We are located at...</h1>
        <hr />
        <div className="coContainer">
        
        {/* left  */}
        <div className="coLeft"> 
          
          <div className="coLeftImg">
            <img src={Venue} alt="Venue" />
          </div>

          <div className="coAddress">
  <h1>Address:</h1>
    <h2>Shaheed Sukhdev College Of Business Studies(University Of Delhi)</h2>
    <h2>Dr. K.N. Katju Marg Rohini Sector 16,</h2>
    <h2>PSP Area IV, New Delhi,</h2>
    <h2>Delhi 110089</h2>
    <h2>INDIA</h2>
    <h2>Email: icicc.ui@gmail.com</h2>

</div>
        </div>

        {/* Right  */}
       <div className="coRight">
        <ImpDate/>
       </div>

        </div>



       </div>

       <Footer/>
       </>
      );
}

export default Conference;

























