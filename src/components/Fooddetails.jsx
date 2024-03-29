import useFetch from "../customHook/useFetch";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Fooddetails = () => {

  let { id } = useParams();
  let history = useHistory();

  let { data: item, pending, error } = useFetch("http://localhost:4000/items/" + id);

  let handleDeleteFood = () => {

    fetch("http://localhost:4000/items/" + id, { method: "DELETE" })
      .then(() => {
        alert("food has been removed");
        history.push("/")
      })
  }
  return (
    <div >
      {error && <h1>{error}</h1>}
      {pending && <div className="loader"></div>}
      {item && <div className="food-detail">
        <img src={item.pic} alt="food" />
        <h1>Food     - {item.foodName}</h1>
        <h3>Price    - {item.price}</h3>
        <h3>Rating   - {item.rating}</h3>
        <h3 className={item.type === "Veg" ? "veg" : "non-veg"}>Category - {item.type}</h3>
        <button onClick={handleDeleteFood}>Remove Food</button>
        <Link to={`/update${id}`}><button>Update Food</button></Link>
      </div>}

    </div>
  );
}

export default Fooddetails;
