import Category from "./Category"
import "./header.css"
import RecipeFinder from "./assets/RecipeFinder.png"

export default function Header(){
return(
  <div className="header">
    <div className="Logo">
    <img src={RecipeFinder} alt="photo" className="headerImg" />
    <p style={{marginLeft:"5px"}} className="Text">Recipe Finder</p>
    </div>
    <div className="category">
     <Category/>
    </div></div>
)
}