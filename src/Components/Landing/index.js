import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing">
        <div className="titres">
          <h1>Bienvenue à BookList</h1>
          <h2>Votre étagère à livres virtuelle!</h2>
        </div>
        <div className="fonctions">
          <div className="use">
            <img src="./book.png" alt="Book Icon" className="use-icon" />
            <p>
              Tenir compte des livres que vous avez lus ainsi que de ceux que
              vous désirez obtenir.
            </p>
          </div>
          <div className="use">
            <img
              src="./googleBooks.png"
              alt="Google Books Icon"
              className="use-icon"
            />
            <p>Effectuer une recherche directement dans l'API Google Books.</p>
          </div>
          <div className="use">
            <img
              src="./firebase.png"
              alt="Google Firebase Icon"
              className="use-icon"
            />
            <p>
              Stocker vos informations dans une base de données Google Firebase.
            </p>
          </div>
        </div>
        <div className="connexion">
          <p>Cliquez ici pour commencer!</p>
          <Link to={ROUTES.SIGN_IN} className="signIn">
            Se Connecter
          </Link>
        </div>
      </div>
    );
  }
}

export default LandingPage;
