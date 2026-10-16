
import MealCard from "./MealCard";

export default function MealList({ meals }) {
  if (!meals || meals.length === 0) {
    return null;
  }

  return (
    <div className="meal-grid">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
    </div>
  );
}
