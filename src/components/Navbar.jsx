import  food from  '../food..png'
import berger from '../berger.png'
const Navbar  =()=>{
    return (
        <nav className='a'>
           <div className="logo">
            <img src={food} alt="logo" />
            <h1>Food Spyders</h1>
           </div>
           <div className="logo">
            <img src={berger} alt="logo" />
            <h1>Food Spyders</h1>
           </div>
           <div className="navlinks">
            <a href="/">Add  Food | </a>
            <a href="/">Orders</a>

           </div>
        </nav>
        
        
        
    )
}
export  default Navbar