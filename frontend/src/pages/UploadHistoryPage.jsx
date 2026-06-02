function UploadHistoryPage() {

  const uploadHistory =
    JSON.parse(localStorage.getItem("uploadHistory")) || [];

  return (

    <div className="p-6">

      <h1 className="text-4xl font-bold mb-6">
        Upload History
      </h1>

      <div className="bg-white rounded-2xl shadow p-6 overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">
                File Name
              </th>

              <th className="text-left py-3">
                Upload Time
              </th>

            </tr>

          </thead>

          <tbody>

            {
              uploadHistory.length > 0 ? (

                uploadHistory.map((item, index) => (

                  <tr
                    key={index}
                    className="border-b"
                  >

                    <td className="py-4">
                      {item.fileName}
                    </td>

                    <td className="py-4">
                      {item.uploadTime}
                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="2"
                    className="text-center py-6 text-gray-500"
                  >

                    No uploads found

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

export default UploadHistoryPage;