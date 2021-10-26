import React from "react";
//  import './styles/NavBar.css';

export function PagesDrapeauLangue () {
    return (
         <div>

             <div>
                 <div className="d-flex">
                  <span><img src={process.env.PUBLIC_URL + '/assets/images/image-2.png'} alt="logo france" /></span><span>Français</span>
                 </div>
                 <div className="d-flex">
                 <span><img src={process.env.PUBLIC_URL + '/assets/images/image-3.png'} alt="logo Anglais" /></span><span>Anglais</span>
                 </div>
                 <div className="d-flex">
                 <span><img src={process.env.PUBLIC_URL + '/assets/images/image-7.png'} alt="logo Portugal" /></span><span>Portuguais</span> 
                 </div>
                 <div className= "d-flex">
                 <span><img src={process.env.PUBLIC_URL + '/assets/images/image8.png'} alt="logo Arabie" /></span><span>Arabe</span>
                 </div>
                 <div className="d-flex">
                 <span><img src={process.env.PUBLIC_URL + '/assets/images/image-6_2.png'} alt="logo Turque" /></span><span>Turc</span>
                 </div>
                 <div className="d-flex">
                     <span></span><span></span>
                 </div>







             </div>
             </div>


    );
    
}

