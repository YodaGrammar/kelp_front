import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import "../style/footer.css";

class FooterBar extends Component {
  render() {
    return (
      <footer className="footer">
            <div className="text-center">© 2018 Copyright:<NavLink to="/about"> yodaGrammar.com</NavLink></div>
      </footer>
    );
  }
}

export default FooterBar;
