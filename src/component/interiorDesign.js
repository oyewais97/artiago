import {react,useState} from "react";
import NavBar from "../layout/navBar";
import { faHome,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBeer,FaInstagram,FaFacebookF,FaTwitter } from 'react-icons/fa';
import './interiorDesign.css';
 
const Scard = [ {  imgUrl: process.env.PUBLIC_URL + "/images/project1.jpg",tittle: 'Project 1',
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},{ imgUrl: process.env.PUBLIC_URL + "/images/project2.jpg",tittle: 'Project 2', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/project3.jpg",tittle: 'Project 3', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},{  imgUrl: process.env.PUBLIC_URL + "/images/project4.jpg",tittle: 'Project 4',
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/project5.jpg",tittle: 'Project 5', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/project6.jpg",tittle: 'Project 6', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
]




function InteriorDesign() {
    const [hover, setHover] = useState(false);
    const onHover = () => {
      debugger
      setHover(true);
    };
  
    const onLeave = () => {
      setHover(false);
    };
    const redrCard = (val, index) =>{
        return(
          
      

<div style={{ width: '24rem',margin:"0.56rem", }} key={index} className="blog-crd-main d-md-inline-block d-sm-inline-block d-lg-inline-block ">
<img  src={val.imgUrl} style={{height:"20vw",width:"100%" , borderRadius:"2px",objectFit:'cover'}} onMouseEnter={onHover} onMouseLeave={onLeave} {...hover? val.tittle:null } tabIndex="-3"/>
<div className="card-body">
  <h5 className="card-title">{hover? val.tittle: null}</h5>
  
  
</div>
</div>
  
        );
    }


  return (
  <>    
  <div className="homeMainDiv">
  {/* <div className="navbar navbar-expand-lg navBar  ">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</div> */}
<NavBar />
<div className="jumbotron jumbotron-fluid interior-jumbo nav-bar-bk">
  <div className="container">
      
    <h3 className="display-4 heading-jumbo-welcome">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</h3>
    
  </div>
</div>
</div>
<div className="blogs-card-div col-12 ">
             
                 
             <div style={{display:'inline-block'}} className="col-sm-11 col-md-9 col-lg-3 col-xl-8  " >
                 {  Scard.map(redrCard)
         }
          </div>

         


</div>
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

    
    );
}

export default InteriorDesign;
