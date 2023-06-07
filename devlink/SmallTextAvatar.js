import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SmallTextAvatar.module.css";

export function SmallTextAvatar({
  as: _Component = _Builtin.Block,
  avatarText = "AB",
}) {
  return (
    <_Component className={_utils.cx(_styles, "small-avatar")} tag="div">
      <_Builtin.Paragraph className={_utils.cx(_styles, "small-body-regular")}>
        {avatarText}
      </_Builtin.Paragraph>
    </_Component>
  );
}
