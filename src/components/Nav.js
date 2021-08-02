import React from "react";

class Nav extends React.Component {
  render() {
    return (
      <div style={{ marginBottom: " 20px" }}>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            Symptoms Tracker
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link" href="/">
                Home
              </a>
              <a class="nav-item nav-link" href="/About">
                About
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
