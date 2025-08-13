import { useParams } from "react-router-dom"
import { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { API_URL } from "./context";
import "./SingleMovieDisplay.css"

export default function SingleMovieDisplay(){
    const {id}=useParams();

    const [isLoading,setIsLoading]=useState(true);
       const[movie,setMovie]=useState("")
    
          //for by default showing of the movies
          const getMovies=async (url)=>{
             setIsLoading(true)
              try{
               const response= await fetch(url)
               const data=await response.json()
               console.log(data)
               if(data.Response === "True"){
                setIsLoading(false)
                setMovie(data)
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
           const timerOut=  setTimeout(()=>{  getMovies(`${API_URL}&i=${id}`)},800)
           
      return()=> clearTimeout(timerOut) 
          },[id])

          if(isLoading) {
            return(
                <div className="movie-section">
                <div className="loading">Loading...</div></div>
            )
        
        } 
    return( 
    <>
    <section className="movie-section">
        <div className="movie-card">
            <figure>
                <img src={movie.Poster} alt="" />
            </figure>
            <div className="card-content">
                <p className="title">{movie.Title}</p>
                <p className="card-text">{movie.Genre}</p>
                <p className="card-text">{movie.imdbRating}</p>
                <p className="card-text">{movie.Country}</p>
                <NavLink to="/">Go Back</NavLink>
            </div>
        </div>
    </section>
    </>
    )
}