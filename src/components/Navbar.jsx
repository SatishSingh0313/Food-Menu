import food from '../food.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    let [searchKey, setsearchkey] = useState("");

    return (

        <nav>
            <div className="logo">
                <Link to="/"><img src={food} alt="logo" /></Link>
                <h1>Food Kart</h1>

            </div>

            <div className="searchbar">
                <input type="search" value={searchKey} onChange={(e) => { setsearchkey(e.target.value); }} />

                <Link to={`/search${searchKey}`}> <button>search</button></Link>
            </div>


            <div className="navlinks">
                <Link to="/addfood">Add food | </Link>
                <Link to="/orders">Cart</Link>
            </div>

        </nav>



    )
}
export default Navbar
