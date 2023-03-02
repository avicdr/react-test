import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "./Navbar";

const ACCESS_KEY = "xNGsggNybLuR65vRzC2yZisMvAqIq-lZiOWKJgsoTE4";
const PER_PAGE = 10;

const UnsplashPhotos = () => {
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
    <div>
      <Navbar />
      <InfiniteScroll
        dataLength={photos.length}
        next={handleScroll}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="content">
          {photos.map((photo, key) => (
            <div className="instagram-card" key={key}>
              <div className="instagram-card-header">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACNCAMAAAC9gAmXAAAAMFBMVEXk5ueutLeyuLvp6+yrsbTh4+TS1dfKztCnrrHY29zb3t/P0tS1u76/w8bBxsjHy81ElUJxAAADL0lEQVR4nO2a227DIAxAy7VAgPz/347Srk2XLmAnJn3wkSatb0fGXGL7cmEYhmEYhmEYhmEYpok6W+CJCXaaJuuNOVlEGZujcLriRJytOi9KPhUJsaD8yuEUFeXju8pDSGQzPD7KRLdWufu4eXQGTeJDXJ4+cexy5Q2X6mPHrZaJDZmik4fptGWKznWQTo+MEC6PcFGpS6ZEZxogc+2UKTr0Oyt0ywghyc+d2C9DvrHUDAhNyWTitQLJCJFIZVpn8F+0J5QxEiYjRKTLHDUBQ1OgyxwFDo3QM5lNAMuUpSKz6T+GX9Bt8t4bagndXQ53KSQiG/PfS3gTqsSxKBuiqxPwlniD5jhW0GvhjrY0NgkVGrbZsKF5Hn9ZbPJX2cBeoU+IHlyI101BEl2b/pvO4i+7p0DfUr/QfVNhrgZHs6UKFvPaopK5GLgM4fddd7FkERrCsomHLxWdDHxX6ZmySgHOY9IKDvBrk/BLswLMHOK6KGhbET0mlvSvlR5Qo+0vDdAVBF70F3HGtD6mvpdFGFPa7/roJK34vdOMjpaDIlPxcjM8Oo3t3pm0ER53HepyqU3Wzz66BOaMNrSV66avFnFc+v71ycIthLST88jsXROuKUZZiDFNZ88ulARSF3Oj/HNqWFQVCd5bW/68DyGYs5SCfazRbRvVeYq6Xmm2Q1vzSgU7p9tkyT873OmYJz8kSMbnWzS2TuKqVL6kLG1SK+WTdN2PPyfTRDe15GcNrVJolyyJkI/N9fnoo+Pxx5CVqOLNXUhcD7257PYDou0jDxsQUgHTl1r5HDORYzJ+jd584v4L9TYrdohMTZ+9NvMxgXn47AuP2Zm9a/DfwsofrCJ2NF0xkwEdOrhCII0MslaA7WJ26CB60kSRqTrQ6ChMoRqgA4sOZFYMowPbWfDRFqAO5O18wDXZANC1Ik2aO4CNRe4iANUm3IQClM4aJabvg6BvIBrR9kHSExrMqBiKrtYV2f20oidzqA++Fx3jbuHIp+c27VYadlgCRXupMB14NK2lgk/J7qDZv0J0dXfYtBJnwIW5oHV1jrmjfpHbNirLoTS3+FAaMgzDMAzzTfwA+XMmLtWzWB4AAAAASUVORK5CYII="
                  className="instagram-card-user-image"
                />
                <div className="dateTime">
                  <a
                    className="instagram-card-user-name"
                    href="https://www.instagram.com/followmeto/"
                  >
                    followmeto
                  </a>
                  <div className="instagram-card-time">58 min</div>
                </div>
                <div className="follow">follow</div>
              </div>

              <div className="instagram-card-image">
                <img
                  src={photo.urls.small}
                  height="600px"
                  alt={photo.alt_description}
                />
              </div>

              <div className="instagram-card-content">
                <p className="likes">likes</p>
                <p>
                  <a
                    className="instagram-card-content-user"
                    href="https://www.instagram.com/followmeto/"
                  >
                    followme
                  </a>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Beatae, placeat iste. Corrupti inventore obcaecati voluptatum
                  quidem nemo? Harum, nesciunt dolor!
                  <a
                    className="hashtag"
                    href="https://www.instagram.com/explore/tags/visitkemi/"
                  >
                    #visitkemi
                  </a>
                </p>
                <p className="comments">View All Comments</p>
              </div>

              <div className="instagram-card-footer">
                <a className="footer-action-icons" href="#">
                  <i className="fa fa-heart-o"></i>
                </a>
                <input
                  className="comments-input"
                  type="text"
                  placeholder="Add A Comment"
                />
                <a className="footer-action-icons" href="#">
                  <i className="fa fa-ellipsis-h"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default UnsplashPhotos;
