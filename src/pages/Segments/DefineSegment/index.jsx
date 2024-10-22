import { Breadcrumb } from "antd";
import { segmentRoutes } from "../../../constants/appRoutes";

function DefineSegment() {
  return (
    <div className="p-4">
      Define Segment
      <div>
        <Breadcrumb
          separator=">"
          items={[
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

export default DefineSegment;
