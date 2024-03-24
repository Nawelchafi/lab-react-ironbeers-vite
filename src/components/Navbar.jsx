import { Link } from "react-router-dom";
import Homeicon from '../assets/home-icon.png'
function Navbar() {

    return (
        <div className="nav">
            <Link to='/'>
                <img src={Homeicon} alt='home page'></img>
            </Link>
        </div>
    )
}

export default Navbar;
