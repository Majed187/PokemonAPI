import React, { Component } from "react";

class PokemonCard extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div classNames="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                {/* should take the evolution name     */}
                shsoui
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                {/*
                  shuld take the images of evolution  */}
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="" data-dismiss="modal">
                {/* to close the open card  */}
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
