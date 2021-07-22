import React from "react";

class Nav extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
              </ul>
            </div>
        );
    }
}

export default Nav; 