import React from "react";
import * as _Builtin from "./_Builtin";
import { Pill } from "./Pill";
import { RightAccessory } from "./RightAccessory";
import { RecipientAvatars } from "./RecipientAvatars";
import * as _utils from "./utils";
import _styles from "./RecipientCardRow.module.css";

export function RecipientCardRow({
  as: _Component = _Builtin.Block,
  bulkPaymentRowHeader = {},
  bulkPaymentStatus = {},
  bulkPaymentName,
  dateCompletedOn = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "card-row")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "top-content")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "name-status")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "name")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "body-medium-bold")}
              tag="div"
            >
              {bulkPaymentName ?? "Bulk payment 23-06-2021"}
            </_Builtin.Block>
            <Pill />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "small-body-regular", "grey")}
            tag="div"
            {...bulkPaymentStatus}
          >
            <_Builtin.Span>{"10 payments "}</_Builtin.Span>
            {"completed on "}
            <_Builtin.Span {...dateCompletedOn}>{"23-06-2021"}</_Builtin.Span>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "right-accessory")}
          tag="div"
        >
          <RightAccessory />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block
        className={_utils.cx(_styles, "recipient-avatars")}
        tag="div"
      >
        <RecipientAvatars />
      </_Builtin.Block>
    </_Component>
  );
}
