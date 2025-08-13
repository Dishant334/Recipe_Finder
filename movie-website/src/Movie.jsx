import "./Movie.css"
import {NavLink} from "react-router-dom"
import { useGlobalContext } from "./context";

export default function Movie(){
    const{movie,isLoading}=useGlobalContext();
      
    if(isLoading){
        return (
        <div className="movie-section" style={{textAlign: "center", backgroundColor: "grey"}}>
            <div className="loading">Loading</div>
        </div>
        )
    }
    return <>
    <section className="movie-page">
       <div className="grid grid-4-cols">
           {movie.map((currMovie)=>{
            const {imdbID,Title,Poster}=currMovie;
            const movieName=Title.substring(0,15);
           return( 
               <NavLink to={`movie/${imdbID}`} key={imdbID}>
                       <div className="card">
                        <div className="cardInfo">
                            <h2 className="TitleName">{movieName.length >= 15? `${movieName}...`:movieName}</h2>
                            <img src={Poster} alt={imdbID} />
                        </div>
                       </div>
               </NavLink> 
            )
        
    })}


       </div>
    </section>
  
        </>
}