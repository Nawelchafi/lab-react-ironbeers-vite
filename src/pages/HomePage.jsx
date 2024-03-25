import { Link } from "react-router-dom";
import BeersImg from '../assets/beers.png'
import RandomBeersImg from '../assets/random-beer.png'
import NewBeersImg from '../assets/new-beer.png'
function HomePage() {
    return (
        <div>
            <Link to='/beers'>
                <img src={BeersImg} alt=" beers img"></img>
                <h2>All Beers</h2>
            </Link>
            <Link to='/random-beer'>
                <img src={RandomBeersImg} alt=" random beer img"></img>
                <h2>Random Beer</h2>
            </Link>
            <Link to='/new-beer'>
                <img src={NewBeersImg} alt=" new beer img"></img>
                <h2>New Beer</h2>
            </Link>
        </div>
    )
}
export default HomePage;
