import { Breadcrumb } from "antd";
import { segmentRoutes } from "../../constants/appRoutes";
import { HomeOutlined } from "@ant-design/icons";

function Segments() {
  return (
    <div className="p-4">
      Segments
      <div>
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
              title: "Define Segment",
              href: `${segmentRoutes.defineSegment}`,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default Segments;
