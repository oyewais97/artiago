import React from "react"
import { FaBeer,FaInstagram,FaFacebookF,FaTwitter } from 'react-icons/fa';

const Footer=()=> {
    return(
        <>
        <div style={{height : "20vh", backgroundColor: "#5A5A5A"}} >

</div>
<footer className="page-footer font-small blue pt-4">

  
<div className="container-fluid text-center text-md-left">


  <div className="row">

    
    <div className="col-md-6 mt-md-0 mt-3">


      <h5 className="contact-heading"  >Contact Us.</h5>
      <ul className="ul-footer ">
        <li className="footer-link ">Tel no: +92 331 2545988</li>
        <li className="footer-link">Email Address: Info@Artiago.org</li>
      </ul>
      <ul>
        <li className="footer-link ">Office: Room no 02, Office 211.<br/>
RSM Square, Plot no E1.<br/>Shaheed-e-Millat Road. </li>
        <li className="footer-link ">Karachi, 75350, Pakistan.</li>
        <li className="footer-link ">Made with <a href="#" style={ { color: "grey" , textDecoration:"underline"  } }>squarespace</a></li>
        <li className="footer-icon"><FaInstagram color="white" fontSize="1.5em"/><span style={{ paddingLeft: "15px" }} ><FaFacebookF color="white" fontSize="1.5em" /></span><span style={{ paddingLeft: "20px" }}><FaTwitter color="white" fontSize="1.5em"  /></span></li>
      </ul>
    </div>
    

    <hr class="clearfix w-100 d-md-none pb-3" />
    
    <div class="col-md-3 mb-md-0 mb-3">

      

      <ul class="list-unstyled">
        <li className="footer-link2">
          <a href="#!" className="url-link">Shop</a>
        </li>
       
      </ul>

    </div>
    
    <div class="col-md-3 mb-md-0 mb-3">

      

      <ul class="list-unstyled">
        <li className="footer-link2">
          <a href="#!" className="url-link">Journal</a>
        </li>
        <li className="footer-link2">
          <a href="#!" className="url-link">Contact</a>
        </li>
              </ul>

    </div>
    

  </div>
  
</div>






</footer>
        </>
    )
}
export default Footer;