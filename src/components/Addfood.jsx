import { useRef } from "react";
import { useHistory } from "react-router-dom";

const Addfood = () => {

    let history = useHistory();
    let foodname = useRef();
    let price = useRef();
    let rating = useRef();
    let picture = useRef();

    let handleAddFood = (e) => {
        e.preventDefault();

        let newFood = {
            foodName: foodname.current.value,
            price: price.current.value,
            type: "",
            rating: rating.current.value,
            pic: picture.current.value
        }

        let options = document.getElementsByName("type");
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked) {
                newFood.type = options[i].value;
            }
        }

        
        fetch("http://localhost:4000/items", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newFood)
        })
            .then(() => {
                   alert("new food added");
                history.goBack();
                // history.push("/")    redirects to home page
            })
        
}

    return (
        <div className="add-food">
            <h1>Add New Food</h1>
            <hr />
            <form onSubmit={handleAddFood}>
                <label>Food </label>   <input required type="text" ref={foodname} /><br />
                <label>Price </label>  <input required  type="number" step="1" ref={price} /><br />
                <label>Type</label>    <div className="type-opt">
                    <input required type="radio" name="type" value="Veg" />  <label>Veg</label><br />
                    <input required type="radio" name="type" value="Non-Veg" />  <label>Non-Veg</label>
                </div>

                <label>Rating</label>  <input required type="number" min="1" max="10" step="0.1" ref={rating} /><br />
                <label>Picture</label>  <input required type="url" ref={picture} /><br />


                <input className="btn" type="submit" value="Add food" />

            </form>
        </div>
    );
}

export default Addfood;