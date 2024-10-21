import Form from "antd/es/form/Form";
import SourceControls from "./SourceControls";
import {
  getDatasourceConfigsRequiredKeys,
  getDatasourceConfigsTypes,
} from "../../apis/dataSources";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Select, Skeleton } from "antd";

// eslint-disable-next-line react/prop-types
function CoreForm({ form, configType, setConfigType }) {
  const { data: configTypesData, isLoading: configTypesLoading } = useQuery({
    queryKey: ["datasourceConfigsTypes"],
    queryFn: ({ signal }) => getDatasourceConfigsTypes(signal),
  });

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["datasourceConfigsRequiredKeys", configType],
    queryFn: ({ signal }) =>
      getDatasourceConfigsRequiredKeys(signal, {
        data_source_type: configType,
      }),
    enabled: false, // Disable automatic fetching
  });

  useEffect(() => {
    if (configType) refetch();
  }, [refetch, configType]);

  if (configTypesLoading) return <Skeleton />;

  const configOptions = configTypesData?.data?.result?.map((item) => ({
    label: item,
    value: item,
  }));

  return (
    <div className="p-4 max-w-full">
      <Select
        value={configType}
        onChange={setConfigType}
        options={configOptions}
        placeholder="Select Config Type"
        className="w-full mb-6"
      />

      <Form
        form={form}
        name="dynamic_rule"
        onValuesChange={() => {}}
        // labelCol={{ span: 6 }}
        // wrapperCol={{ span: 14 }}
        // layout="vertical"
      >
        {configType ? (
          <SourceControls data={data} isLoading={isLoading} />
        ) : null}
      </Form>
    </div>
  );
}

export default CoreForm;
