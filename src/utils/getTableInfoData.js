function getTableInfoData(data) {
  const {
    ColumnCount = 0,
    ProcessingTimeMS = 0,
    RowCount = 0,
    Rows = [],
    Schema = {},
  } = data || {};

  const { ColumnNames = [], ColumnSchemas = [] } = Schema;

  const outputTypeColumns = [
    { title: "Column", dataIndex: "column", key: "column" },
    { title: "Type", dataIndex: "type", key: "type" },
  ];

  const outputColumnsData = ColumnNames?.map((columnName, index) => ({
    type: ColumnSchemas?.[index],
    column: columnName,
  }));

  return {
    outputTypeColumns,
    outputColumnsData,
    ColumnCount,
    ProcessingTimeMS,
    RowCount,
    Rows,
  };
}

export default getTableInfoData;
