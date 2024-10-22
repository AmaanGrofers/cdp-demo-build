import { Button, Form, message, Modal } from "antd";
import { postDatasources } from "../../apis/dataSources";
import { useMutation } from "@tanstack/react-query";
import CoreForm from "./CoreForm";
import { useState } from "react";
import styles from "./styles.module.css";
import PropTypes from "prop-types";

AddDataSource.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
};

function AddDataSource({ open = false, closeModal = () => {} }) {
  const [configType, setConfigType] = useState();
  const [form] = Form.useForm();

  const { mutateAsync: addDataSource, isLoading } = useMutation({
    mutationFn: postDatasources, // Function that makes the API request
    onSuccess: () => {
      message.success("Data source added successfully!");

      // Reset the form and close the modal
      form.resetFields();
      closeModal();
    },
    onError: (error) => {
      message.error(
        `Failed to add data source: ${error?.message || "Unknown error"}`
      );
    },
  });

  const onCheck = async () => {
    const values = await form.validateFields();
    console.log("values : ", values);

    const { name, ...restValues } = values || {};

    // const dataSourceValues = {
    //   tenant_id: 1,
    //   name,
    //   data_source_config_id: configType, //todo: not the name, but it's linked value..,
    //   config_map: restValues,
    // };

    //? hard coding for testing
    const dataSourceValues = {
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

    await addDataSource(dataSourceValues);
  };

  const handleCancel = () => {
    // form.resetFields();
    closeModal();
  };

  return (
    <Modal
      title="Add Data Source"
      centered
      open={open}
      onCancel={handleCancel}
      footer={[
        <Button
          key="submit"
          type="primary"
          loading={isLoading}
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
