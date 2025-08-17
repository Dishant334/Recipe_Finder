import React from "react"
import { useState,useEffect,useContext } from "react"

const AppContext=React.createContext()
const AppProvider=({children})=>{
const [recipe,setRecipe]=useState([])
const [randomRecipes,setRandomRecipes]=useState([])
const [isLoading,setIsLoading]=useState(true)
const [isError,setIsError]=useState({show: "false" , msg:[]})
const[query,setQuery]=useState("")
const[searchQuery,setSearchQuery]=useState(0)
const [category,setCategory]=useState("")

const recipe_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const getRecipes=async (url)=>{
    try{
        const response=await fetch(url)
        const data=await response.json()
        console.log(data)

        if(data.meals){
          setRecipe(data.meals)
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
   const time= setTimeout(()=>{getRecipes(`${recipe_URL}&s=${query}`)},1000)
    return()=>clearTimeout(time) }
    ,[searchQuery])

useEffect(() => {
  const fetchCategoryMeals = async () => {
    if (!category) return;

    try {
      // First get the list of meals for that category
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await res.json();

      if (data.meals) {
        console.log(data.meals)
        // Fetch full details for each meal (limit to 12 for speed)
        const detailedMeals = await Promise.all(
          data.meals.slice(0, 12).map(async (meal) => {
            const detailRes = await fetch(
              `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
            );
            const detailData = await detailRes.json();
            return detailData.meals[0]; // full meal details
          })
        );

        setRecipe(detailedMeals);
      } else {
        setRecipe([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchCategoryMeals();
}, [category]);


useEffect(()=>{   //its not taking api its just rendering 10 items when the recipe is clicked
    if(recipe.length>0){
        const shuffled = [...recipe].sort(()=> 0.5 - Math.random());
        setRandomRecipes(shuffled.slice(0,18))
    }
},[recipe])    
return (
    <AppContext.Provider value={{recipe,randomRecipes,isLoading,isError,query,setQuery,setSearchQuery,category,setCategory}}>
        {children}
    </AppContext.Provider>
)
}
const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}

