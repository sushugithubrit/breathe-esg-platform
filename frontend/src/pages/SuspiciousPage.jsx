import { useState } from "react";

function SuspiciousPage() {

  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem("suspiciousRecords")) || []
  );

  const approveRecord = (index) => {

    const updated = [...records];

    updated[index].status = "APPROVED";

    setRecords(updated);

    localStorage.setItem(
      "suspiciousRecords",
      JSON.stringify(updated)
    );
  };

  const flagRecord = (index) => {

    const updated = [...records];

    updated[index].status = "FLAGGED";

    setRecords(updated);

    localStorage.setItem(
      "suspiciousRecords",
      JSON.stringify(updated)
    );
  };

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Review & Approve Records
      </h1>

      <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                ID
              </th>

              <th className="text-left py-3">
                Category
              </th>

              <th className="text-left py-3">
                Value
              </th>

              <th className="text-left py-3">
                Status
              </th>

              <th className="text-left py-3">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {
              records.length > 0 ? (

                records.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="py-4">
                      {index + 1}
                    </td>

                    <td className="py-4">
                      {item.label}
                    </td>

                    <td className="py-4">
                      {item.value}
                    </td>

                    <td className="py-4">

                      <span
                        className={
                          item.status === "APPROVED"
                            ? "text-green-600 font-semibold"
                            : item.status === "FLAGGED"
                            ? "text-red-600 font-semibold"
                            : "text-yellow-600 font-semibold"
                        }
                      >
                        {item.status}
                      </span>

                    </td>

                    <td className="py-4 flex gap-2">

                      <button
                        onClick={() => approveRecord(index)}
                        className="bg-green-600 text-white px-3 py-1 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => flagRecord(index)}
                        className="bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Flag
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="5"
                    className="text-center py-6 text-gray-500"
                  >

                    No suspicious records found

                  </td>

                </tr>

              )
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default SuspiciousPage;