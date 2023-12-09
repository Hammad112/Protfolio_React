import React from 'react';
import MyImage from './assests/personel.jpg'
const LandingSection = () => {
  return (
   
      <div className="land-container">
                 <img src={MyImage} alt="Personel" className='imagesrc' />
                   <p className="text-land" >Hello,I'm Hammad!</p>
                  <p className='para-land'>A Frontend developer Specialised in React</p> 
    </div>
  );
}
export default LandingSection;