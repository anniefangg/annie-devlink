import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Pill.module.css";

export function Pill({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "pill")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "text-2")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "small-body-regular")}
          tag="div"
        >
          {"Completed"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
