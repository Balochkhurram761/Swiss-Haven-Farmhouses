import React from 'react'
import "../../styles/footer/Footer.css"
function Footer() {
  return (
    
   <div className="footer">
    <div className="sectionbanner">
    <div className="footerfirst">
      <div className="footerbody">
        <h1>Company Information</h1>
        <div className="footbody">
        <p>Address: Lahore Motorway City, Kot <br />Abdul Malik Interchange, Lahore, Pakistan</p>
        <p>Phone: +92 315 6664 441</p>
        <p>Email: example@gmail.com</p>
        </div>
       
      </div>
      
      <div className="footerbody">
        <h1>Quick Links</h1>
        <div className="footbody">
        <p><a href="/">Home</a></p>
        <p><a href="/about">About Us</a></p>
        <p><a href="/booking">Booking Form</a></p>
        <p><a href="/contact">Contact Us</a></p>
        </div>
       
      </div>
      
     
      <div className="footerbody">
        <h1>Legal Information</h1>
        <div className="footbody">
        <p><a href="/privacy">Privacy Policy</a></p>
        <p><a href="/term">Terms of service</a></p>
        </div>
       
      </div>
    
      </div>
    </div> 
    <hr  />  
    <div className="sectionbanner">
    <div className="footersecond">
   
      <p>© 2024 Swiss Haven Farmhouses. All right reserved</p>
    </div>
    </div>
   </div>
  )
}

export default Footer