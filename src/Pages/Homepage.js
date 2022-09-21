import { useContext } from "react";
import ShowsContext from "../Context/shows/showsContext";

import Searchbar from "../Components/Searchbar";
import ListItem from "../Components/ListItem";
import { useState } from "react";
// import { useEffect } from "react";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, shows=[] } = showsContext;
  const [state , setState] = useState(0);

  return (
    <div className="homepage">
      <Searchbar />
      <button onClick={()=>{setState(state+1)}}>add</button>
     { shows.map((ele)=><h1>{ele.show.name}</h1>
          )}
      {/* {loading ? (
        <h1>loading</h1>
      ) : 
      
          shows.map((ele)=><h1>{ele.show.name}</h1>
          )
        
      } */}
    </div>
  );
};

export default Homepage;
// {shows.map((item) => (
           
//   <ListItem
//     key={item.show.id}
//     id={item.show.id}
//     image={
//       item.show.image
//         ? item.show.image.medium
//         : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
//     }
//     name={item.show.name}
//     rating={
//       item.show.rating.average
//         ? item.show.rating.average
//         : "No rating"
//     }
//   />
// ))}