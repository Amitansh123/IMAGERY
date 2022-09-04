import React, { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [term, setTerm] = useState("");

  //used useEffect for fetching the API data
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits); //updates the images to the data from API
        setIsloading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch
        searchText={(text) =>
          setTerm(text)
        } /* searchText is passed as a prop and fetches the searched text from ImageSearch.js and updates the state of term */
      />
       {!isLoading && images.length === 0 && <h1 className="text-5xl text-center mx-auto mt-32">OOPs!!! No Images Found...</h1> }
      {isLoading ? (
        <h1 className="text-6xl text-center mx-auto mt-32">
          Images are loading...
        </h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map(
            (
              image //maping through every image updated by useState(setImages)
            ) => (
              <ImageCard key={image.id} image={image} /> //passing every image as a prop
            )
          )}
        </div>
      )}
    </div>
  );
}

export default App;
