import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import { InputForm } from "./InputForm";
import { DropdownForm } from "./DropdownForm";
import { SmallTextAvatar } from "./SmallTextAvatar";
import { BulkPaymentWidget } from "./BulkPaymentWidget";
import { SevenDayForecast } from "./SevenDayForecast";
import { CurrentForecast } from "./CurrentForecast";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-99":{"id":"e-99","name":"","animationType":"preset","eventTypeId":"SCROLL_INTO_VIEW","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-100"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"925c293e-224d-4257-ffbf-2e0d8eff6798","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"925c293e-224d-4257-ffbf-2e0d8eff6798","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":0,"scrollOffsetUnit":"%","delay":null,"direction":null,"effectIn":null},"createdOn":1685960164395}},"actionLists":{"a":{"id":"a","title":"Fade in animation","actionItemGroups":[{"actionItems":[{"id":"a-n-25","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|22cd5f33-5ab3-9f56-8379-746f1ec51f55"},"value":0,"unit":""}},{"id":"a-n-23","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95"},"value":0,"unit":""}},{"id":"a-n-17","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|5770baaf-e603-65b1-8fab-218aa24894be"},"value":0,"unit":""}},{"id":"a-n-15","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|b0bef92a-2b78-9ac2-73c3-fb74bfe0d46b"},"value":0,"unit":""}},{"id":"a-n-13","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|654cc3f7-921a-0760-4f57-9b53a1450e1c"},"value":0,"unit":""}},{"id":"a-n-11","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|18b32fbb-c384-b89b-d2c5-f9d4bc60fa14"},"value":0,"unit":""}},{"id":"a-n-9","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|c9b320e0-72ea-c32b-87f2-7744826d2ca8"},"value":0,"unit":""}},{"id":"a-n-5","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|e1de801e-655c-c09f-d0f5-101a21266664"},"value":0,"unit":""}},{"id":"a-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|22cd5f33-5ab3-9f56-8379-746f1ec51f55"},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":200,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|e1de801e-655c-c09f-d0f5-101a21266664"},"value":1,"unit":""}},{"id":"a-n-4","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|22cd5f33-5ab3-9f56-8379-746f1ec51f55"},"value":1,"unit":""}},{"id":"a-n-14","actionTypeId":"STYLE_OPACITY","config":{"delay":400,"easing":"","duration":500,"target":{"id":"95ee82c6-38e8-5b6a-1c90-af0bc260ab95"},"value":1,"unit":""}},{"id":"a-n-16","actionTypeId":"STYLE_OPACITY","config":{"delay":500,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|b0bef92a-2b78-9ac2-73c3-fb74bfe0d46b"},"value":1,"unit":""}},{"id":"a-n-18","actionTypeId":"STYLE_OPACITY","config":{"delay":600,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|5770baaf-e603-65b1-8fab-218aa24894be"},"value":1,"unit":""}},{"id":"a-n-20","actionTypeId":"STYLE_OPACITY","config":{"delay":700,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|150bd48f-4d38-214b-6274-da18015c2f6c"},"value":1,"unit":""}},{"id":"a-n-12","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|18b32fbb-c384-b89b-d2c5-f9d4bc60fa14"},"value":1,"unit":""}},{"id":"a-n-22","actionTypeId":"STYLE_OPACITY","config":{"delay":800,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|dc6b2600-5bca-e580-f744-dabc8782ef5d"},"value":1,"unit":""}},{"id":"a-n-24","actionTypeId":"STYLE_OPACITY","config":{"delay":900,"easing":"","duration":500,"target":{"id":"644c609e7a19518410e14416|ea1ffd23-f51a-00a1-ec03-c0b83538c62d"},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":true,"createdOn":1637118496510}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Hero({ as: _Component = _Builtin.Section, avatarText = "AB" }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "hero")} tag="section">
      <_Builtin.Container tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "two-columns")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-4")}
            tag="div"
          >
            <_Builtin.Heading tag="h1">{"Heading"}</_Builtin.Heading>
            <_Builtin.Paragraph>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere."
              }
            </_Builtin.Paragraph>
            <_Builtin.FormWrapper>
              <_Builtin.FormForm
                className={_utils.cx(_styles, "form-2")}
                name="email-form"
                data-name="Email Form"
                method="get"
                id="email-form"
              >
                <_Builtin.FormBlockLabel htmlFor="name">
                  {"Name"}
                </_Builtin.FormBlockLabel>
                <InputForm />
                <DropdownForm />
                <_Builtin.FormButton
                  className={_utils.cx(_styles, "submit-button-2")}
                  type="submit"
                  value="Continue"
                  data-wait="Please wait..."
                />
              </_Builtin.FormForm>
              <_Builtin.FormSuccessMessage>
                <_Builtin.Block tag="div">
                  {"Thank you! Your submission has been received!"}
                </_Builtin.Block>
              </_Builtin.FormSuccessMessage>
              <_Builtin.FormErrorMessage>
                <_Builtin.Block tag="div">
                  {"Oops! Something went wrong while submitting the form."}
                </_Builtin.Block>
              </_Builtin.FormErrorMessage>
            </_Builtin.FormWrapper>
            <SmallTextAvatar avatarText={avatarText} />
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-5")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="auto"
              src="https://uploads-ssl.webflow.com/644c609e7a19510df3e143fb/644c609e7a1951bf23e14443_Group%201287.png"
            />
            <BulkPaymentWidget bulkPaymentWidgetTitle="Recent payments" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
      <_Builtin.Block
        className={_utils.cx(_styles, "page-wrapper")}
        data-w-id="925c293e-224d-4257-ffbf-2e0d8eff6798"
        tag="div"
      >
        <_Builtin.NotSupported _atom="DevlinkSlot" />
        <_Builtin.Block
          className={_utils.cx(_styles, "dashboard-main")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "dashboard-content")}
            tag="div"
          >
            <_Builtin.Block className={_utils.cx(_styles, "top-nav")} tag="div">
              <_Builtin.NotSupported _atom="DevlinkSlot" />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "main-dashboard")}
              tag="div"
            >
              <_Builtin.Container
                className={_utils.cx(_styles, "container")}
                tag="div"
              >
                <SevenDayForecast
                  forecastCardWeatherDesc="Rain"
                  forecastCardLow="L: 67°"
                  forecastCardHigh="H: 80°"
                  forecastCardLow2="L: 53°"
                  forecastCardHigh2="H: 78°"
                  forecastCardLow3="L: 51°"
                  forecastCardHigh3="H: 74°"
                  forecastCardLow4="L: 54°"
                  forecastCardHigh4="H: 70°"
                />
                <CurrentForecast />
              </_Builtin.Container>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
