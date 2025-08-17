import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./recipes.css"
export default function Recipes(){
const {randomRecipes,isLoading}=useGlobalContext();
if(isLoading){
  return(
     <div className="loading">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  )
}

return(
    <div  className="recipe-list">
  {randomRecipes.map((recipe) => (
    <NavLink to={`recipe/${recipe.idMeal}`} key="recipe.idMeal" className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="img" />
      <h3>{recipe.strMeal}</h3>
      <p>Category: {recipe.strCategory}</p>
      <p>Origin: {recipe.strArea}</p>
    </NavLink>
  ))}
</div>

)
}