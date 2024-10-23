import { Table } from "antd";
import Title from "antd/es/typography/Title";
import isEmpty from "lodash.isempty";
import PropTypes from "prop-types";
import getTableQueryData from "../../../../utils/getTableQueryData";
import getTableInfoData from "../../../../utils/getTableInfoData";

QueryResult.propTypes = {
  tableName: PropTypes.string,
  queryResult: PropTypes.object,
};

function QueryResult({ tableName = "", queryResult = {} }) {
  if (isEmpty(queryResult) || isEmpty(queryResult?.data?.result)) return;

  const { queryData, queryColumns } = getTableQueryData(
    queryResult.data.result
  );

  const { outputTypeColumns, outputColumnsData } = getTableInfoData(
    queryResult.data.result
  );

  return (
    <div className="flex gap-8">
      <div style={{ flex: 1 }}>
        <Title level={5} style={{ color: "#4f4f4f" }}>
          Output Columns:
        </Title>

        <Table
          bordered
          columns={outputTypeColumns}
          dataSource={outputColumnsData}
          size="small"
        />
      </div>

      <div style={{ flex: 5 }}>
        <Title level={5} style={{ color: "#4f4f4f" }}>
          Results:
        </Title>

        <Table
          bordered
          columns={queryColumns}
          dataSource={queryData}
          size="small"
        />
      </div>
    </div>
  );
}

export default QueryResult;
