import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./InputForm.module.css";

export function InputForm({
  as: _Component = _Builtin.FormTextInput,
  text = "This is the default text value",
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "input")}
      autoFocus={false}
      maxLength={256}
      name="name-2"
      data-name="Name 2"
      placeholder="Name"
      type="text"
      disabled={false}
      required={false}
      id="name-2"
    />
  );
}
