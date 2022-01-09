import react from "react";
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
  <div class="navbar navbar-expand-lg navBar  ">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</div>
<div class="jumbotron jumbotron-fluid nav-bar-bk">
  <div class="container">
      
    <h1 class="display-4">Fluid jumbotron</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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
</>

    
    );
}

export default Home;
