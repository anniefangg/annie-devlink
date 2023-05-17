import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CellDropdown.module.css";

export function CellDropdown({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "cells---input")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "base-cell")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "cell-content")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "content-label")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "content")} tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "body-medium-regular")}
                tag="div"
              >
                {"Recipient"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "_1-icon")} tag="div">
          <_Builtin.Block className={_utils.cx(_styles, "controls")} tag="div">
            <_Builtin.Image
              className={_utils.cx(_styles, "options-icon")}
              loading="lazy"
              width={24}
              height={24}
              src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/64633db8eebb7997d7d059e9_Vectors-Wrapper.svg"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
