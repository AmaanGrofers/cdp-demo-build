import { Button, Divider, FloatButton, message } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import SQLEditor from "../../../common/SQLEditor";
import { useState } from "react";
import styles from "../styles.module.css";
import { useMutation } from "@tanstack/react-query";
import { postQueryenginePreviewQuery } from "../../../apis/dataSources";
import QueryResult from "./QueryResult";
import isEmpty from "lodash.isempty";

SQLFormat.propTypes = {
  onChangeStep: PropTypes.func,
};

function SQLFormat({ onChangeStep }) {
  const [tableName, setTableName] = useState("");
  const [query, setQuery] = useState("select * from ");

  const handleSubmit = () => {
    // getting table name...
    var Z = query.toLowerCase().slice(query.indexOf("from") + "from".length);
    setTableName(Z.split(" ")[1]);

    handleQueryRun();
  };

  const {
    data: queryResult,
    mutateAsync: getQueryResult,
    isLoading,
  } = useMutation({
    mutationFn: postQueryenginePreviewQuery, // Function that makes the API request
    onSuccess: () => {
      message.success("Query fired successfully!");
    },
    onError: (error) => {
      message.error(
        `Failed to add data source: ${error?.message || "Unknown error"}`
      );
    },
  });

  const handleQueryRun = async () => {
    if (isEmpty(query)) {
      message.error("Query can't be empty!");
      return;
    }

    const params = {
      engine_name: "LocalTrino2",
      query: query,
    };

    await getQueryResult(params);
  };

  return (
    <div className="h-full mt-4 mb-20">
      <div className="py-2 text-red-500 italic text-xs">
        <strong>Warning:</strong> Please input user ID and updated at time
      </div>
      <div className="">
        <div className={styles.editorContainer}>
          <SQLEditor query={query} setQuery={setQuery} />
        </div>

        <div className="flex justify-end">
          <Button
            type="primary"
            className="text-xs mt-2"
            onClick={handleSubmit}
            loading={isLoading}
          >
            Run Query
          </Button>
        </div>
      </div>
      <Divider />

      <QueryResult tableName={tableName} queryResult={queryResult} />

      <>
        <FloatButton
          icon={<RightOutlined />}
          type="primary"
          style={{ insetInlineEnd: 24 }}
          onClick={() => onChangeStep(2)}
        />
        <FloatButton
          icon={<LeftOutlined />}
          type="default"
          style={{ insetInlineEnd: 94 }}
          onClick={() => onChangeStep(0)}
        />
      </>
    </div>
  );
}

export default SQLFormat;
