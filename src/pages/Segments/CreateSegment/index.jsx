import { Breadcrumb } from "antd";
import { segmentRoutes } from "../../../constants/appRoutes";
import { HomeOutlined } from "@ant-design/icons";
import SqlBuilder from "../../../common/SqlBuilder";

function CreateSegment() {
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
            title: <span className="text-black">Create Segment</span>,
            href: `${segmentRoutes.createSegment}`,
          },
        ]}
      />

      <div className="mt-6">
        <SqlBuilder />
      </div>
    </div>
  );
}

export default CreateSegment;
