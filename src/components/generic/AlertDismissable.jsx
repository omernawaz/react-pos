const AlertDismissable = ({
  alertType,
  alertTitle,
  alertMessage,
  children,
}) => {
  return (
    <div
      className={`alert alert-${alertType} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{alertTitle} </strong> <br />
      {alertMessage}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
      {children && (
        <>
          <hr />
          <div className="mb-0">{children}</div>
        </>
      )}
    </div>
  );
};

export default AlertDismissable;
