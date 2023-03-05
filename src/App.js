import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import Footer from "./components/Footer"
import Header from "./components/Header";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, isLoading] = useState(true); //we set to false after fetching the images
  const [term, setTerm] = useState("");

  console.log(term);

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=34122038-e3c6edb375c50a0f954e20791&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits); //to get the data (array of objects)
        isLoading(false); //to stop loading because we already got the data
      })
      .catch((err) => console.log(err));
  }, [term]);

  //   useEffect(()=>{
  //       filtered()
  //   },[term])

  //  const filtered = ()=>{
  //   if(term){
  //     const filteredImages = images.filter((image)=> image.user.toLowerCase().startsWith(term.toLowerCase()))
  //     setImages(filteredImages)
  //   }
  //  }

  return (
    <div className=" flex flex-col justify-center items-center relative">
      <Header />

      <ImageSearch searchText={(text) => setTerm(text)} />

      {!loading && images.length === 0 && (
        // <h1 className="text-6xl text-center mx-auto mt-32">NO IMAGES FOUND</h1>
        <img
          width="800"
          className=""
          src="https://static.vecteezy.com/system/resources/previews/007/162/540/original/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element-for-landing-page-infographic-icon-free-vector.jpg"
          alt=""
        />
      )}

      {loading ? (
        // <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
        <img
        width="300" src="https://cdn.pixabay.com/animation/2022/11/04/09/42/09-42-03-510_512.gif"
          alt=""
        />
      ) : (
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 container mx-auto grid-cols-2 px-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} /> //set a unique identifier and pass  the image as props
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}
