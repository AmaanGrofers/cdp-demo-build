import { Navigate, Route, Routes } from "react-router-dom";
import { appRoutes, segmentRoutes } from "../constants/appRoutes";
import Destinations from "../Pages/Destinations";
import Segments from "../Pages/Segments";
import DataSources from "../pages/DataSources";
import Attributes from "../pages/Attributes";
import DestinationSyncs from "../pages/DestinationSyncs";
import Alerts from "../pages/Alerts";
import Settings from "../pages/Settings";
import DefineSegment from "../pages/Segments/DefineSegment";
import CreateSegment from "../pages/Segments/CreateSegment";

//* main route -> attributes

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={appRoutes.attributes} />} />
      <Route path={appRoutes.dataSources} element={<DataSources />} />
      <Route path={appRoutes.segments} element={<Segments />} />
      <Route path={appRoutes.attributes} element={<Attributes />} />
      <Route path={appRoutes.destinations} element={<Destinations />} />
      <Route path={appRoutes.destinationSyncs} element={<DestinationSyncs />} />
      <Route path={appRoutes.alerts} element={<Alerts />} />
      <Route path={appRoutes.settings} element={<Settings />} />

      {/* //* Segment routes (Breadcrumbs...) */}
      <Route path={segmentRoutes.createSegment} element={<CreateSegment />} />
      <Route path={segmentRoutes.defineSegment} element={<DefineSegment />} />

      <Route path="*" element={<Navigate to={appRoutes.attributes} />} />
    </Routes>
  );
};

export default AdminRoutes;
