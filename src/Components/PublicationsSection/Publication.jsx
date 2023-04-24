import './Publication.css'
import ImpDate from '../impDates/impDates';
import Footer from '../Footer/footer';
// Publication and books imgages
import PhyComm from './PuImages/phy_com.jpg'
import CompElect from './PuImages/compElec.jpg'
import ExSystem from './PuImages/Expert.jpg'
import IntDecision from './PuImages/Intelligent.jpg'
import CompModel from './PuImages/cmes.jpeg'
import Journal from './PuImages/journal.jpg'

// index images 
import Scopus from './PuImages/Scopus.png'
import Inspec from './PuImages/Iet.jfif'
import Frankfurt from './PuImages/Frankfurt.jfif'
import Eg from './PuImages/egg.png'
import Scimago from './PuImages/ScImago.png'
import Zbmath from './PuImages/zbMath.png'
import GoogleI from './PuImages/google.png'
import Isi from './PuImages/IsiProceddings.png'
import Springer from './PuImages/springer.png'



function Publication() {
    return ( 
        <>
        <div className="Publication">
            <h2>Publications</h2>
            <hr />
  
  <div className="publicationMain">
    {/* left  */}
    <div className="pubProceedings">
       <h3>PUBLICATION- PROCEEDINGS</h3>
       <p>All the accepted papers of ICICC - 2023 will be published as a proceedings of ICICC - 2023 indexed by Scopus, Ei, WoS, and other reputed databases.</p>
       <p>High-quality selected extended papers of the conference will be invited to submit for publication in the special issues of the following journals :</p>

       {/* // PuImages  */}
       <div className="puImages">

        {/* img 1  and data*/}
        <div className="imgdata">
        <div className="puimg">
            <img src={PhyComm} alt="Physical communication" />
        </div>
        <p>Physical Communication, Elsevier (SCIE indexed) IF 2.37</p>
        </div>

        {/* img2 and data  */}
        <div className="imgdata">
        <div className="puimg">
            <img src={CompElect} alt="Computers and Electrical Engineering" />
        </div>
        <p>Computer & Electrical Engineering, Elsevier (SCIE indexed) IF 4.15</p>
        </div>

        {/* img 3 and data*/}
        <div className="imgdata">
        <div className="puimg">
            <img src={ExSystem} alt="Expert System" />
        </div>
        <p>Expert Systems, Wiley (SCIE indexed) IF 2.81</p>
        </div>

         {/* img 4 and data */}
        <div className="imgdata">
         <div className="puimg">
            <img src={IntDecision} alt="Intelligent Decision" />
        </div> 
        <p>Intelligent Decision Technologies (Indexed by SCOPUS & ESCI)</p>
        </div>

        {/* img 5 and data*/}
        <div className="imgdata">
        <div className="puimg">
            <img src={CompModel} alt="CMES" />
        </div>
        <p>Computer Modeling in Engineering & Sciences (SCIE Indexed IF 2.0)</p>
        </div>

        {/* img 6 and data */}
        <div className="imgdata">
        <div className="puimg">
            <img src={Journal} alt="Journal" />
        </div>
        <p>Journal of Mobile Multimedia(River)(Scopus and ESCI)</p>
        </div>




       </div>


{/* Indexing  */}
       <div className="index">
           
           <h2>Indexing</h2>

<div className="IndexImages">
        {/* 1st  */}
        <div className="indexImg">
            <img src={Scopus} alt="Scopus" />
        </div>

        {/* 2nd  */}
        <div className="indexImg">
            <img src={Inspec} alt="Inspec" />
        </div>

        {/* 3rd  */}
        <div className="indexImg">
            <img src={Frankfurt} alt="frankfurt" />
        </div>

        {/* 4th  */}
        <div className="indexImg">
            <img src={Eg} alt="Eg" />
        </div>

        {/* 5th  */}
        <div className="indexImg">
            <img src={Scimago} alt="Scimago" />
        </div>

        {/* 6th  */}
        <div className="indexImg">
            <img src={Zbmath} alt="Math" />
        </div>

        {/* 7th  */}
        <div className="indexImg">
            <img src={GoogleI} alt="Google" />
        </div>

        {/* 8th  */}
        <div className="indexImg">
            <img src={Isi} alt="Isi" />
        </div>

        {/* 9th  */}
        <div className="indexImg">
            <img src={Springer} alt="Springer" />
        </div>



        </div>

       </div>



    </div>


    {/* right  */}
    <div className="puImpdate">
        <ImpDate/>
    </div>
  </div>


        </div>
 <Footer/>
        </>
        );

}

export default Publication;