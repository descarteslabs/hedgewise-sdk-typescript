/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AvailableFuture,
  AvailableFuture$inboundSchema,
  AvailableFuture$Outbound,
  AvailableFuture$outboundSchema,
} from "./availablefuture.js";

export type GetAvailableFuturesResponse = {
  success?: true | undefined;
  data: Array<AvailableFuture>;
};

/** @internal */
export const GetAvailableFuturesResponse$inboundSchema: z.ZodType<
  GetAvailableFuturesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.literal(true).default(true).optional(),
  data: z.array(AvailableFuture$inboundSchema),
});

/** @internal */
export type GetAvailableFuturesResponse$Outbound = {
  success: true;
  data: Array<AvailableFuture$Outbound>;
};

/** @internal */
export const GetAvailableFuturesResponse$outboundSchema: z.ZodType<
  GetAvailableFuturesResponse$Outbound,
  z.ZodTypeDef,
  GetAvailableFuturesResponse
> = z.object({
  success: z.literal(true).default(true as const),
  data: z.array(AvailableFuture$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvailableFuturesResponse$ {
  /** @deprecated use `GetAvailableFuturesResponse$inboundSchema` instead. */
  export const inboundSchema = GetAvailableFuturesResponse$inboundSchema;
  /** @deprecated use `GetAvailableFuturesResponse$outboundSchema` instead. */
  export const outboundSchema = GetAvailableFuturesResponse$outboundSchema;
  /** @deprecated use `GetAvailableFuturesResponse$Outbound` instead. */
  export type Outbound = GetAvailableFuturesResponse$Outbound;
}

export function getAvailableFuturesResponseToJSON(
  getAvailableFuturesResponse: GetAvailableFuturesResponse,
): string {
  return JSON.stringify(
    GetAvailableFuturesResponse$outboundSchema.parse(
      getAvailableFuturesResponse,
    ),
  );
}

export function getAvailableFuturesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAvailableFuturesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAvailableFuturesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAvailableFuturesResponse' from JSON`,
  );
}
