export default function getColumnValue({ Value, Type }) {
  switch (Type) {
    case "INTEGER":
      return Value || 0;
    case "VARCHAR":
      return Value || "-";
    default:
      return Value;
  }
}
