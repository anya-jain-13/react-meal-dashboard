import "./Status.css";
export default function NoResults({ query }) {
  return (
    <div className="status-message">
      <h3>No meals found</h3>
      <p>
        We couldn't find any meals matching "{query}".
        Try another ingredient or recipe name.
      </p>
    </div>
  );
}
