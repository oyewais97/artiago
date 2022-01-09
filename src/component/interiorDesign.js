import {react,useState} from "react";
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
          
      

<div style={{ width: '24rem',display:"inline-block",margin:"0.56rem", }} key={index} className="blog-crd-main col-sm-12 col-md-4 col-lg-4">
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



<div style={{height : "20vh", backgroundColor: "white"}} >

</div>
</>

    
    );
}

export default InteriorDesign;
