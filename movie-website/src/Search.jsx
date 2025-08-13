import { useGlobalContext } from "./context";

export default function Search(){
      const {query,setQuery,isError}= useGlobalContext()

    return (
        <div className="SearchBox" style={{textAlign: "center"}}>
            <div className="Search">
            <p>Search Your favourite Movie</p> 
            <form action="#" onSubmit={(e)=> e.preventDefault()}>
                <div>
                    <input type="text" placeholder="Search here" value={query} onChange={(e)=>setQuery(e.target.value)}/>
                </div>
            </form>
            <p> {isError.show && isError.msg}</p>
            </div>
        </div>
    )
}