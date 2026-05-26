import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function EmissionChart({ data }) {

  if (!data || data.length === 0) {

    return (

      <div className="bg-white rounded-2xl shadow p-6 mt-8">

        <h2 className="text-2xl font-semibold mb-6">
          Emissions Overview
        </h2>

        <p className="text-gray-500">
          No chart data available
        </p>

      </div>
    );
  }

  return (

    <div className="bg-white rounded-2xl shadow p-6 mt-8 w-full min-w-0">

      <h2 className="text-2xl font-semibold mb-6">
        Emissions Overview
      </h2>

      <div
        style={{
          width: "100%",
          height: "500px",
          minWidth: "300px",
        }}
      >

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <XAxis dataKey="label" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="value" />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default EmissionChart;