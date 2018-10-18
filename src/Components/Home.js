import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-3">
      <main role="main">

          <div className="jumbotron">
              <div className="container">
                  <h1 className="display-3">Bienvenue sur Kelp!</h1>
                  <p>La plateforme qui va vous aidé a mieux gérer votre cuisine.</p>
                  <p>Venez nous découvrir.</p>
                  <p>
                    <NavLink className="btn btn-primary btn-lg" to="/register">Register <FontAwesomeIcon icon="play" /></NavLink>
                    <NavLink className="btn btn-primary btn-lg float-right" to="/login"><FontAwesomeIcon icon="play" /> Login</NavLink>
                  </p>
              </div>
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <h2>Gérer vos espace de stockage</h2>
                      <p>Vous pourrez gérer aussi bien vos frigos, vos placard, vos congélateur. </p>
                  </div>
                  <div className="col-md-6">
                      <h2>Aide au déjeuner ou au diner</h2>
                      <p>Kelp vous aide a trouvé des idées avec ce que contient vos espace de stockage </p>
                  </div>
              </div>
          </div>
      </main>
    </div>
  );
};

export default Home;
