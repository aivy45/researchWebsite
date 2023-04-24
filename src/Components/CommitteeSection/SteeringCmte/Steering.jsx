import './Steering.css'
import SCcards from './SCcards/SCcards';
import ImpDate from '../../impDates/impDates';
import Footer from '../../Footer/footer';
function StCommittee() {
    return ( 

        <>
       <div className='steering'>

       <h1>Steering Committee</h1>
       <hr />
       <div className="stCommittee">

        <div className="stScards"> 
        <SCcards/>
        </div>

        <div className="stImpdate">
         <ImpDate/>
        </div>
       
       </div>
       
       </div>
       <Footer/>

       </>
     );
}

export default StCommittee;