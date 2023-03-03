import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "./Navbar";
import { fetchPhotos } from "./actions";

const UnsplashPhotos = () => {
  const dispatch = useDispatch();
  const { photos, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  const handleScroll = useCallback(() => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight && !loading) {
      dispatch(fetchPhotos(Math.floor(photos.length / 10) + 1));
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className="content" style={{ height: "100%" }}>
          <InfiniteScroll
          dataLength={photos.length}
          next={handleScroll}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
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
          </InfiniteScroll>
        </div>
        <div className="popular">
          <div className="head">
            <h3>Popular Users</h3>
            <h4>View All</h4>
          </div>
          <img
            src="https://images.unsplash.com/photo-1677709678988-aab8a631fd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="none"
            className="popularImg"
          />
          <img
            src="https://images.unsplash.com/photo-1677709678988-aab8a631fd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="none"
            className="popularImg"
          />
          <img
            src="https://images.unsplash.com/photo-1677709678988-aab8a631fd68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="none"
            className="popularImg"
          />
        </div>
      </div>
    </div>
  );
};

export default UnsplashPhotos;
