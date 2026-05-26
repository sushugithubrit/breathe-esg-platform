function SuspiciousTable({ records = [] }) {

  return (

    <div className="bg-white rounded-2xl shadow p-6 mt-8">

      <h2 className="text-2xl font-semibold mb-6">
        Suspicious Records
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left border-b">

            <th className="pb-3">ID</th>
            <th className="pb-3">Category</th>
            <th className="pb-3">Value</th>
            <th className="pb-3">Status</th>

          </tr>

        </thead>

        <tbody>

          {records.length > 0 ? (

            records.map((record) => (

              <tr
                key={record.id}
                className="border-b"
              >

                <td className="py-4">
                  {record.id}
                </td>

                <td>
                  {record.category}
                </td>

                <td>
                  {record.value}
                </td>

                <td>

                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">

                    {record.status}

                  </span>

                </td>

              </tr>
            ))

          ) : (

            <tr>

              <td
                colSpan="4"
                className="py-4 text-gray-500"
              >
                No suspicious records found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
}

export default SuspiciousTable;