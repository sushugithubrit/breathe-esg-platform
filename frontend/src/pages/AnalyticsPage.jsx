import { useState } from "react";

import EmissionChart from "../components/EmissionChart";

function AnalyticsPage() {

  const analyticsData =
    JSON.parse(localStorage.getItem("analyticsData")) || [];

  const [chartData] = useState(analyticsData);

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        ESG Analytics Dashboard
      </h1>

      <EmissionChart data={chartData} />

    </div>
  );
}

export default AnalyticsPage;