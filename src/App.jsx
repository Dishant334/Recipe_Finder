import { createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./Home.jsx"
import SingleRecipe from "./SingleRecipe.jsx"
//import './App.css'
const router=createBrowserRouter([{
  path:"/",
  element:<Home/>
},
{
  path:"recipe/:id",
  element:<SingleRecipe />
}
])
function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
