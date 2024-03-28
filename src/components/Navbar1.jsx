import  food from  '../food..png'
import { Link } from 'react-router-dom'
// import berger from '../berger.png'
import { useState } from 'react'
const Navbar1  =()=>{
    let [searchKey,setsearchkey]=useState("");
    return (
        
        <nav className='b'>
           {/* <div className="logo1">
            <img src={food} alt="logo1" />
            <h1>Pizza</h1>
           </div> */}
         <div className="logo">
            <Link to="/"><img src={food} alt="logo" /></Link>
            <h1>Food Kart</h1>
           
         </div>

         <div className="searchbar">
         <input type="search" value={searchKey}onChange={ (e)=>{setsearchkey(e.target.value);} } />

         <Link to={`/Search-${searchKey}`}> <button>search</button></Link>
         </div>


        <div className="navlinks">
            <Link to="/addfood">Add food | </Link>
            <Link to="/orders">Orders</Link>
        </div>
        
        </nav>
        
        
        
    )
}
export  default Navbar1
