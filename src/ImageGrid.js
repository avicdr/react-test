import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "./Navbar";

const ACCESS_KEY = "xNGsggNybLuR65vRzC2yZisMvAqIq-lZiOWKJgsoTE4";

const ImageGrid = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = () => {
    axios
      .get(
        `https://api.unsplash.com/photos?page=${page}&per_page=10&client_id=${ACCESS_KEY}`
      )
      .then((response) => {
        setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
        setPage(page + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleScroll = () => {
    fetchPhotos();
  };

  return (
    <>
      <Navbar />
      <InfiniteScroll
        dataLength={photos.length}
        next={handleScroll}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div class="container">
          <div class="img-grid">
            {photos.map((photo, key) => (
              <img
                src={photo.urls.small}
                key={key}
                alt={photo.alt_description}
                className="image"
              />
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default ImageGrid;
