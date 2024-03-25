import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function BeerDetailsPage() {
    const { beerId } = useParams()
    const [beer, setBeer] = useState()
    const beersAPI = "https://ih-beers-api2.herokuapp.com/beers";

    useEffect(() => {
        axios.get(`${beersAPI}/${beerId}`).then((res) => {
            setBeer(res.data);
            console.log(res.data);
        });
    }, []);

    return (
        <div className="beer-detailspage">
            {beer && (
                <div>
                    <img src={beer.image_url} alt={beer.name} />
                    <h4>{beer.name}</h4>
                    <span>{beer.attenuation_level}</span>
                    <p>{beer.tagline}</p>
                    <span>{beer.first_brewed}</span>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            )}
        </div>
    );
}


export default BeerDetailsPage;
