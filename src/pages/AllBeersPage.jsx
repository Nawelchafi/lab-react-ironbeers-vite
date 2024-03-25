import axios from 'axios'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
function AllBeersPage() {
    // state var for setting beets
    const [beers, setBeers] = useState([])
    // function to get data from api
    const getData = () => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers').then((response) => {
            setBeers(response.data)
        }).catch((error) => {
            console.error('Error fetching data:', error);
        });
    }
    // call use effect and pass data getter function
    useEffect(() => getData(), [])

    return (
        <div  >
            {beers.map((beer) => {
                return (

                    <section key={beer._id} style={{ display: 'flex', alignItems: 'center', margin: '40px' }} >
                        <div style={{ height: '100px', width: '100px', backgroundImage: `url(${beer.image_url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
                        <div>
                            <Link to={`/beers/${beer._id}`} >
                                <h1>{beer.name}</h1>
                            </Link>
                            <h3 style={{ color: 'gray' }}>{beer.tagline}</h3>
                            <p>Created by:{beer.contributed_by}</p>
                            <br />
                        </div>
                    </section>

                )
            })}
        </div>
    )
}

export default AllBeersPage;
