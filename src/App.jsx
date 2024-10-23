import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import CoreLayout from "./Components/CoreLayout";
import AdminRoutes from "./Routes/AdminRoutes";
import { userRoutes } from "./constants/appRoutes";
import Login from "./pages/Login";
import PageNotFound from "./pages/404";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <CoreLayout>
                <AdminRoutes />
              </CoreLayout>
            }
          />
          <Route path={userRoutes.login} element={<Login />} />
          <Route path="*" element={<Navigate to={userRoutes.pageNotFound} />} />
          <Route path={userRoutes.pageNotFound} element={<PageNotFound />} />

          {/* <Route path="/" element={<Navigate to={appRoutes.login} />} />
          <Route path="*" element={<Navigate to={appRoutes.login} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
