import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./SavedLocations.module.css";

export function SavedLocations({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "block")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "title")} tag="div">
        {"Saved Locations"}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "list")} tag="div">
        <_Builtin.Link
          className={_utils.cx(_styles, "card")}
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "label-highlight")}
                tag="div"
              >
                {"Atlanta - Mostly Cloudy"}
              </_Builtin.Block>
              <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
                {"2:17pm"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
              <_Builtin.Image
                className={_utils.cx(_styles, "image-small")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a1951bf23e14443_Group%201287.png"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "temp-small")}
                tag="div"
              >
                {"74º"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "card")}
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "label-highlight")}
                tag="div"
              >
                {"New York - Drizzle"}
              </_Builtin.Block>
              <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
                {"2:17pm"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
              <_Builtin.Image
                className={_utils.cx(_styles, "image-small")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a19518a16e1444d_Group%201263.png"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "temp-small")}
                tag="div"
              >
                {"65º"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Link>
        <_Builtin.Link
          className={_utils.cx(_styles, "card")}
          button={false}
          options={{
            href: "#",
          }}
        >
          <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
            <_Builtin.Block tag="div">
              <_Builtin.Block
                className={_utils.cx(_styles, "label-highlight")}
                tag="div"
              >
                {"Amsterdam - Severe storms"}
              </_Builtin.Block>
              <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
                {"8:17pm"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
              <_Builtin.Image
                className={_utils.cx(_styles, "image-small")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a19514268e14449_Group%201273.png"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "temp-small")}
                tag="div"
              >
                {"80º"}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
