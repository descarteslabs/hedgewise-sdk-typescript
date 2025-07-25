/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Data,
  Data$inboundSchema,
  Data$Outbound,
  Data$outboundSchema,
} from "./data.js";

export type GetDataResponse = {
  success?: true | undefined;
  data: Data;
};

/** @internal */
export const GetDataResponse$inboundSchema: z.ZodType<
  GetDataResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.literal(true).default(true).optional(),
  data: Data$inboundSchema,
});

/** @internal */
export type GetDataResponse$Outbound = {
  success: true;
  data: Data$Outbound;
};

/** @internal */
export const GetDataResponse$outboundSchema: z.ZodType<
  GetDataResponse$Outbound,
  z.ZodTypeDef,
  GetDataResponse
> = z.object({
  success: z.literal(true).default(true as const),
  data: Data$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDataResponse$ {
  /** @deprecated use `GetDataResponse$inboundSchema` instead. */
  export const inboundSchema = GetDataResponse$inboundSchema;
  /** @deprecated use `GetDataResponse$outboundSchema` instead. */
  export const outboundSchema = GetDataResponse$outboundSchema;
  /** @deprecated use `GetDataResponse$Outbound` instead. */
  export type Outbound = GetDataResponse$Outbound;
}

export function getDataResponseToJSON(
  getDataResponse: GetDataResponse,
): string {
  return JSON.stringify(GetDataResponse$outboundSchema.parse(getDataResponse));
}

export function getDataResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDataResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDataResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDataResponse' from JSON`,
  );
}
