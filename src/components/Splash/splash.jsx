import React from 'react';
import './style.css'

class Splash extends React.Component {
  
  render() {
  
    return (
      <div className="body">
        <div className="loader">
        <span>Loading Map...</span>
      </div>
      </div>
    );
  }
}

export default Splash;