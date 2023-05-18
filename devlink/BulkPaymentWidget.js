import React from "react";
import * as _Builtin from "./_Builtin";
import { RecipientCardRow } from "./RecipientCardRow";
import * as _utils from "./utils";
import _styles from "./BulkPaymentWidget.module.css";

export function BulkPaymentWidget({
  as: _Component = _Builtin.Block,
  widgetTitle = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "widget")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "card-header")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "body-medium-bold", "grey")}
          tag="div"
          {...widgetTitle}
        >
          {"Recent bulk payments"}
        </_Builtin.Block>
        <_Builtin.Link
          className={_utils.cx(_styles, "text-link")}
          button={false}
          options={{
            href: "#",
          }}
        >
          {"View all"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "scenarios")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "atoms-2")} tag="div">
          <RecipientCardRow />
        </_Builtin.Block>
      </_Builtin.Block>
      <RecipientCardRow />
      <RecipientCardRow />
      <RecipientCardRow />
    </_Component>
  );
}
