
export default function MealCard({ meal }) {
  return (
    <div className="meal-card">
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="meal-image"
      />

      <div className="meal-info">
        <h3>{meal.strMeal}</h3>

        <p>
          Category: {meal.strCategory || "Not specified"}
        </p>

        <p>
          Cuisine: {meal.strArea || "Not specified"}
        </p>

        {meal.strSource && (
          <a
            href={meal.strSource}
            target="_blank"
            rel="noreferrer"
          >
            View Recipe
          </a>
        )}
      </div>
    </div>
  );
}
