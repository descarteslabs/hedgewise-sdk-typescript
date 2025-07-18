/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { futuresGetForecasts } from "../../funcs/futuresGetForecasts.js";
import * as operations from "../../models/operations/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: operations.GetFuturesForecastsRequest$inboundSchema,
};

export const tool$futuresGetForecasts: ToolDefinition<typeof args> = {
  name: "futures-get-forecasts",
  description: `Get forecasts for a future

Returns a list of all forecasts made for a given future
        symbol. Forecasts are made at various horizons, and can be interpolated
        to daily values. Forecasted prices, estimated lower and upper bounds,
        and market drivers are available for each forecast.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await futuresGetForecasts(
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
