import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()

    const addToCart = item => {
      if(user && user.email) {
        const orderItem = {name, image, price, foodId : _id, email : user.email} 
        fetch('http://localhost:5000/carts', {
          method : "POST",
          headers : {
            'content-type' : 'application/json'
          },
          body : JSON.stringify(orderItem)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            console.log(data)
            alert('data inserted successfully')
          }
        })
        .catch(error => {
          console.error(error)
        })
      }
      else{
        return navigate('/login')
      }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
    <p className="absolute bg-slate-700 text-white px-4 py-2 right-4 top-4 rounded-md">${price}</p>
  <div className="card-body flex flex-col items-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-center">
      <button onClick={() => addToCart(item)} className="btn btn-outline border-0 border-b-4">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;