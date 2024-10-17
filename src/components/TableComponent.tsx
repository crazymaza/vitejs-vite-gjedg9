import { useState } from "react";
import BaseTable, { ColumnShape } from "react-base-table";
import { useAppSelector } from "../redux/hooks";
import CheckboxComponent from "./CheckboxComponent";

const TableComponent = () => {
  const initialData = useAppSelector((state) => state.selected.tableData);
  const selectedRows = useAppSelector((state) => state.selected.selectedValue);
  const [columns] = useState<ColumnShape<typeof initialData[0]>[]>([
    {
      key: "checkbox",
      title: "Select",
      width: 100,
      dataKey: "id",
      selectedRows,
      cellRenderer: ({ rowData }) => {
        return <CheckboxComponent rowId={rowData.id} />;
      },
    },
    { key: "name", title: "Product Name", dataKey: "name", width: 200 },
    { key: "value", title: "Value", dataKey: "value", width: 150 },
    { key: "quantity", title: "Quantity", dataKey: "quantity", width: 150 },
  ]);

  return (
    <BaseTable data={initialData} columns={columns} width={600} height={300} />
  );
};

export default TableComponent;
