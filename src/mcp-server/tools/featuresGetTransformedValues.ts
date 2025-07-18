/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { featuresGetTransformedValues } from "../../funcs/featuresGetTransformedValues.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetTransformedFeatureValuesRequest$inboundSchema,
};

export const tool$featuresGetTransformedValues: ToolDefinition<typeof args> = {
  name: "features-get-transformed-values",
  description:
    `Get the historical values for a feature transformed via the specified transformation

Provides a facility to apply transformation like computing the average of 5 years or 
        transpose the features time-series to create a year-on-year representation of the time-series
        of the features Feature codes can be obtained with the \`/v1/features\` endpoint.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await featuresGetTransformedValues(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
