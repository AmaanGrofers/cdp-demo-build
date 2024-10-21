export function getDataSourceNameControl() {
  return [
    {
      key: "source",
      name: "source",
      label: "Source",
      type: "select",
      options: [
        { label: "Trino", value: "trino" },
        { label: "Postgres", value: "postgres" },
      ],
      rules: [
        {
          required: true,
          message: "Please select the data source",
        },
      ],
      placeholder: "Please select the data source",
      style: "",
    },
  ];
}

export function getDataSourceControls() {
  return [
    {
      key: "catalog",
      name: "catalog",
      label: "Catalog",
      type: "text",
      rules: [
        {
          required: true,
          message: "Required!",
        },
      ],
      // placeholder: "Plea",
      style: "",
    },
    {
      key: "host",
      name: "host",
      label: "Host",
      type: "text",
      rules: [
        {
          required: true,
          message: "Required!",
        },
      ],
      // placeholder: "Plea",
      style: "",
    },
    {
      key: "password",
      name: "password",
      label: "Password",
      type: "password_input",
      rules: [
        {
          required: true,
          message: "Required!",
        },
      ],
      // placeholder: "Plea",
      style: "",
    },
    {
      key: "port",
      name: "port",
      label: "Port",
      type: "text",
      rules: [
        {
          required: true,
          message: "Required!",
        },
      ],
      // placeholder: "Plea",
      style: "",
    },
    {
      key: "schema",
      name: "schema",
      label: "Schema",
      type: "text",
      rules: [
        {
          required: true,
          message: "Required!",
        },
      ],
      // placeholder: "Plea",
      style: "",
    },
    {
      key: "ssl",
      name: "ssl",
      label: "SSL",
      type: "text",
      rules: [
        {
          required: true,
          message: "Required!",
        },
      ],
      // placeholder: "Plea",
      style: "",
    },
    {
      key: "username",
      name: "username",
      label: "Username",
      type: "text",
      rules: [
        {
          required: true,
          message: "Required!",
        },
      ],
      // placeholder: "Plea",
      style: "",
    },
  ];
}
