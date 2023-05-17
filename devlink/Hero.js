import React from "react";
import * as _Builtin from "./_Builtin";
import { InputDropdown } from "./InputDropdown";
import { CellDropdown } from "./CellDropdown";
import { InputForm } from "./InputForm";
import { DropdownForm } from "./DropdownForm";
import { RecipientWidget } from "./RecipientWidget";
import * as _utils from "./utils";
import _styles from "./Hero.module.css";

export function Hero({ as: _Component = _Builtin.Section }) {
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
            <_Builtin.Link
              button={true}
              options={{
                href: "#",
              }}
            >
              {"Button Text"}
            </_Builtin.Link>
            <InputDropdown />
            <CellDropdown />
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
            <RecipientWidget />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Container>
    </_Component>
  );
}
