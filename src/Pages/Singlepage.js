// import { useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";

// Context
// import ShowsContext from "../Context/shows/showsContext";

// const Singlepage = () => {
//   // const params =  useParams()
//   const { getSingleShow, singleShow=[], loading } = useContext(ShowsContext);

//   useEffect(() => {
//     getSingleShow(params.id);
//   } ,[]);
// 
  // const removeTags = (text) => {
  //   if (text === null || text === "") {
  //     return false;
  //   } else {
  //     text = text.toString();
  //   }
  //   return text.replace(/(<([^>]+)>)/gi, "");
  // };

  // return (
  //   <>
  //   <h1>This is single page  </h1>
  //   {loading ? (<h2>Loading . . . </h2>) : (
  //     <div>
      
  //     </div>
  //   )}
      {/* {loading ? (
        <h1>Loading ...</h1> 
      ) : (
        <div className="singleshow">
          <img
            src={
              singleShow._embedded.show.image
                ? singleShow._embedded.show.image
                : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
            }
            alt={singleShow.name}
          />
          <div className="singleshow__info">
            <h1>{singleShow.name}</h1>
            {singleShow.genres &&
              singleShow.genres.map((genre) => (
                <span key={genre} className="singleshow__genre">
                  {genre}
                </span>
              ))}
            <p>
              <strong>Status:</strong> {singleShow.status && singleShow.status}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {singleShow.rating ? singleShow.rating.average : "No rating"}
            </p>
            <p>
              <strong>Offical Site:</strong>{" "}
              {singleShow.officalSite ? (
                <a
                  href={singleShow.officalSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  {singleShow.officalSite}
                </a>
              ) : (
                "No offical site"
              )}
            </p>
            <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
          </div>
        </div>
      )} */}
//     </>
//   );
// };

//export default Singlepage;
