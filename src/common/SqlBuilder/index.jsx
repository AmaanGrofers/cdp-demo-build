import { useState } from "react";
import { QueryBuilder } from "react-querybuilder";
import "react-querybuilder/dist/query-builder.css";
import { QueryBuilderAntD } from "@react-querybuilder/antd";
import { fields } from "./fields";
import "./styles.css";
import { QueryBuilderDnD } from "@react-querybuilder/dnd";
import * as ReactDnD from "react-dnd";
import * as ReactDndHtml5Backend from "react-dnd-html5-backend";

const initialQuery = { rules: [] };

export function SqlBuilder() {
  const [query, setQuery] = useState(initialQuery);

  console.log("query : ", query);

  return (
    <QueryBuilderDnD dnd={{ ...ReactDnD, ...ReactDndHtml5Backend }}>
      <QueryBuilderAntD>
        <QueryBuilder
          fields={fields}
          query={query}
          onQueryChange={setQuery}
          controlClassnames={{ queryBuilder: "queryBuilder-branches" }}
          showCloneButtons
        />
      </QueryBuilderAntD>
    </QueryBuilderDnD>
  );
}
export default SqlBuilder;
