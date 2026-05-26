import { useState } from "react";
import axios from "axios";

function FileUpload() {

  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleUpload = async () => {

    if (!file) {
      setMessage("Please select a file");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/ingestion/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      /* Save analytics dynamically */

      localStorage.setItem(
        "analyticsData",
        JSON.stringify(response.data.analytics)
      );

      /* Save suspicious records dynamically */

      localStorage.setItem(
        "suspiciousRecords",
        JSON.stringify(response.data.suspicious_records)
      );

      setMessage(response.data.message);

    } catch (error) {

      console.error(error);

      setMessage("Upload failed");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div className="bg-white rounded-2xl shadow p-8 mt-8">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold">
            Upload ESG Dataset
          </h2>

          <p className="text-gray-500 mt-1">
            Upload utility, SAP, or travel emissions data
          </p>

        </div>

      </div>

      <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-black transition-all duration-300">

        <input
          type="file"
          id="fileUpload"
          className="hidden"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <label
          htmlFor="fileUpload"
          className="cursor-pointer"
        >

          <div className="flex flex-col items-center">

            <div className="text-5xl mb-4">
              📁
            </div>

            <p className="text-lg font-medium">
              Click to select CSV file
            </p>

            <p className="text-sm text-gray-500 mt-2">
              CSV files supported
            </p>

          </div>

        </label>

      </div>

      {
        file && (

          <div className="mt-4 bg-gray-100 rounded-xl p-4 flex items-center justify-between">

            <div>

              <p className="font-medium">
                {file.name}
              </p>

              <p className="text-sm text-gray-500">
                Ready for upload
              </p>

            </div>

            <div className="text-green-600 font-semibold">
              Selected
            </div>

          </div>
        )
      }

      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-6 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-xl transition-all duration-300 disabled:opacity-50"
      >

        {
          loading
            ? "Uploading..."
            : "Upload Dataset"
        }

      </button>

      {
        message && (

          <div className="mt-4">

            <p className="text-green-600 font-medium">
              {message}
            </p>

          </div>
        )
      }

    </div>
  );
}

export default FileUpload;