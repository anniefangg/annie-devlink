import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./DropdownForm.module.css";

export function DropdownForm({
  as: _Component = _Builtin.DropdownWrapper,
  inputLabel = {},
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "input", "dropdown")}
      tag="div"
      data-hover={false}
      data-delay={0}
    >
      <_Builtin.DropdownToggle
        className={_utils.cx(_styles, "dropdown-toggle-2")}
        tag="div"
      >
        <_Builtin.Icon
          className={_utils.cx(_styles, "", "icon-2")}
          widget={{
            type: "icon",
            icon: "dropdown-toggle",
          }}
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "text-block-2")}
          tag="div"
          {...inputLabel}
        >
          {"Dropdown"}
        </_Builtin.Block>
      </_Builtin.DropdownToggle>
      <_Builtin.DropdownList
        className={_utils.cx(_styles, "dropdown-list-2")}
        tag="nav"
      >
        <_Builtin.DropdownLink
          className={_utils.cx(_styles, "em-dropdown-list-item")}
          options={{
            href: "#",
          }}
        >
          {"Link 1"}
        </_Builtin.DropdownLink>
        <_Builtin.DropdownLink
          className={_utils.cx(_styles, "em-dropdown-list-item")}
          options={{
            href: "#",
          }}
        >
          {"Link 2"}
        </_Builtin.DropdownLink>
        <_Builtin.DropdownLink
          className={_utils.cx(_styles, "em-dropdown-list-item")}
          options={{
            href: "#",
          }}
        >
          {"Link 3"}
        </_Builtin.DropdownLink>
      </_Builtin.DropdownList>
    </_Component>
  );
}
