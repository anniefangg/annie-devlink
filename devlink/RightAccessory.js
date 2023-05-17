import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./RightAccessory.module.css";

export function RightAccessory({ as: _Component = _Builtin.Image }) {
  return (
    <_Component
      className={_utils.cx(_styles, "options-icon")}
      loading="lazy"
      width={24}
      height={24}
      src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/6463cbc629742afd471396fb_Vectors-Wrapper.svg"
    />
  );
}
