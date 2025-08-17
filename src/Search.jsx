import { useGlobalContext } from "./context";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css"


export default function Search() {
  const { query, setQuery,setSearchQuery } = useGlobalContext();

  const handleChange = (e) => {
    setQuery(e.target.value); // updates the query while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Search submitted:", query); // action only happens here
    // you can call your search/filter function here
    setSearchQuery(prev=>prev+1)
  };

  return (
    <div className="Search">
        <div>
        <h1 className="Sear">Search Your Favourite Food</h1>
        <br />
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
      <TextField
      style={{width:"25rem", fontFamily:"arial"}}
        label="Search"
        variant="outlined"
        required value={query}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" color="primary" >
        Search
      </Button>
    </form>
    </div></div>
  );
}
