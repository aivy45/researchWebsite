import React from "react";
import "./abtConference.css"
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function AboutConference() {
    return (

        <div className="conference">
            <div className="ccontainer">
                <div className="heading">
                    <h1>About Conference</h1>
                </div>
                <hr />

<div className="about" data-aos="flip-down">

    {/* Left about  */}
                <div className="Labout">
                    <p>International Conference on Innovative Computing and Communication (ICICC 2023) is organised with the objective of bringing together innovative scientists, professors, research scholars, students and industrial experts in the field of Computing and Communication to a common forum. The primary goal of the conference is to promote the exchange of innovative scientific information between researchers, developers, engineers, students, and practitioners. Another goal is to promote the transformation of fundamental research into institutional and industrialized research and to convert applied exploration into real time application. Overall, the conference will provide the researchers and attendees with prospects for national and international collaboration and networking among universities and institutions from India and abroad for promoting research. ICICC- 2023 will be held at Shaheed Sukhdev College of Business Studies, University of Delhi, New Delhi. All the accepted papers (after double blinded peer review) will be published as proceedings of ICICC-2023 in Springer Lecture Notes on Networks & Systems indexed by Scopus and other reputed databases.</p>

                    <p className="submissionLinkhead">Paper Submission Link : <a href="https://easychair.org/account/signin?l=6cOiIH01iFt2ozk1mRmElD" className="aboutLink">Easychair Submission</a></p>
                </div>

                {/* Right about  */}
                <div className="Rabout">
                    <h1>Downloads</h1>
                    <div className="dwnldSection animate__animated animate__backInUp">
                      <p>  <a href="">Manuscript Guidelines</a></p>
                      <p>  <a href="">Checklist</a></p>
                      <p><a href="">Special Session Proposal Template</a></p>
                      <p><a href="">Icicc Bronchure</a></p>
                      <p><a href="">Sponsorship Proposal</a></p>
                    </div>
                </div>
</div>

            </div>
        </div>
      );
}

export default AboutConference;