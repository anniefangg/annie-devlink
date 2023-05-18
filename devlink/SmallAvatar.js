import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SmallAvatar.module.css";

export function SmallAvatar({
  as: _Component = _Builtin.Image,
  smallAvatarImage = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "", "small-avatar")}
      loading="lazy"
      width={20}
      height={20}
      src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/6463cbc884a24d18dd4fbf00_Vectors-Wrapper.svg"
      {...smallAvatarImage}
    />
  );
}
