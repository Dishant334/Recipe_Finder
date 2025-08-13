import Home from "./home.jsx"
import Error from "./Error"
import Search from "./Search.jsx"
import SingleMovieDisplay from './SingleMovieDisplay.jsx'
import {BrowserRouter,Routes,Route} from  "react-router-dom"
// import './App.css'

function App() {
  return (
    <>
      
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovieDisplay/>}/>  //
      <Route path="*" element={<Error />}/>   
      </Routes></BrowserRouter>
    </>
  )
}

export default App
