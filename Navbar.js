import React from 'react';
/*export const Navbar = () => {
    return (<div>
        <nav className="navbar navbar-light bg-light" />
        <span className="navbar-brand mb-0 h1"><h2>My Todo</h2></span>
    </div>);
};*/

class Navbar extends React.Component {
    state = {  }
    render() { 
        return (
            <div>
        <nav className="navbar navbar-light bg-light" />
        <span className="navbar-brand mb-0 h1"><h2>My Todo</h2></span>
    </div>
          );
    }
}
 
export default Navbar;
