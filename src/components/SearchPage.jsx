import React, { Component } from "react";

class SearchPage extends Component {
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
        <section className="playlist">
          <div className="row">
            <div className="col-12">
              <div className="playlist__jumbotron jumbotron jumbotron-fluid">
                <div className="jumbo__overlay"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-12 text-center jumbo-content">
                      <h2 className="text-white">Search Results</h2>
                      <h6 className="display-4 search-results-number"></h6>
                      <div className="d-flex flex-column buttons-links-wrapper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container-fluid my-auto ">
          <h5
            className="text-left my-3 text-white"
            style={{ fontWeight: "bold" }}
          >
            Results by artists
          </h5>
          <div className="row search__container"></div>
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

export default SearchPage;
