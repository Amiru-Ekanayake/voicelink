export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-5 md:grid-cols-5 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
          <div className={`text-3xl font-bold mb-1 text-${stat.color}-600`}>{stat.value}</div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}