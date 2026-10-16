import "./Status.css";
export default function Loading() {
  return (
    <div className="status-message" role="status">
      <div className="spinner" aria-hidden="true"></div>
      <p>Finding delicious meals...</p>
    </div>
  );
}
