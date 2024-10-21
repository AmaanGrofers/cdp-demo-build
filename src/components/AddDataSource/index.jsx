import { Button, Form, message, Modal } from "antd";
import { postDatasources } from "../../apis/dataSources";
import { useQuery } from "@tanstack/react-query";
import CoreForm from "./CoreForm";
import { useState } from "react";
import styles from "./styles.module.css";

// eslint-disable-next-line react/prop-types
function AddDataSource({ open = false, setOpen = () => {} }) {
  const [configType, setConfigType] = useState();
  const [form] = Form.useForm();

  let dataSourceValues = {};
  const {
    isLoading: addingDataSource,
    error,
    isError,
    refetch: addDataSource,
  } = useQuery({
    queryKey: ["datasources", dataSourceValues],
    queryFn: ({ signal }) => postDatasources(signal, dataSourceValues),
    enabled: false, // Disable automatic fetching
  });

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log("form : ", form.getFieldsValue());
      console.log("Success:", values);

      // dataSourceValues = {};
      //!: hard coding for testing.......
      dataSourceValues = {
        tenant_id: 1,
        name: "LocalTrino2",
        config_map: {
          host: "trino",
          port: 8080,
          catalog: "example_catalog",
          schema: "example_schema",
          username: "example_user",
          password: "example_password",
          ssl: false,
        },
        data_source_config_id: 1,
      };

      await addDataSource();

      if (isError) throw error;

      message.success("Data source added successfully!");

      form.resetFields(); //? reset form
      setOpen(); //? close the form
    } catch (errorInfo) {
      if (isError)
        message.error("Failed to add data source. Please try again.");

      console.log("Failed:", errorInfo);
    }
  };

  return (
    <Modal
      title="Add Data Source"
      centered
      open={open}
      onOk={setOpen}
      onCancel={setOpen}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={addingDataSource}
          onClick={onCheck}
        >
          Add
        </Button>,
      ]}
      className={styles.modal_body}
    >
      <CoreForm
        form={form}
        configType={configType}
        setConfigType={setConfigType}
      />
    </Modal>
  );
}

export default AddDataSource;
