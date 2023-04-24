import React from "react";
import ImpDate from "../impDates/impDates";
import Footer from "../Footer/footer";
import "./about.css"
import 'animate.css';
function About() {
    return ( 
<div>
        <div className="about">
            <div className="abcontainer animate__animated animate__backInRight">

<div className="abHeadTop ">
    <h1>About Institute</h1>
</div>
<hr />

<div className="aboutMain">
<h2>About SSCBS</h2>
<hr />

    <div className="abLeftRight">
    {/* left  */}
    <div className="abLeft">
            <p>The high standards of excellence give CBS the phenomenal and undeniable edge we are recognized for. And these standards are endlessly pushed beyond the horizon. This lays down the foundation of our biggest asset: Unrest. At CBS, we are never content. The inverse correlation between our satisfaction and our progress is an acknowledged and appointed theory at CBS. This is the CBS difference. What sets CBS apart from other colleges is our recognition that every student is different. At CBS, we strive to identify and maintain that 'difference'. We constantly endeavor to create opportunities for skill development in different areas of interest and to cater to the diverse needs of the students. The fact that CBS doesn't believe in a one-size-fits-all policy is evident in its placement process, where companies from as many as fifteen sectors, including consulting, insurance, knowledge services, real estate, media, investment banking, PR, IT, shipping, and financial services recruited students. The curriculum and the college atmosphere promote inquisition, innovation, leadership, and team spirit. Apart from possessing a clear understanding of the fundamentals of management as well as a considerable degree of corporate exposure, our students are resourceful, versatile, and enthusiastic. It is this marked difference that has helped the college set new benchmarks with every placement season.</p>
       
    </div>

    {/* right */}
    <div className="abRight">
            <ImpDate/>
        </div>
 </div>

</div>

 </div> 
 </div>

<div className="abFooter">
<Footer/>
</div>

</div>


     );
}

export default About;