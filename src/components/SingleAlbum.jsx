import React, { Component } from "react";

class SingleAlbum extends Component {
  render() {
    return (
      <div>
        <section className="single-album">
          <div className="row">
            <div className="col-12 col-lg-4 px-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="https://images-na.ssl-images-amazon.com/images/I/71B34LLm%2B9L._SY355_.jpg"
                  alt="Card image cap"
                />
                <div className="card-body d-flex flex-column align-items-center">
                  <h5 className=" card-title">
                    Queen II (Deluxe Edition Remaster)
                  </h5>

                  <h6>Queen</h6>

                  <div className="d-flex flex-column buttons-wrapper align-items-center">
                    <button
                      type="button"
                      className="btn-login btn-green d-inline"
                      style={{ marginRight: "0" }}
                    >
                      Play
                    </button>
                    <h6>1974 - 16 songs</h6>
                    <div className="icons-wrapper">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-8">
              <table className="table table-borderless table-dark table-album">
                <tbody>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                      <i className="far fa-play-circle"></i>
                    </th>
                    <td colspan="2">Procession - Remastered 2011</td>
                    <td>1:13</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">Father To Son - Remastered 2011</td>
                    <td>6:13</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">
                      White Queen(As It Began) - Remastered 2011
                    </td>
                    <td>4:33</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">Some Day One Day - Remastered 2011</td>
                    <td>4:22</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">The Loser In The End Remastered 2011</td>
                    <td>4:01</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">Ogre Battle - Remastered 2011</td>
                    <td>4:08</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">
                      The Fairy Feller's Master Stroke - Remastered 2011
                    </td>
                    <td>2:40</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">Nevermore - Remastered 2011</td>
                    <td>1:18</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">
                      The March Of The Black Queen - Remastered 2011
                    </td>
                    <td>6:32</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">Funny How Love Is - Remastered 2011</td>
                    <td>2:49</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">Seven Seas Of Rhye - Remastered 2011</td>
                    <td>2:48</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">See What A Fool I've Been</td>
                    <td>4:22</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <i className="fa fa-music" aria-hidden="true"></i>
                    </th>
                    <td colspan="2">
                      White Queen(As It Began) - Live At Hammersmith Odean,
                      London, December 1975
                    </td>
                    <td>5:32</td>
                  </tr>
                </tbody>
              </table>
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
export default SingleAlbum;
