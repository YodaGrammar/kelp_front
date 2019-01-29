import React, { Component } from 'react';

class DashboardTemplate extends Component {

  render() {
      return (
        <div className="dashboard mt-3">
          <h1> Dashboard </h1>
          <div className="row">
            <div className="col-sm-6">
                <div className="card border-warning text-dark">
                    <div className="card-header alert-warning text-center">
                        <h4>
                            Aliments à manger sinon périmé
                        </h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title ">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button type="button" className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card border-success text-dark">
                    <div className="card-header alert-success text-center">
                        <h4>
                            Recette pour aider
                        </h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <button type="button" className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
    }

}

export default DashboardTemplate;
