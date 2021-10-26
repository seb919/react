import './styles/NavBar.css';
import {PagesDrapeauLangue} from '../pages/PagesDrapeauLangue';
//import { SearchBar } from './SearchBar';
// import { FaUserCircle } from 'react-icons/fa';
// export const NavBar = (props) => {

//     return (
//         <nav className="navbar navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <img className="logo" src={process.env.PUBLIC_URL + '/public/assets/images/logo_mda.png'} alt="Logo de la MDA de Roubaix" />
                
//                 <div className="d-flex align-items-center">
//                     {/* <SearchBar /> */}
//                     <div className="userIcon">
//                         {/* <FaUserCircle/> */}
//                         </div>
//                 </div>
//             </div>
//         </nav>
//     );
// }

export function NavBar(props){
    const {text, classes} = props;
    return (
        <nav className="navbar navbar-light colorNav">
            <div className="container-fluid">
            <a className="navbar-brand">
                <img src={process.env.PUBLIC_URL + '/assets/images/logo_mda.png'} alt="logo"/></a>
                <div className="d-flex">
                <form className="d-flex form-search">

                        {/* <input className="form-control me-2 inpt" type="search" placeholder="Search" aria-label="Search"/> */}
                        {/* <button className="search" type="submit"><ImSearch className="search"/></button> */}
                    </form>

                    {/* <button className="search user" type="submit"><FaUserAlt className="search"/></button> */}
                </div>
            </div>
        </nav>

    );
}