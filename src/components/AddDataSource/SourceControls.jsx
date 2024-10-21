import { Form, Skeleton } from "antd";
import getElementController from "../../utils/getElementController";
import { getDataSourceControls } from "../../configurations/getDataSourceControls";
import isEmpty from "lodash.isempty";

// eslint-disable-next-line react/prop-types
function SourceControls({ isLoading = false, data = {} }) {
  if (isLoading) {
    return (
      <div>
        <Skeleton />
      </div>
    );
  }

  if (isEmpty(data)) return;

  const sourceControlKeys = data?.data?.result || [];

  const dataSourceControls = (getDataSourceControls() || []).filter(
    (controlItem) => sourceControlKeys[controlItem?.name]
  );

  return (
    <>
      {dataSourceControls?.map((controlItem) => {
        const { key, type, style, ...rest } = controlItem || {};

        const Element = getElementController(type);

        if (!Element) return;

        return (
          <div key={key} className={style}>
            <Form.Item {...rest}>
              <Element {...rest} />
            </Form.Item>
          </div>
        );
      })}
    </>
  );
}

export default SourceControls;
