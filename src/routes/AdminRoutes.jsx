import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes } from "../constants/appRoutes";
import Destinations from "../Pages/Destinations";
import Segments from "../Pages/Segments";
import DataSources from "../pages/DataSources";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={appRoutes.dataSources} />} />
      <Route path={appRoutes.dataSources} element={<DataSources />} />
      <Route path={appRoutes.segments} element={<Segments />} />
      <Route path={appRoutes.destinations} element={<Destinations />} />
    </Routes>
  );
};

export default AdminRoutes;
