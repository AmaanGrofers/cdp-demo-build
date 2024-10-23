import getColumnValue from "./getColumnValue";

function getTableQueryData(data) {
  const {
    ColumnCount = 0,
    ProcessingTimeMS = 0,
    RowCount = 0,
    Rows = [],
    Schema = {},
  } = data || {};

  const { ColumnNames = [] } = Schema;

  const queryColumns = ColumnNames?.map((columnName) => ({
    title: columnName,
    dataIndex: columnName,
    key: columnName,
  }));

  const queryData = Rows.reduce((initalData, row) => {
    const { Columns = [] } = row || {};

    const newRow = Columns.reduce((initialRowObject, column, index) => {
      initialRowObject = {
        ...initialRowObject,
        [ColumnNames?.[index]]: getColumnValue(column),
      };
      return initialRowObject;
    }, {});

    return [...initalData, newRow];
  }, []);

  return {
    queryData,
    queryColumns,
    ColumnCount,
    ProcessingTimeMS,
    RowCount,
    Rows,
  };
}

export default getTableQueryData;
