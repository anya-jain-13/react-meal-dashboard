import "./Status.css";
export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="status-message error" role="alert">
      <h3>Oops! Something went wrong.</h3>
      <p>{message}</p>

      {onRetry && (
        <button onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}
