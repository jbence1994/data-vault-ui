import React from "react";
import { Link } from "react-router-dom";

const ModalWindow: React.FC<ModalWindowProps> = ({
  title,
  content,
  buttonText,
  routingButtonText = "",
  redirectUrl = "",
  isSuccessModal = true,
  onClick,
}) => {
  return (
    <div
      className="modal-dialog modal-content"
      style={{
        position: "absolute",
        margin: "0",
        float: "left",
        left: "50%",
        top: "50%",
        transform: " translate(-50%, -50%)",
      }}
    >
      <div className="modal-header">
        <h5 className="modal-title">{title}</h5>
      </div>
      <div className="modal-body">
        <p>{content}</p>
      </div>
      <div className="modal-footer">
        {isSuccessModal ? (
          <React.Fragment>
            <button type="button" className="btn btn-primary" onClick={onClick}>
              {buttonText}
            </button>
            <Link
              className="btn btn-secondary"
              data-dismiss="modal"
              to={redirectUrl}
            >
              {routingButtonText}
            </Link>
          </React.Fragment>
        ) : (
          <button type="button" className="btn btn-danger" onClick={onClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default ModalWindow;
