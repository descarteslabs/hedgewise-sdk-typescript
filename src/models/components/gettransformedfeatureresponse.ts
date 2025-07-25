/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  FeatureTransformedHistoricalData,
  FeatureTransformedHistoricalData$inboundSchema,
  FeatureTransformedHistoricalData$Outbound,
  FeatureTransformedHistoricalData$outboundSchema,
} from "./featuretransformedhistoricaldata.js";

export type GetTransformedFeatureResponse = {
  success?: true | undefined;
  data: Array<FeatureTransformedHistoricalData>;
};

/** @internal */
export const GetTransformedFeatureResponse$inboundSchema: z.ZodType<
  GetTransformedFeatureResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.literal(true).default(true).optional(),
  data: z.array(FeatureTransformedHistoricalData$inboundSchema),
});

/** @internal */
export type GetTransformedFeatureResponse$Outbound = {
  success: true;
  data: Array<FeatureTransformedHistoricalData$Outbound>;
};

/** @internal */
export const GetTransformedFeatureResponse$outboundSchema: z.ZodType<
  GetTransformedFeatureResponse$Outbound,
  z.ZodTypeDef,
  GetTransformedFeatureResponse
> = z.object({
  success: z.literal(true).default(true as const),
  data: z.array(FeatureTransformedHistoricalData$outboundSchema),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetTransformedFeatureResponse$ {
  /** @deprecated use `GetTransformedFeatureResponse$inboundSchema` instead. */
  export const inboundSchema = GetTransformedFeatureResponse$inboundSchema;
  /** @deprecated use `GetTransformedFeatureResponse$outboundSchema` instead. */
  export const outboundSchema = GetTransformedFeatureResponse$outboundSchema;
  /** @deprecated use `GetTransformedFeatureResponse$Outbound` instead. */
  export type Outbound = GetTransformedFeatureResponse$Outbound;
}

export function getTransformedFeatureResponseToJSON(
  getTransformedFeatureResponse: GetTransformedFeatureResponse,
): string {
  return JSON.stringify(
    GetTransformedFeatureResponse$outboundSchema.parse(
      getTransformedFeatureResponse,
    ),
  );
}

export function getTransformedFeatureResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTransformedFeatureResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTransformedFeatureResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTransformedFeatureResponse' from JSON`,
  );
}
