import React, { Component } from "react";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <header className="login__header">
          <img
            src="./imgs/Spotify_Logo_RGB_Black.png"
            alt="spotify__logo"
            className="login__logo"
          />
        </header>
        <main className="login__box">
          <div className="login__socials d-flex flex-column my-4 text-center">
            <h6>To continue, log in to Spotify</h6>
            <a href="#" className="btn-login btn-fb my-2">
              <span onclick="authentication()">
                <i className="fab fa-facebook mr-1"></i> Continue with facebook
              </span>
            </a>
            <a href="#" className="btn-login btn-black my-2">
              <span onclick="authentication()">
                <i className="fab fa-apple mr-1"></i>Continue with apple
              </span>
            </a>
            <a href="#" className="btn-login btn-default mt-2 mb-3">
              <span onclick="authentication()">
                <i className="fab fa-google mr-1"></i>Continue with Google
              </span>
            </a>
          </div>
          <div className="d-flex flex-column login__inputs mb-3">
            <span className="d-flex flex-column" onclick="authentication()">
              {" "}
              <a href="#" className="btn-login btn-green" id="loginBtn">
                LOG IN WITH SPOTIFY
              </a>
            </span>
          </div>

          <div className="login__signup text-center d-flex flex-column mt-3">
            <h6>Don't have an account?</h6>
            <button className="btn-login btn-default mt-3" onclick="signup()">
              SIGN UP FOR SPOTIFY
            </button>
          </div>
        </main>
      </div>
    );
  }
}
