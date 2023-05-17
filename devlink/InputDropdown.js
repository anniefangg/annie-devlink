import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InputDropdown.module.css";

export function InputDropdown({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "select-input")} tag="div">
      <_Builtin.Block
        className={_utils.cx(_styles, "base-all-inputs")}
        tag="div"
      >
        <_Builtin.Block
          className={_utils.cx(_styles, "content-label-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "body-medium-regular")}
            tag="div"
          >
            {"Label"}
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block className={_utils.cx(_styles, "controls-2")} tag="div">
          <_Builtin.Image
            className={_utils.cx(_styles, "options-icon")}
            loading="lazy"
            width={24}
            height={24}
            src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/64633db8eebb7997d7d059e9_Vectors-Wrapper.svg"
          />
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "help-text")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "input-label-regular")}
          tag="div"
        >
          {"Info that helps a user with this field"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
