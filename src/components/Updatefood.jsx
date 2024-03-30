import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
// import useFetch from "../customHook/useFetch";

const Updatefood = () => {

    let { id } = useParams();
    let history = useHistory();

    let [foodName, setFoodname] = useState("");
    let [price, setPrice] = useState("");
    let [type, setType] = useState("");
    let [rating, setRating] = useState("");
    let [pic, setPic] = useState("");

    useEffect(() => {
        fetch("http://localhost:4000/items/" + id)
            .then(res => res.json())
            .then((data) => {
                setFoodname(data.foodName);
                setPrice(data.price);
                setRating(data.rating);
                setPic(data.pic);
            })
    }, [])


    let handleUpdateFood = (e) => {
        e.preventDefault();
        let updatedFood = { foodName, price, type, rating, pic };
        fetch("http://localhost:4000/items/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedFood)
        })
            .then(() => {
                alert("food has been updated");
                history.goBack();
            })
    }

    return (
        <div className="add-food">
            <h1>Update Food</h1>
            <hr />
            <form onSubmit={handleUpdateFood}>
                <label>Food </label>   <input type="text" value={foodName} onChange={(e) => { setFoodname(e.target.value) }} />

                <label>Price </label>  <input type="number" step="10" value={price} onChange={(e) => { setPrice(e.target.value) }} />

                <label>Type</label>    <div className="type-opt">
                    <input type="radio" name="type" value="Veg" onClick={(e) => { setType(e.target.value) }} />  <label>Veg</label>
                    <input type="radio" name="type" value="Non-Veg" onClick={(e) => { setType(e.target.value) }} />  <label>Non-Veg</label>
                </div>

                <label>Rating</label>  <input type="number" min="1" max="10" step="0.1" value={rating} onChange={(e) => { setRating(e.target.value) }} />

                <label>Picture</label>  <input type="url" value={pic} onChange={(e) => { setPic(e.target.value) }} />


                <input type="submit" value="Update food" />

            </form>
        </div>
    );
}

export default Updatefood;
