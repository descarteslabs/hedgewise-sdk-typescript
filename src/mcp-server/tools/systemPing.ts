/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { systemPing } from "../../funcs/systemPing.js";
import { formatResult, ToolDefinition } from "../tools.js";

export const tool$systemPing: ToolDefinition = {
  name: "system-ping",
  description: `Ping`,
  tool: async (client, ctx) => {
    const [result, apiCall] = await systemPing(
      client,
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
