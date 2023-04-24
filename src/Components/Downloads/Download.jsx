
import ImpDate from "../impDates/impDates";
import Footer from "../Footer/footer";
import "./Downloads.css"
import {FaDownload } from "react-icons/fa";
import Pdf1 from "./pdfs/Manuscript.pdf"
import Pdf2 from "./pdfs/Checklist.pdf"
import Pdf3 from "./pdfs/Special_Session_Proposal_.pdf"
import Pdf4 from "./pdfs/ICICC_Brochure.pdf"
import Pdf5 from "./pdfs/sponsorship_Proposal.pdf"
import Pdf6 from "./pdfs/Special_Session_Proposal_.pdf"
import Pdf7 from "./pdfs/Elsevier SSRN_Word Template.pdf"
import ImpNotices from "../ImpNotices/impNotices";

function Downloads() {
    return ( 

        <div>
     <div className="download">
       <div className="doHeading">
       <h1>Downloads</h1>
       </div>
       <hr />

       <div className="pdfImp">
        {/* pdfs  */}
        <div className="doContainer doPdf">
         {/* 1st one  */}
         <div className="pdf pdf1">
            <h1>Manuscript Guidelines</h1>
            <a href={Pdf1} target="_blank"> <FaDownload/></a>
         
         </div>

         {/* 2nd one  */}
         <div className="pdf pdf1">
            <h1>Checklist</h1>
            <a href={Pdf2} target="_blank"> <FaDownload/></a>
         </div>

         {/* 3rd one  */}
         <div className="pdf pdf1">
            <h1>Special Session Proposal</h1>
            <a href={Pdf3} target="_blank"> <FaDownload/></a>
         </div>

         {/* 4th  */}
         <div className="pdf pdf1"> 
            <h1>Icicc Bronchure</h1>
            <a href={Pdf4} target="_blank"> <FaDownload/></a>
         </div>

         {/* 5th  */}
         <div className="pdf pdf1">
            <h1>Sponsorship Proposal</h1>
            <a href={Pdf5} target="_blank"> <FaDownload/></a>
         </div>

         {/* 6th  */}
         <div className="pdf pdf1">
            <h1>Special Sessioin Proposal</h1>
            <a href={Pdf6} target="_blank"> <FaDownload/></a>
         </div>

         {/* 7th  */}
         <div className="pdf pdf1">
            <h1>Elsevier SSRN Paper Template</h1>
            <a href={Pdf7} target="_blank"> <FaDownload/></a>
         </div>




        </div>

        {/* impdate  */}
        {/* <div className="pdfimpDate">
            <ImpNotices/>
        </div> */}
        </div>
     </div>
<Footer/>
        </div>
     );
}

export default Downloads;