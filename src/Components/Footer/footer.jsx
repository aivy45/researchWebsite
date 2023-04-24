import React, {useLayoutEffect} from "react";
import classes from "./footer.module.css"
import { NavLink } from "react-router-dom";

function Footer() {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return ( 
    <div className={classes.footer}>
        <div className={ classes.fmain }>

            {/* footer left  */}
            <div className={classes.fleft}>

            <div className={classes.details}>
                <h1>Contact Details</h1>
                <p>icicc.ui@gmail.com</p>
            </div>

            <div className={classes.socialMedia}>
                <h1>Social Media</h1>

                <div className={classes.social}>
                   <a href="">Gmail</a>
                   <a href="">Facebook</a>
                   <a href="">LinkedIn</a>
                   </div>
            </div>
                  
            </div>

            {/* footer right  */}
           <div className={classes.fright}>
           <div className={classes.links}> 
                <h1>Quick Links</h1>

                <NavLink to="/callForPapers"><p>Call for papers</p></NavLink>
                <NavLink to="/publications"><p>Publications & Important Dates</p></NavLink>

                <NavLink to="/conferences">  <p>Conference Venue</p></NavLink>

                <NavLink  to="/downloads" > <p>Downloads</p></NavLink>


               
              
                
            </div>
           </div>


        </div>

<div className={classes.line}>
      <hr />
      </div>

        <div className={classes.f_lower}>
            <h3>Copyright © International Conference on Innovative Computing and Communication | All Rights Reserved |</h3>
            <p>Site By: Akshun Verma</p>
        </div>
    </div>
    );
}

export default Footer;