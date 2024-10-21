import { Button } from "antd";
import { useState } from "react";
import AddDataSource from "../../components/AddDataSource";
import ListDataSources from "../../components/ListDataSources";

function DataSources() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen((pv) => !pv);
  };

  return (
    <div className="p-4">
      <div className="flex justify-end">
        <Button color="primary" variant="solid" onClick={openModal}>
          Add Data Source
        </Button>
      </div>

      <div className="mt-4">
        <ListDataSources />
      </div>

      <AddDataSource open={open} setOpen={openModal} />
    </div>
  );
}

export default DataSources;
