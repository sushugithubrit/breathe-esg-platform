import {
  Database,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Globe,
} from "lucide-react";

function DashboardPage() {
  const analyticsData =
    JSON.parse(localStorage.getItem("analyticsData")) || [];

  const suspiciousRecords =
    JSON.parse(localStorage.getItem("suspiciousRecords")) || [];

  const totalValue = analyticsData.reduce(
    (total, item) => total + Number(item.value || 0),
    0
  );

  const totalRecords = analyticsData.length;

  const approvedRecords = suspiciousRecords.filter(
    (item) => item.status === "APPROVED"
  ).length;

  const flaggedRecords = suspiciousRecords.filter(
    (item) => item.status === "FLAGGED"
  ).length;

  const pendingRecords = suspiciousRecords.filter(
    (item) =>
      item.status !== "APPROVED" &&
      item.status !== "FLAGGED"
  ).length;

  const esgScore =
    totalRecords > 0
      ? Math.max(50, 100 - suspiciousRecords.length * 2)
      : 0;

  const complianceScore =
    totalRecords > 0
      ? Math.max(50, 100 - flaggedRecords * 3)
      : 0;

  return (
    <div>
      {/* HEADER */}

      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-5xl font-bold">
            ESG Intelligence Hub
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Enterprise Sustainability Monitoring Platform
          </p>
        </div>

        <div className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg">
          ESG Score: {esgScore}%
        </div>
      </div>

      {/* TOP CARDS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Total Records
              </p>

              <h2 className="text-4xl font-bold mt-4 text-blue-600">
                {totalRecords}
              </h2>
            </div>

            <Database className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Approved Records
              </p>

              <h2 className="text-4xl font-bold mt-4 text-green-600">
                {approvedRecords}
              </h2>
            </div>

            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Flagged Records
              </p>

              <h2 className="text-4xl font-bold mt-4 text-red-600">
                {flaggedRecords}
              </h2>
            </div>

            <AlertTriangle className="w-10 h-10 text-red-600" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Pending Reviews
              </p>

              <h2 className="text-4xl font-bold mt-4 text-yellow-500">
                {pendingRecords}
              </h2>
            </div>

            <Clock className="w-10 h-10 text-yellow-500" />
          </div>
        </div>
      </div>

      {/* SECOND ROW */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        <div className="bg-gradient-to-r from-black to-gray-800 text-white rounded-3xl p-8 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-300">
                Total ESG Value
              </p>

              <h2 className="text-5xl font-bold mt-4">
                {totalValue}
              </h2>
            </div>

            <TrendingUp className="w-12 h-12" />
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">
                Compliance Score
              </p>

              <h2 className="text-5xl font-bold mt-4 text-green-600">
                {complianceScore}%
              </h2>
            </div>

            <ShieldCheck className="w-12 h-12 text-green-600" />
          </div>
        </div>

      </div>

      {/* REVIEW STATUS */}

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        <div className="bg-white rounded-3xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold mb-6">
            Review Progress
          </h2>

          <div className="space-y-5">

            <div>
              <p className="font-medium">
                Approved Records
              </p>

              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{
                    width: `${
                      totalRecords > 0
                        ? (approvedRecords / totalRecords) * 100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>

            <div>
              <p className="font-medium">
                Flagged Records
              </p>

              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="bg-red-500 h-4 rounded-full"
                  style={{
                    width: `${
                      totalRecords > 0
                        ? (flaggedRecords / totalRecords) * 100
                        : 0
                    }%`,
                  }}
                ></div>
              </div>
            </div>

          </div>
        </div>

        <div className="bg-black text-white rounded-3xl p-8 shadow-xl">

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">
              Global ESG Status
            </h2>

            <Globe className="w-10 h-10" />
          </div>

          <div className="space-y-6">

            <div>
              <p className="text-gray-400">
                ESG Score
              </p>

              <h3 className="text-4xl font-bold mt-2">
                {esgScore}%
              </h3>
            </div>

            <div>
              <p className="text-gray-400">
                Compliance
              </p>

              <h3 className="text-4xl font-bold mt-2">
                {complianceScore}%
              </h3>
            </div>

            <div>
              <p className="text-gray-400">
                Suspicious Records
              </p>

              <h3 className="text-4xl font-bold mt-2 text-red-400">
                {suspiciousRecords.length}
              </h3>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default DashboardPage;