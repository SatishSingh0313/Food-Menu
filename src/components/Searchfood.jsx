import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Foodlist from "./Foodlist";


const Searchfood = () => {
   
    let {searchKey} = useParams();
    let [items, setItems] = useState(null)
    let [pending, setPending] = useState(true)
    // let[pending , setPending] = useState( true )
    let [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            console.log("fetch  starts");
            fetch("http://localhost:4000/items")
            
                .then((response) => {
                    if (response.ok === true) {
                        return response.json()
                    }
                    else {
                        throw Error("data not found,please try for different keyword")
                    }
                })

                .then((data) => { setItems(data); setPending(false) })
                .catch((err) => { setError(err.message); setPending(false) })

        }, 500)
    }, [])


    return (
        
        <div>
            <h1> Search Result : </h1>
    {error && <h1>{error}</h1>}
     {pending && <div className="loader" > </div>}
     
     {items && <Foodlist items={items.filter( (food)=>{return food.foodName.toUpperCase().includes(searchKey.toUpperCase())})} title="Search Result" />}

            
        </div>
    );
}

export default Searchfood;
