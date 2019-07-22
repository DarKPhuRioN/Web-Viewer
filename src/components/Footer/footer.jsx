import React from 'react';
import './style.css';

export class Footer extends React.Component{
  render(){
    return(
      <footer className="footer-basic-centered">

			<p className="footer-company-motto">Julio A. Vásquez & Jose L. Arcila</p>
			<p className="footer-company-name">Copyright &copy; {(new Date().getFullYear())}  All Rights Reserved</p>

		</footer>
    );
  }
}

export default Footer;