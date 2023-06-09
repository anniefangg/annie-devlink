import * as React from "react";
import * as Types from "./types";

declare function BulkPaymentWidget(props: {
  as?: React.ElementType;
  widgetTitle?: Types.Devlink.RuntimeProps;
  bulkPaymentWidgetTitle?: React.ReactNode;
}): React.JSX.Element;
