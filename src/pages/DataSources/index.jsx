import { Button } from "antd";
import { useState } from "react";
import AddDataSource from "../../components/AddDataSource";
import ListDataSources from "../../components/ListDataSources";

function DataSources() {
  const [open, setOpen] = useState(false);

  const changeModalVisibility = () => {
    setOpen((pv) => !pv);
  };

  return (
    <div className="p-4">
      <div className="flex justify-end">
        <Button color="primary" variant="solid" onClick={changeModalVisibility}>
          Add Data Source
        </Button>
      </div>

      <ListDataSources />

      <AddDataSource open={open} closeModal={changeModalVisibility} />
    </div>
  );
}

export default DataSources;
