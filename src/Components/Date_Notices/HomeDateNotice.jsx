import ImpDate from "../impDates/impDates";
import ImpNotices from "../ImpNotices/impNotices";
import './HomeDateNotice.css'
function HoDateNotice() {
    return ( 
      
         <div className="date_notices">
                <ImpDate/>
               <ImpNotices/>
         </div>
     
     );
}

export default HoDateNotice;