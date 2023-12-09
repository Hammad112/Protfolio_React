import React from "react";
import ig1 from './assests/webdev.jfif'
import ig2 from './assests/image1.jpg'
import ig3 from './assests/image2.jpg'
import ig4 from './assests/image3.jpg'

const ProjectSection = (props) => {

    return (
       
        <div className="Container-project" id="Container-project">
            <div className="Card-Container">
                <h3 >Featured Project</h3>
             </div>
            
            <div className="Card-Container">
                   <div className="card-1" >
                        <img  src={ig1} alt="WEBDEV" />
                        <span >project</span>
                        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus cumque nisi doloribus
                         neque sint laboriosam nostrum quo quaerat unde ea porro fugiat nobis eaque, quod iusto nesciunt
                         velit esse. Animi!</p>
                        {/* <span >see more &rarr;</span> */}
            </div>
            <div className="card-1" >
                    <img  src={ig2} alt="WEBDEV" />
                    <span >project</span>
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus cumque nisi doloribus
                     neque sint laboriosam nostrum quo quaerat unde ea porro fugiat nobis eaque, quod iusto nesciunt
                     velit esse. Animi!</p>
            
        </div>
            </div>
            <div className="Card-Container">
            <div className="card-1" >
                    <img  src={ig3} alt="WEBDEV" />
                    <span >project</span>
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus cumque nisi doloribus
                     neque sint laboriosam nostrum quo quaerat unde ea porro fugiat nobis eaque, quod iusto nesciunt
                     velit esse. Animi!</p>
                   
            </div>
            <div className="card-1" >
                    <img  src={ig4} alt="WEBDEV" />
                    <span >project</span>
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus cumque nisi doloribus
                     neque sint laboriosam nostrum quo quaerat unde ea porro fugiat nobis eaque, quod iusto nesciunt
                     velit esse. Animi!</p>
                   
        </div>
        </div>
        
        </div>
        
    );
}
export default ProjectSection;