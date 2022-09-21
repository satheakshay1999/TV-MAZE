import { useContext } from "react";
import ShowsContext from "../Context/shows/showsContext";

import Searchbar from "../Components/Searchbar";
import ListItem from "../Components/ListItem";
// import { useEffect } from "react";

const Homepage = () => {
  const showsContext = useContext(ShowsContext);
  const { loading, show=[] } = showsContext;


  return (
    <div className="homepage">
      <Searchbar />
      {loading ? (<h1>Loading ...</h1>) : (<div>
        {show.map((item) => (
           
           <ListItem
             key={item.show.id}
             id={item.show.id}
             image={
               item.show.image
                 ? item.show.image.medium
                 : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
             }
             name={item.show.name}
             rating={
               item.show.rating.average
                 ? item.show.rating.average
                 : "No rating"
             }
           />
         ))}
      </div>)
      }
    </div>
  );
};

export default Homepage;
