function SuspiciousPage() {

  const suspiciousRecords =
    JSON.parse(localStorage.getItem("suspiciousRecords")) || [];

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Suspicious Records
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

            </tr>

          </thead>

          <tbody>

            {
              suspiciousRecords.length > 0 ? (

                suspiciousRecords.map((item, index) => (

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

                    <td className="py-4 text-red-600 font-semibold">
                      {item.status}
                    </td>

                  </tr>
                ))

              ) : (

                <tr>

                  <td
                    colSpan="4"
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