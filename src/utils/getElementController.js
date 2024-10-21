import { Input, InputNumber, Select, Switch } from "antd";

function getElementController(elementName) {
  switch (elementName) {
    case "text":
      return Input;
    case "number":
      return InputNumber;
    case "select":
      return Select;
    case "switch":
      return Switch;
    case "password_input":
      return Input.Password;
    default:
      return Input;
  }
}

export default getElementController;
