import React, { Component } from "react";

export default class Playlist extends Component {
  render() {
    return (
      <div>
        <section class="playlist">
          <div class="row">
            <div class="col-12">
              <div class="playlist__jumbotron jumbotron jumbotron-fluid">
                <div class="jumbo__overlay"></div>

                <div class="container">
                  <div class="row">
                    <div class="col-12 text-center jumbo-content">
                      <h6>Playlist Name</h6>
                      <h1 class="display-4 playlistTitle"></h1>
                      <div class="d-flex flex-column buttons-links-wrapper">
                        <div class="d-flex justify-content-center buttons-wrapper align-items-center">
                          <button type="button" class="btn-login btn-green ">
                            Play
                          </button>
                          <button
                            type="button"
                            class="btn-login btn-dark-trasparent"
                          >
                            Follow
                          </button>
                          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="navBar col-12 d-flex justify-content-center jumbo-links">
            <a href="#" class="navBar__link active">
              Overview
            </a>
            <a href="#" class="navBar__link">
              Related Artists
            </a>
            <a href="#" class="navBar__link">
              About
            </a>
          </div>
        </section>

        <div
          class="modal fade"
          id="createPlaylistModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="createPlaylistModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h5 class="modal-title" id="createPlaylistModalLabel">
                  Create Playlist
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i class="far fa-times-circle text-white"></i>
                  </span>
                </button>
              </div>
              <div class="modal-body">
                <div class="input-group mb-3">
                  <input
                    id="playlistName"
                    type="text"
                    class="form-control"
                    placeholder="Playlist Name"
                    value=""
                    aria-label="Playlist Name"
                    aria-describedby="playslist-name"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  id="createPlaylistBtn"
                  class="btn-login btn-green btn-modals"
                  data-dismiss="modal"
                >
                  Create Playlist
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade"
          id="searchModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="searchModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header text-center">
                <h5 class="modal-title" id="searchModalLabel">
                  Search
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i class="far fa-times-circle text-white"></i>
                  </span>
                </button>
              </div>
              <div class="modal-body">
                <div class="input-group mb-3">
                  <input
                    id="searchValue"
                    type="text"
                    class="form-control"
                    placeholder="Search Artist"
                    value=""
                    aria-label="Playlist Name"
                    aria-describedby="playslist-name"
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  id="searchBtn"
                  class="btn-login btn-green btn-modals"
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
