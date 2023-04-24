import React from 'react';

import './SpecialCard.css'
import data from './SpecialData.jsx';
import Footer from '../Footer/footer';
import 'animate.css';
export default function SpecialCard() {
  return (


    <>
     <div className="spSessionHeading">
      <h1>Special Sessions</h1>
      <hr />
     </div>
    <div className='main-card SpSessionCard animate__animated animate__bounceInLeft'>
        {data.map((qwe)=>{
            return(

              <div className='card' alignment='center'>
              {/* <MDBCardHeader>Featured</MDBCardHeader> */}
              <div className='zero-margin margin-less'>Link</div>
              <a className='card-link' href="#">{qwe.title}</a>
              <div>
                <div className='zero-margin'>Organisers</div>
                <ul className='ul-zero-margin'>
                    {qwe.organisers.map((org)=>{
                        return(<li>{org}</li>)
                    })}
                </ul>
              </div>
              <div className='text-muted'>
                <div className='zero-margin'>Listing</div>
                <a className='card-link' href={qwe.link}>{qwe.listing}</a>
              </div>
            </div>
    //             <MDBCard className='card' alignment='center'>
    //   {/* <MDBCardHeader>Featured</MDBCardHeader> */}
    //   <MDBCardTitle className='zero-margin margin-less'>Link</MDBCardTitle>
    //   <MDBCardLink className='card-link' href={qwe.link}>{qwe.title}</MDBCardLink>
    //   <MDBCardBody>
    //     <MDBCardTitle className='zero-margin'>Organisers</MDBCardTitle>
    //     <ul className='ul-zero-margin'>
    //         {qwe.organisers.map((org)=>{
    //             return(<li>{org}</li>)
    //         })}
    //     </ul>
    //   </MDBCardBody>
    //   <MDBCardFooter className='text-muted'>
    //     <MDBCardTitle className='zero-margin'>Listing</MDBCardTitle>
    //     <MDBCardLink className='card-link' href={qwe.link}>{qwe.listing}</MDBCardLink>
    //   </MDBCardFooter>
    // </MDBCard>
    
            )
        })}
    
    </div>

    <Footer/>
    </>
  );
}