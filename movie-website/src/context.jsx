//context API
//useContext hooks

//CreateContext(warehouse)
//Provider  (delivery boy)
//Consumer /hard so introduced-> (useContext()) ->who get the function(who get the things)
import React, { useState,useContext,useEffect } from "react";

export const API_URL=`http://www.omdbapi.com/?apikey=57df5d1b`

const AppContext=React.createContext();

//we need to create a provider function
const AppProvider=({children})=>{
   const [isLoading,setIsLoading]=useState(true);
   const[movie,setMovie]=useState([])
   const[isError,setIsError]=useState({show:"false",msg:""})
   const [query,setQuery]=useState("titanic")

      //for by default showing of the movies
      const getMovies=async (url)=>{
         setIsLoading(true)
          try{
           const response= await fetch(url)
           const data=await response.json()
           console.log(data)
           if(data.Response === "True"){
            setIsLoading(false)
            setMovie(data.Search)
            setIsError({
               show:false,
               msg:"",
           })
           }else{
            setIsError({
               show:true,
               msg:data.Error
            })
           }
          }
          catch(error){
            console.log(error)
          }
      }
      useEffect(()=>{
       const timerOut=  setTimeout(()=>{  getMovies(`${API_URL}&s=${query}`)},2000)
       
  return()=> clearTimeout(timerOut) 
      },[query])
   return <AppContext.Provider value={{isLoading,isError,movie,query,setQuery}}>
    {children}
   </AppContext.Provider>
};

//now we need a consumer
//->in home const ___=useContext(AppContent) all the data will will gone there


//we are creating global custom hook for our useContext so that we can use it anywhere
const useGlobalContext =()=>{
   return useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext}

