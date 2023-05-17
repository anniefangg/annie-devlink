import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./CurrentForecast.module.css";

export function CurrentForecast({
  as: _Component = _Builtin.Block,
  currentTemp = "63º",
  feelsLikeTemp = "67º",
  humidity = "51%",
  precipitation = '.75"',
  aqi = "70",
  sunset = "6:50pm",
}) {
  return (
    <_Component className={_utils.cx(_styles, "block")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "title")} tag="div">
        {"Current"}
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "grid-03")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "card")}
          id={_utils.cx(
            _styles,
            "w-node-_6b29cadb-85e1-c6aa-61dc-296170e735cd-70e735c9"
          )}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "current-content")}
              id={_utils.cx(
                _styles,
                "w-node-_6b29cadb-85e1-c6aa-61dc-296170e735cf-70e735c9"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a19514203e14432_Temp.svg"
              />
              <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
                {"Temperature"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "label-highlight")}
              tag="div"
            >
              {currentTemp}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card")}
          id={_utils.cx(
            _styles,
            "w-node-_6b29cadb-85e1-c6aa-61dc-296170e735d5-70e735c9"
          )}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "current-content")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a19514203e14432_Temp.svg"
              />
              <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
                {"Feels like"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "label-highlight")}
              tag="div"
            >
              {feelsLikeTemp}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card")}
          id={_utils.cx(
            _styles,
            "w-node-_6b29cadb-85e1-c6aa-61dc-296170e735dd-70e735c9"
          )}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "current-content")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a195153eae14440_humidity.svg"
              />
              <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
                {"Humidity"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "label-highlight")}
              tag="div"
            >
              {humidity}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card")}
          id={_utils.cx(
            _styles,
            "w-node-_6b29cadb-85e1-c6aa-61dc-296170e735e5-70e735c9"
          )}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "current-content")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a1951068be1441a_Precipitation.svg"
              />
              <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
                {"Precipitation"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "label-highlight")}
              tag="div"
            >
              {precipitation}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card")}
          id={_utils.cx(
            _styles,
            "w-node-_6b29cadb-85e1-c6aa-61dc-296170e735ed-70e735c9"
          )}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "current-content")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a19510578e14420_AQI.svg"
              />
              <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
                {"Outdoor AQI"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "label-highlight")}
              tag="div"
            >
              {aqi}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
        <_Builtin.Block
          className={_utils.cx(_styles, "card")}
          id={_utils.cx(
            _styles,
            "w-node-_6b29cadb-85e1-c6aa-61dc-296170e735f5-70e735c9"
          )}
          tag="div"
        >
          <_Builtin.Block className={_utils.cx(_styles, "flex")} tag="div">
            <_Builtin.Block
              className={_utils.cx(_styles, "current-content")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "icon")}
                loading="lazy"
                width="auto"
                height="auto"
                src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a1951796de1442e_sunset.svg"
              />
              <_Builtin.Block className={_utils.cx(_styles, "label")} tag="div">
                {"Sunset"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "label-highlight")}
              tag="div"
            >
              {sunset}
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
