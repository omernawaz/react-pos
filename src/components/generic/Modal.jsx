const Modal = ({
  onClose,
  onConfirm,
  buttonType = "primary",
  buttonText = "Save Changes",
  modalTitle = "Are you sure?",
  modalBody = "Are you sure you want to save these changes?",
  modalTriggered,
}) => {
  return (
    <div
      className={`modal ${modalTriggered ? "show" : "hide"}`}
      style={{ display: modalTriggered ? "block" : "none" }}
      tabIndex={-1}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{modalTitle}</h5>
          </div>
          <div className="modal-body">
            <p>{modalBody}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className={"btn btn-" + buttonType}
              onClick={onConfirm}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
