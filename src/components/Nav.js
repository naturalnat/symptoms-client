import React from "react";

class Nav extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <a href="/">Home</a>
                <a href="/About">About</a>
              </ul>
            </div>
        );
    }
}

export default Nav; 
