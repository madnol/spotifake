import React, { Component } from "react";

export default class Albums extends Component {
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

        <section>
          <div className="row">
            <div className="col-12">
              <div className="jumbotron jumbotron-fluid">
                <div className="jumbo__overlay"></div>

                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center jumbo-content">
                      <h6>33,000,575 monthly listeners</h6>
                      <h1 className="display-4">Queen</h1>
                      <div className="d-flex flex-column buttons-links-wrapper">
                        <div className="d-flex justify-content-center buttons-wrapper align-items-center">
                          <button
                            type="button"
                            className="btn-login btn-green "
                          >
                            Play
                          </button>
                          <button
                            type="button"
                            className="btn-login btn-dark-trasparent"
                          >
                            Follow
                          </button>
                          <i
                            className="fa fa-ellipsis-h"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="navBar col-12 d-flex justify-content-center jumbo-links">
            <a href="#" className="navBar__link active">
              Overview
            </a>
            <a href="#" className="navBar__link">
              Related Artists
            </a>
            <a href="#" className="navBar__link">
              About
            </a>
          </div>
        </section>
        <section className=" my-auto">
          <h3 className="text-left my-3">Albums</h3>

          <div className="row">
            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2 text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://images.genius.com/9db962b1fc7c774a05b8e593bd595ba6.1000x1000x1.jpg"
                      className="card-img-top d-flex"
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
                    Bohemian Rhapsody (The Original Soundtrack)
                  </h5>
                  <h6 className="card-title">Queen</h6>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2 text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/71V74NRrgPL._AC_SL1200_.jpg"
                      className="card-img-top d-flex"
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
                    Bohemian Rhapsody (The Original Soundtrack)
                  </h5>
                  <h6 className="card-title">Queen</h6>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://m.media-amazon.com/images/I/71P0x5gbkSL._SS500_.jpg"
                      className="card-img-top d-flex"
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
                    Bohemian Rhapsody (The Original Soundtrack)
                  </h5>
                  <h6 className="card-title">Queen</h6>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/51UtWpxbNYL._AC_SL1500_.jpghttps://images-na.ssl-images-amazon.com/images/I/91sLchfSmpL._AC_SL1500_.jpg"
                      className="card-img-top d-flex"
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
                    Bohemian Rhapsody (The Original Soundtrack)
                  </h5>
                  <h6 className="card-title">Queen</h6>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/81IdGCZz2KL._AC_SL1500_.jpg"
                      className="card-img-top d-flex"
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
                    Queen <br />
                    Greatest Hits
                  </h5>
                  <h6 className="card-title">Two lp Set</h6>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/91A1%2BqyzqBL._AC_SL1500_.jpg"
                      className="card-img-top d-flex"
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
                    Live Around The World <br />
                    Deluxe
                  </h5>
                  <h6 className="card-title">2020</h6>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <a href="single-album.html?1">
                {" "}
                <div className="card card-spotify">
                  <div className="img-albums">
                    <div className="imgAlbum">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/I/71B34LLm%2B9L._AC_SL1400_.jpg"
                        className="card-img-top d-flex"
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
                      Queen II <br />
                      (2011 Remaster)
                    </h5>
                    <h6 className="card-title">1974</h6>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <a href="single-album.html?0">
                {" "}
                <div className="card card-spotify">
                  <div className="img-albums">
                    <div className="imgAlbum">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/I/813RMq4iTFL._AC_SL1400_.jpg"
                        className="card-img-top d-flex"
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
                      Queen (deluxe Edition 2011 Remaster)
                    </h5>
                    <h6 className="card-title">1973</h6>
                  </div>
                </div>
              </a>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://m.media-amazon.com/images/I/61zWioxHfwL._SS500_.jpg"
                      className="card-img-top d-flex"
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
                    Made in Heaven (Deluxe Edition 2011 Remaster)
                  </h5>
                  <h6 className="card-title">1995</h6>
                </div>
              </div>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <a href="single-album.html?2">
                {" "}
                <div className="card card-spotify">
                  <div className="img-albums">
                    <div className="imgAlbum">
                      <img
                        src="https://images-na.ssl-images-amazon.com/images/I/71V5KksYYYL._AC_SL1400_.jpg"
                        className="card-img-top d-flex"
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
              </a>
            </div>

            <div
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/819A1bn-xyL._AC_SL1400_.jpg"
                      className="card-img-top d-flex"
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
              className="col-6 col-md-4 col-lg-3 col-xl-2  text-center d-flex"
              style={{ marginBottom: "2rem" }}
            >
              <div className="card card-spotify">
                <div className="img-albums">
                  <div className="imgAlbum">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/3/3c/Queen_Hot_Space.png"
                      className="card-img-top d-flex"
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
