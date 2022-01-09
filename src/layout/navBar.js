import {react,useState} from "react";
import { Menu, Dropdown } from "antd";
import { Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import './navbar.css'


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




const NavBar = ({ hideTransparency }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      
      setHover(true);
      console.log('hello')
    };
  
    const onLeave = () => {
      setHover(false);
    };
  
    
      const menu = (
        <Menu>
          <Row className="dropdownLi">
            <Col lg={12} md={12} sm={12} xs={12}>
              <Menu.Item>
                <li>
                  Virtual events
                </li>
              </Menu.Item>
              <Menu.Item>
                <li>
                  Hybrid events
                </li>
              </Menu.Item>
              <Menu.Item>
                <li>In-person events</li>
              </Menu.Item>
            </Col>
          
              
              {/* <Button
                type="link"
                style={{
                  fontWeight: "bolder",
                  fontSize: "16px",
                }}
              >
                DOWNLOAD NOW
                <BsArrowRight style={{ fontSize: "20px" }} />
              </Button> */}
           
          </Row>
        </Menu>
      );

  return (
  <>    
  <div className="homeMainDiv">
  <div className={
        hideTransparency
          ? "navbar-desktop navbar-desktop-fixed"
          : "navbar-desktop"
      }>
      <a class="navbar-brand" href="#">Artiago Pakistan</a>
  <ul className="navbarLi">
          
            <li id="first" onMouseOver={onHover}  >Events
            
            <li style={{marginTop:"-3rem"}}>
            {hover ? 
            <ul  className="dropdownL-menu">
                            <li><a href="#" onMouseOut={onLeave}>Algorithm</a></li>
                            <li><a href="#" onMouseOut={onLeave}>Gate</a></li>
                          
                        </ul>: null}
            </li>
           
         
            </li>
           
            
          
          <li id="second">
            About

          </li>
          <li id="second">
            Company

          </li>
          <li id="second">
            Future

          </li>
          <li id="second">
            Resources

          </li>
          </ul>
  </div>

</div>
</>

    
    );
}

export default NavBar;
