import {
  TrendingUp,
  AlertTriangle,
  Database,
  ShieldCheck,
  Activity,
  Globe,
} from "lucide-react";

function DashboardPage() {

  const analyticsData =
    JSON.parse(localStorage.getItem("analyticsData")) || [];

  const suspiciousRecords =
    JSON.parse(localStorage.getItem("suspiciousRecords")) || [];

  /* Dynamic calculations */

  const totalValue = analyticsData.reduce(
    (total, item) => total + item.value,
    0
  );

  const totalRecords = analyticsData.length;

  return (

    <div>

      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">

        <div>

          <h1 className="text-5xl font-bold">
            ESG Intelligence Hub
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Real-time sustainability ingestion and monitoring platform
          </p>

        </div>

        <div className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg">

          ESG Score: 87%

        </div>

      </div>

      {/* TOP METRICS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {/* CARD 1 */}

        <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-3xl p-6 shadow-xl">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-300">
                Total Value
              </p>

              <h2 className="text-4xl font-bold mt-4">
                {totalValue}
              </h2>

            </div>

            <Database className="w-10 h-10" />

          </div>

        </div>

        {/* CARD 2 */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                ESG Compliance
              </p>

              <h2 className="text-4xl font-bold mt-4 text-green-600">
                92%
              </h2>

            </div>

            <ShieldCheck className="w-10 h-10 text-green-600" />

          </div>

        </div>

        {/* CARD 3 */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                Suspicious Records
              </p>

              <h2 className="text-4xl font-bold mt-4 text-red-500">
                {suspiciousRecords.length}
              </h2>

            </div>

            <AlertTriangle className="w-10 h-10 text-red-500" />

          </div>

        </div>

        {/* CARD 4 */}

        <div className="bg-white rounded-3xl p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500">
                Uploaded Records
              </p>

              <h2 className="text-4xl font-bold mt-4 text-blue-600">
                {totalRecords}
              </h2>

            </div>

            <Activity className="w-10 h-10 text-blue-600" />

          </div>

        </div>

      </div>

      {/* INSIGHTS SECTION */}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-10">

        {/* MAIN INSIGHT */}

        <div className="xl:col-span-2 bg-white rounded-3xl p-8 shadow-sm">

          <div className="flex items-center justify-between mb-8">

            <div>

              <h2 className="text-3xl font-bold">
                Sustainability Insights
              </h2>

              <p className="text-gray-500 mt-2">
                AI-powered ESG anomaly monitoring
              </p>

            </div>

            <TrendingUp className="w-10 h-10 text-green-600" />

          </div>

          <div className="space-y-6">

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="text-xl font-semibold">
                Uploaded Data Analysis
              </h3>

              <p className="text-gray-600 mt-2">
                {totalRecords} records processed successfully.
              </p>

            </div>

            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">

              <h3 className="text-xl font-semibold text-red-600">
                Suspicious Records Detected
              </h3>

              <p className="text-gray-600 mt-2">
                {suspiciousRecords.length} suspicious records found.
              </p>

            </div>

          </div>

        </div>

        {/* SIDE PANEL */}

        <div className="bg-black text-white rounded-3xl p-8 shadow-xl">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-2xl font-bold">
              Global ESG Status
            </h2>

            <Globe className="w-8 h-8" />

          </div>

          <div className="space-y-6">

            <div>

              <p className="text-gray-400">
                Carbon Neutrality
              </p>

              <div className="w-full bg-gray-700 rounded-full h-3 mt-3">

                <div className="bg-green-500 h-3 rounded-full w-[78%]"></div>

              </div>

            </div>

            <div>

              <p className="text-gray-400">
                Renewable Energy Usage
              </p>

              <div className="w-full bg-gray-700 rounded-full h-3 mt-3">

                <div className="bg-blue-500 h-3 rounded-full w-[65%]"></div>

              </div>

            </div>

            <div>

              <p className="text-gray-400">
                Audit Completion
              </p>

              <div className="w-full bg-gray-700 rounded-full h-3 mt-3">

                <div className="bg-yellow-400 h-3 rounded-full w-[88%]"></div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DashboardPage;