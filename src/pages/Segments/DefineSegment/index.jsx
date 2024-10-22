import { Breadcrumb } from "antd";
import { segmentRoutes } from "../../../constants/appRoutes";
import { HomeOutlined } from "@ant-design/icons";

function DefineSegment() {
  return (
    <div className="p-4">
      <Breadcrumb
        separator=">"
        items={[
          {
            title: <HomeOutlined />,
            href: `${segmentRoutes.home}`,
          },
          {
            title: "Create Segment",
            href: `${segmentRoutes.createSegment}`,
          },
          {
            title: <span className="text-black">Define Segment</span>,
            href: `${segmentRoutes.defineSegment}`,
          },
        ]}
      />
    </div>
  );
}

export default DefineSegment;
