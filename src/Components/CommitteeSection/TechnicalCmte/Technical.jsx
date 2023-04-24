import './Technical.css'
import TecCards from './TecCards/TecCards';
import ImpDate from '../../impDates/impDates';
import Footer from '../../Footer/footer';
function TechnicalCmte() {
    return ( 
        <>
        <div className="technicalMain">
            <h3>Technical Committee</h3>
            <hr />
         <div className="technical">
            <div className="tecCards">
                 <TecCards/>
            </div> 
            <div className="tecImpDate">
                <ImpDate/>
            </div>
         </div>
         </div>
         <Footer/>
        </> 
     );
}

export default TechnicalCmte;