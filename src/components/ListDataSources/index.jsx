import { useQuery } from "@tanstack/react-query";
import { Spin, Table } from "antd";
import { listDatasources } from "../../apis/dataSources";
import isEmpty from "lodash.isempty";
import EmptyState from "../../common/EmptyState";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Action",
    dataIndex: "",
    key: "x",
    render: () => <a>Delete</a>,
  },
];

const data = [
  {
    key: 1,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    description:
      "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  },
  {
    key: 2,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    description:
      "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  },
  {
    key: 3,
    name: "Not Expandable",
    age: 29,
    address: "Jiangsu No. 1 Lake Park",
    description: "This not expandable",
  },
  {
    key: 4,
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    description:
      "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
  },
];

function ListDataSources() {
  const { data: apiData, isLoading } = useQuery({
    queryKey: ["listDataSources"],
    queryFn: ({ signal }) => listDatasources(signal),
  });

  if (isLoading) {
    return (
      <div className="w-full h-96 flex justify-center items-center">
        <Spin size="large" />
      </div>
    );
  }

  if (isEmpty(apiData)) {
    return (
      <div className="mt-10">
        <EmptyState
          title="No data source found"
          height={240}
          width={240}
          flexDirection="column"
        />
      </div>
    );
  }

  return (
    <div className="mt-14">
      <h4 className="mb-4">Connections :</h4>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
        dataSource={data}
      />
    </div>
  );
}
export default ListDataSources;
