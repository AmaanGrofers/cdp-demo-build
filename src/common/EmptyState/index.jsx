/* eslint-disable react/prop-types */
import Title from "antd/es/typography/Title";
import EmptyBox from "./empty-box.png";

function EmptyState({
  height = 200,
  width = 200,
  flexDirection = "column",
  title = "Data not found",
  titleSize = 5,
}) {
  return (
    <div
      className={`flex items-center justify-center text-slate-100 tracking-wider`}
      style={{ flexDirection: flexDirection }}
    >
      <div>
        <img
          src={EmptyBox}
          alt="empty-state"
          className="object-contain p-4"
          height={height}
          width={width}
        />
      </div>
      <Title level={titleSize} style={{ color: "#4f4f4f" }}>
        {title}
      </Title>
    </div>
  );
}

export default EmptyState;
