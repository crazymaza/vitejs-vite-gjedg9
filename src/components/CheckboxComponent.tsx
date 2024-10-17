import { Checkbox } from "antd";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { add, remove } from "../redux/store";

const CheckboxComponent: React.FC<{ rowId: number }> = ({ rowId }) => {
  const selectedIds = useAppSelector((state) => state.selected.selectedValue);
  const dispatch = useAppDispatch();

  const toggleRowSelection = (id: number) => {
    if (selectedIds.includes(id)) {
      dispatch(remove(id));
      return;
    }
    dispatch(add(id));
  };
  return (
    <Checkbox
      checked={selectedIds.includes(rowId)}
      onChange={() => toggleRowSelection(rowId)}
    />
  );
};

export default CheckboxComponent;
