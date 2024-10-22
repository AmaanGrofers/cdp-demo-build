import { Breadcrumb } from "antd";
import { segmentRoutes } from "../../../constants/appRoutes";

function CreateSegment() {
  return (
    <div className="p-4">
      Create Segment
      <div>
        <Breadcrumb
          separator=">"
          items={[
            {
              title: "Create Segment",
              href: `${segmentRoutes.createSegment}`,
            },
          ]}
        />
      </div>
    </div>
  );
}

export default CreateSegment;
