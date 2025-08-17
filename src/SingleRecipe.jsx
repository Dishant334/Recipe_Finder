import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import"./recipes.css"
import "./SingleRecipe.css"
export default function SingleRecipe(){
   const {id} =useParams()
   const [recipe,setRecipe]=useState([])
   const [isLoading,setIsLoading]=useState(true)
   const [isError,setIsError]=useState({show: "false" , msg:[]})
const recipe_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

      const getRecipes=async (url)=>{
       try{
           const response=await fetch(url)
           const data=await response.json()
           console.log(data)
   
           if(data.meals){
             setRecipe(data.meals[0])
              setIsLoading(false);
              setIsError({
               show: "false",
               msg:""}
              )
           }
           else{
               setIsError({
                   show: "false",
                   msg:""
               })
           }
       }catch(error){
           console.log(error)
       }
   }
   
   useEffect(()=>{
      const time= setTimeout(()=>{getRecipes(`${recipe_URL}&i=${id}`)},1000)
       return()=>clearTimeout(time) }
       ,[id])
       if(isLoading){
  return(
    <div className="loading">Loading....</div>
  )
}
return (
   <div className="Single">
      
         <h3 style={{fontSize:"50px"}}>Recipe</h3>
         <img src={recipe.strMealThumb} alt={recipe.strMeal} className="image" />
          <h2>{recipe.strMeal}</h2>
           
           <h3>Ingrediants</h3>

            <ul>{recipe.strIngredient1}</ul>
               <ul>{recipe.strIngredient2}</ul>
                 <ul>{recipe.strIngredient3}</ul>
                   <ul>{recipe.strIngredient4}</ul>
                     <ul>{recipe.strIngredient5}</ul>

            <h3>Instructions</h3>
            <p>{recipe.strInstructions}</p>  
             <h3>Source</h3>   <a href={recipe.strSource}>{recipe.strSource}</a>
             <br />
            <h3>Youtube :</h3>  <a href={recipe.strYoutube}>{recipe.strYoutube}</a>     
      
   </div>
)

}