import * as React from "react";
import * as Types from "./types";

declare function RecipientCardRow(props: {
  as?: React.ElementType;
  bulkPaymentRowHeader?: Types.Devlink.RuntimeProps;
  bulkPaymentStatus?: Types.Devlink.RuntimeProps;
  bulkPaymentName?: Types.Devlink.Slot;
  dateCompletedOn?: Types.Devlink.RuntimeProps;
}): React.JSX.Element;
