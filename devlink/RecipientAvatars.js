import React from "react";
import * as _Builtin from "./_Builtin";
import { SmallAvatar } from "./SmallAvatar";
import * as _utils from "./utils";
import _styles from "./RecipientAvatars.module.css";

export function RecipientAvatars({
  as: _Component = _Builtin.Block,
  moreRecipients = {},
}) {
  return (
    <_Component className={_utils.cx(_styles, "avatars")} tag="div">
      <SmallAvatar />
      <SmallAvatar />
      <SmallAvatar />
      <_Builtin.Block
        className={_utils.cx(_styles, "", "small-body-regular", "grey")}
        tag="div"
        {...moreRecipients}
      >
        {"+6 more recipients"}
      </_Builtin.Block>
    </_Component>
  );
}
