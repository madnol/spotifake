import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section class="player">
          <iframe
            src="https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b"
            id="music-player"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
            autoplay="1"
          ></iframe>
        </section>
      </div>
    );
  }
}
