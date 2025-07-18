/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetAvailableFeaturesRequest = {
  /**
   * Futures contract symbol
   */
  symbol?: string | null | undefined;
  /**
   * Dataset key to which the features
   */
  datasetKey?: string | null | undefined;
};

/** @internal */
export const GetAvailableFeaturesRequest$inboundSchema: z.ZodType<
  GetAvailableFeaturesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  symbol: z.nullable(z.string()).optional(),
  dataset_key: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "dataset_key": "datasetKey",
  });
});

/** @internal */
export type GetAvailableFeaturesRequest$Outbound = {
  symbol?: string | null | undefined;
  dataset_key?: string | null | undefined;
};

/** @internal */
export const GetAvailableFeaturesRequest$outboundSchema: z.ZodType<
  GetAvailableFeaturesRequest$Outbound,
  z.ZodTypeDef,
  GetAvailableFeaturesRequest
> = z.object({
  symbol: z.nullable(z.string()).optional(),
  datasetKey: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    datasetKey: "dataset_key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAvailableFeaturesRequest$ {
  /** @deprecated use `GetAvailableFeaturesRequest$inboundSchema` instead. */
  export const inboundSchema = GetAvailableFeaturesRequest$inboundSchema;
  /** @deprecated use `GetAvailableFeaturesRequest$outboundSchema` instead. */
  export const outboundSchema = GetAvailableFeaturesRequest$outboundSchema;
  /** @deprecated use `GetAvailableFeaturesRequest$Outbound` instead. */
  export type Outbound = GetAvailableFeaturesRequest$Outbound;
}

export function getAvailableFeaturesRequestToJSON(
  getAvailableFeaturesRequest: GetAvailableFeaturesRequest,
): string {
  return JSON.stringify(
    GetAvailableFeaturesRequest$outboundSchema.parse(
      getAvailableFeaturesRequest,
    ),
  );
}

export function getAvailableFeaturesRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetAvailableFeaturesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAvailableFeaturesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAvailableFeaturesRequest' from JSON`,
  );
}
