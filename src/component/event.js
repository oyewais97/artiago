import {react,useState} from "react";
import NavBar from '../layout/navBar'
import './event.css'


const Scard = [ {  imgUrl: process.env.PUBLIC_URL + "/images/project1.jpg",tittle: 'Event One ', date:"Thursday, July 11, 2024" ,time:" 4:30 AM  5:30 AM",
para: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
},{ imgUrl: process.env.PUBLIC_URL + "/images/project2.jpg",tittle: 'Event Two',date:"Thursday, July 11, 2024" ,time:" 4:30 AM  5:30 AM" ,
para: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/project3.jpg",tittle: 'Event Three', date:"Thursday, July 11, 2024" ,time:" 4:30 AM  5:30 AM",
para: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
},{  imgUrl: process.env.PUBLIC_URL + "/images/project4.jpg",tittle: 'Event Four',date:"Thursday, July 11, 2024" ,time:" 4:30 AM  5:30 AM",
para: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/project5.jpg",tittle: 'Event Five', date:"Thursday, July 11, 2024" ,time:" 4:30 AM  5:30 AM",
para: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
},
{ imgUrl: process.env.PUBLIC_URL + "/images/project6.jpg",tittle: 'Event Six', date:"Thursday, July 11, 2024" ,time:" 4:30 AM  5:30 AM",
para: "It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.",
},
]




const Events = ({ hideTransparency }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      
      setHover(true);
      console.log('hello')
    };
  
    const onLeave = () => {
      setHover(false);
    };
    const redrCard = (val, index) =>{
        return(
          
      
<div className="row">
<div style={{ marginTop:"1rem", }} key={index} className=" col-sm-12 col-md-4 col-lg-6">
<img  src={val.imgUrl} style={{height:"20vw",width:"89%" , borderRadius:"2px",objectFit:'cover'}} tabIndex="-3"/>
</div>
<div className="col-sm-12 col-md-4 col-lg-6" style={{marginTop: "0.7rem", marginLeft:"-20px"}}>
  <h2 className="card-title" style={{color:"white"}}> {val.tittle}</h2>
  <h5 style={{color:"white"}} >{val.date}</h5>
  <h5 style={{color:"white"}} >{val.time}</h5>
  <p style={{color:"white"}}>{val.para}</p>
  
  
  </div>
</div>
  
        );
    }

   

  return (
  <>    
 <NavBar />
<div className="jumbotron jumbotron-fluid bk-jumbo " >
  <div className="container">
      
    <h1 className="display-4 col-6 mx-auto font-weight-normal " style={{ marginTop:"10rem", color:"black", }}>Upcoming events.</h1>
    
  </div>
</div>

<div className="col-12 ">
             
                 
             <div className="row1 mx-auto"    >
                 {  Scard.map(redrCard)
         }
          </div>

         


</div>



<div style={{height : "20vh", backgroundColor: "white"}} >

</div>
</>

    
    );
}

export default Events;
