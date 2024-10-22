import { Route, BrowserRouter, Routes } from "react-router-dom";
import CoreLayout from "./Components/CoreLayout";
import AdminRoutes from "./Routes/AdminRoutes";
import { userRoutes } from "./constants/appRoutes";
import Login from "./pages/Login";

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
          {/* <Route path="/" element={<Navigate to={appRoutes.login} />} />
          <Route path="*" element={<Navigate to={appRoutes.login} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
