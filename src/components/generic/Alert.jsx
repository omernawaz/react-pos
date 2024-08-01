const Alert = ({ alertType, alertTitle, alertMessage }) => {
  return (
    <div
      className={`alert alert-${alertType} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{alertTitle}</strong> {alertMessage}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
