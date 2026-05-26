import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import UploadPage from "./pages/UploadPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import SuspiciousPage from "./pages/SuspiciousPage";


function App() {

  return (

    <BrowserRouter>

      <div className="min-h-screen flex bg-gray-100">

        {/* SIDEBAR */}

        <div className="w-72 bg-black text-white p-8">

          <h1 className="text-3xl font-bold mb-12">
            Breathe ESG
          </h1>

          <div className="space-y-4">

            <Link
              to="/"
              className="block bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-all"
            >
              Dashboard
            </Link>

            <Link
              to="/upload"
              className="block bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-all"
            >
              Upload Center
            </Link>

            <Link
              to="/analytics"
              className="block bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-all"
            >
              Analytics
            </Link>

            <Link
              to="/suspicious"
              className="block bg-white/10 hover:bg-white/20 rounded-xl px-4 py-3 transition-all"
            >
              Suspicious Records
            </Link>

          </div>

        </div>


        {/* PAGE CONTENT */}

        <div className="flex-1 p-10">

          <Routes>

            <Route
              path="/"
              element={<DashboardPage />}
            />

            <Route
              path="/upload"
              element={<UploadPage />}
            />

            <Route
              path="/analytics"
              element={<AnalyticsPage />}
            />

            <Route
              path="/suspicious"
              element={<SuspiciousPage />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;