import React from 'react';
import './style.css';

export class Header extends React.Component{

  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    const {titleOne, titleTwo } = this.props;
    return(
      <header className="header-user-dropdown">
        <div className="header-limiter">
          <h1>
            <a href="/">
              {titleOne} 
              <span>{titleTwo}</span>
            </a>
          </h1>
          <nav>
  
            <a href="/" target="_self">
              Actual 
              <span className="header-new-feature">
                Ver
              </span>
            </a>
            <a href="/" target="_self">
              Correcta 
              <span className="header-new-feature">
                Ver
              </span>
            </a>
            <a href="/" target="_self">
              IGAC 
              <span className="header-new-feature">
                Ver
              </span>
            </a>
          </nav>
          <div className="header-user-menu">
            <img src="https://image.flaticon.com/icons/svg/37/37819.svg" alt="More Info"/>
            <ul>
              <li>
                <a href="https://github.com/DarKPhuRioN/Web-Viewer"  target="_blank">
                  Front-End
                </a>
              </li>
              <li>
                <a href="https://github.com/DarKPhuRioN/Web-View-Backend" target="_blank">
                  Back-End
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;