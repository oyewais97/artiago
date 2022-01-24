
import react from "react";
import NavBar from "../layout/navBar";
import './home.css';


 
const Scard = [ {  imgUrl: process.env.PUBLIC_URL + "/images/image+03.jpg",tittle: 'Architectural Design',
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},{ imgUrl: process.env.PUBLIC_URL + "/images/image+02.jpg",tittle: 'Interior Design', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/image+04.jpg",tittle: 'Landscape Design', 
para: "Some quick example text to build on the card title and make up the bulk of the cards content.",
}
]




function Home() {

    const redrCard = (val, index) =>{
        return(
          
      
//          <Card style={{ width: '24rem',display:"inline-block",margin:"0.56rem", }} key={index} className="blog-crd-main col-sm-12 col-md-6 col-lg-6" >
//   <Card.Img variant="top" src={val.imgUrl} style={{height:"15vw", borderRadius:"2px",objectFit:'cover'}} />
//   <Card.Body className="card-body-blg">
//   <Card.Title className="crd-tiitle">{val.tittle}</Card.Title>
//   <Card.Text className="crd-text">
//    {val.para}
//   </Card.Text>
//   <Button variant="transparent" style={{float:"left",fontSize:"1rem",fontFamily: "IBM Plex Sans,sans-serif" }} className="crd-blg-btn">Blogs</Button>
//   </Card.Body>
//   </Card>
<div style={{ width: '24rem',display:"inline-block",margin:"0.56rem", }} key={index} className="blog-crd-main col-sm-12 col-md-4 col-lg-4">
<img  src={val.imgUrl} style={{height:"20vw",width:"100%" , borderRadius:"2px",objectFit:'cover'}} />
<div className="card-body">
  <h5 className="card-title">{val.tittle}</h5>
  
  <a  style={{float:"left",fontSize:"1rem",fontFamily: "IBM Plex Sans,sans-serif" }} className="crd-blg-btn">Go somewhere</a>
</div>
</div>
  
        );
    }


  return (
  <>    
  <div className="homeMainDiv">
    <NavBar/>
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
<div className="jumbotron jumbotron-fluid nav-bar-bk">
  <div className="container">
      
    <h1 className="display-4 heading-jumbo-welcome">ONE-STOP SHOP <br/>
For Your Design Needs</h1>
    {/* <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
  </div>
</div>
</div>
<div className="blogs-card-div col-12 ">
             
                 
             <div className="row1 mx-auto" style={{display:"inline",}}   >
                 {  Scard.map(redrCard)
         }
          </div>

         


</div>
<div className="introHeading col-10 mx-auto"> 
    <h1>Introducing 
      Artiago Arts</h1>
      <p className="col-7">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
</div>
<div className="afterIntroHeading col-6 mx-auto">
    <h1>Reconnect with Artiago.</h1>
    <p className="col-11">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
</div>

<div style={{marginTop: "8rem"}} >
    <img src="https://wallpaperaccess.com/full/1078448.jpg" style={{height: "70vh", width: "100%"}} />
</div>
<div style={{height : "20vh", backgroundColor: "white"}} >

</div>
<footer class="page-footer font-small blue pt-4">

  
<div class="container-fluid text-center text-md-left">


  <div class="row">

    
    <div class="col-md-6 mt-md-0 mt-3">


      <h5 class="text-uppercase">Contact Us</h5>
      <ul>
        <li>Tel no: +92 331 2545988</li>
        <li>Email Address: Info@Artiago.org</li>
      </ul>
      <ul>
        <li>Office: Room no 02, Office 211.<br/>
RSM Square, Plot no E1.<br/>Shaheed-e-Millat Road. </li>
        <li>Karachi, 75350, Pakistan.</li>
      </ul>
    </div>
    

    <hr class="clearfix w-100 d-md-none pb-3" />
    
    <div class="col-md-3 mb-md-0 mb-3">

      

      <ul class="list-unstyled">
        <li>
          <a href="#!">Shop</a>
        </li>
       
      </ul>

    </div>
    
    <div class="col-md-3 mb-md-0 mb-3">

      

      <ul class="list-unstyled">
        <li>
          <a href="#!">Journal</a>
        </li>
        <li>
          <a href="#!">Contact</a>
        </li>
              </ul>

    </div>
    

  </div>
  
</div>






</footer>
</>

    
    );
}

export default Home;
