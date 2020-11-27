import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="navArrows">
          <a href="#">
            <i className="fas fa-chevron-left" onclick="previous()"></i>
          </a>
          <a href="#">
            <i className="fas fa-chevron-right" onclick="forward()"></i>
          </a>
        </div>

        <div className="d-none bedge" id="bedge">
          Album added to your favorite
        </div>

        <div className="navBar__hamburger d-flex justify-content-end d-md-none mt-4">
          <i className="fas fa-bars"></i>
        </div>
        <div
          className="index__navBar navBar col-12 d-none d-md-flex justify-content-center"
          id="indexNavbar"
        >
          <a href="#" className="navBar__link active">
            Trending
          </a>
          <a href="#" className="navBar__link">
            Podcast
          </a>
          <a href="albums.html" className="navBar__link">
            Queens
          </a>
          <a href="#" className="navBar__link">
            New releases
          </a>
          <a href="#" className="navBar__link">
            Discover
          </a>
        </div>
        <section className="index__cards container-fluid no-background">
          <h3 className="text-left my-3" style={{ fontWeight: "bold" }}>
            Recently Played
          </h3>

          <div className="row " id="top-artists"></div>
          <h3 className="text-left my-3" style={{ fontWeight: "bold" }}>
            classNameifiche
          </h3>

          <div className="row">
            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center "
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_large.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="play_container">
                      <i className="far fa-play-circle playFav"></i>
                    </div>
                    <div className="hearth_container">
                      <i className="far fa-heart hearthFav"></i>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Sheer Heart Attack <br />
                    (2011 Remaster)
                  </h5>
                  <h6 className="card-title">1974</h6>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center "
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_it_default.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="play_container">
                      <i className="far fa-play-circle playFav"></i>
                    </div>
                    <div className="hearth_container">
                      <i className="far fa-heart hearthFav"></i>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Made in Heaven
                    <br /> (Deluxe Edition 2011 Remaster)
                  </h5>
                  <h6 className="card-title">1995</h6>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center "
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://m.media-amazon.com/images/I/61zWioxHfwL._SS500_.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="play_container">
                      <i
                        className="far fa-play-circle playFav"
                        code="3BHe7LbW5yRjyqXNJ3A6mW"
                      ></i>
                    </div>
                    <div className="hearth_container">
                      <i className="far fa-heart hearthFav"></i>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Made in Heaven
                    <br /> (Deluxe Edition 2011 Remaster)
                  </h5>
                  <h6 className="card-title">1995</h6>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center "
              style={{ marginBottom: " 2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/71V5KksYYYL._AC_SL1400_.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="play_container">
                      <i className="far fa-play-circle playFav"></i>
                    </div>
                    <div className="hearth_container">
                      <i className="far fa-heart hearthFav"></i>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Sheer Heart Attack <br />
                    (2011 Remaster)
                  </h5>
                  <h6 className="card-title">1974</h6>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/819A1bn-xyL._AC_SL1400_.jpg"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="play_container">
                      <i className="far fa-play-circle playFav"></i>
                    </div>
                    <div className="hearth_container">
                      <i className="far fa-heart hearthFav"></i>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    News Of The World <br />
                    (2011 Remaster)
                  </h5>
                  <h6 className="card-title">1977</h6>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center "
              style={{ marginBottom: " 2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/3/3c/Queen_Hot_Space.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="play_container">
                      <i className="far fa-play-circle playFav"></i>
                    </div>
                    <div className="hearth_container">
                      <i className="far fa-heart hearthFav"></i>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    Hot space <br />
                    (2011 Remaster)
                  </h5>
                  <h6 className="card-title">1982</h6>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          className="modal fade"
          id="createPlaylistModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="createPlaylistModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h5 className="modal-title" id="createPlaylistModalLabel">
                  Create Playlist
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="far fa-times-circle text-white"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                    id="playlistName"
                    type="text"
                    className="form-control"
                    placeholder="Playlist Name"
                    value=""
                    aria-label="Playlist Name"
                    aria-describedby="playslist-name"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="createPlaylistBtn"
                  className="btn-login btn-green btn-modals"
                  data-dismiss="modal"
                >
                  Create Playlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="searchModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="searchModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h5 className="modal-title" id="searchModalLabel">
                  Search
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="far fa-times-circle text-white"></i>
                  </span>
                </button>
              </div>
              <div className="modal-body">
                <div className="input-group mb-3">
                  <input
                    id="searchValue"
                    type="text"
                    className="form-control"
                    placeholder="Search Artist"
                    value=""
                    aria-label="Playlist Name"
                    aria-describedby="playslist-name"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  id="searchBtn"
                  className="btn-login btn-green btn-modals"
                  data-dismiss="modal"
                >
                  search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
