
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MealChart({ meals }) {
  const categoryCounts = (meals || []).reduce((counts, meal) => {
    const category = meal.strCategory || "Other";
    counts[category] = (counts[category] || 0) + 1;
    return counts;
  }, {});

  const data = Object.entries(categoryCounts).map(
    ([category, count]) => ({
      category,
      count,
    })
  );

  if (data.length === 0) {
    return <p>No chart data available yet.</p>;
  }

  return (
    <div className="meal-chart">
      <h2>Meals by Category</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#16a34a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
