const Alert = ({ alertType, alertTitle, alertMessage, children }) => {
  return (
    <div
      className={`alert alert-${alertType} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{alertTitle}</strong>
      <br />
      {alertMessage.map((message, index) => (
        <p key={index}>
          {message}
          <br />
        </p>
      ))}
      {children && (
        <>
          <hr />
          <div className="mb-0">{children}</div>
        </>
      )}
    </div>
  );
};

export default Alert;
