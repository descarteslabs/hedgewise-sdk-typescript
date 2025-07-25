/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ForecastTick = {
  date: Date;
  targetDateContract: string;
  closePrice: number;
  lowerBound1Sigma?: number | null | undefined;
  upperBound1Sigma?: number | null | undefined;
  lowerBound2Sigma?: number | null | undefined;
  upperBound2Sigma?: number | null | undefined;
  lowerBound3Sigma?: number | null | undefined;
  upperBound3Sigma?: number | null | undefined;
  interpolated?: boolean | null | undefined;
};

/** @internal */
export const ForecastTick$inboundSchema: z.ZodType<
  ForecastTick,
  z.ZodTypeDef,
  unknown
> = z.object({
  date: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  target_date_contract: z.string(),
  close_price: z.number(),
  lower_bound_1_sigma: z.nullable(z.number()).optional(),
  upper_bound_1_sigma: z.nullable(z.number()).optional(),
  lower_bound_2_sigma: z.nullable(z.number()).optional(),
  upper_bound_2_sigma: z.nullable(z.number()).optional(),
  lower_bound_3_sigma: z.nullable(z.number()).optional(),
  upper_bound_3_sigma: z.nullable(z.number()).optional(),
  interpolated: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "target_date_contract": "targetDateContract",
    "close_price": "closePrice",
    "lower_bound_1_sigma": "lowerBound1Sigma",
    "upper_bound_1_sigma": "upperBound1Sigma",
    "lower_bound_2_sigma": "lowerBound2Sigma",
    "upper_bound_2_sigma": "upperBound2Sigma",
    "lower_bound_3_sigma": "lowerBound3Sigma",
    "upper_bound_3_sigma": "upperBound3Sigma",
  });
});

/** @internal */
export type ForecastTick$Outbound = {
  date: string;
  target_date_contract: string;
  close_price: number;
  lower_bound_1_sigma?: number | null | undefined;
  upper_bound_1_sigma?: number | null | undefined;
  lower_bound_2_sigma?: number | null | undefined;
  upper_bound_2_sigma?: number | null | undefined;
  lower_bound_3_sigma?: number | null | undefined;
  upper_bound_3_sigma?: number | null | undefined;
  interpolated?: boolean | null | undefined;
};

/** @internal */
export const ForecastTick$outboundSchema: z.ZodType<
  ForecastTick$Outbound,
  z.ZodTypeDef,
  ForecastTick
> = z.object({
  date: z.date().transform(v => v.toISOString()),
  targetDateContract: z.string(),
  closePrice: z.number(),
  lowerBound1Sigma: z.nullable(z.number()).optional(),
  upperBound1Sigma: z.nullable(z.number()).optional(),
  lowerBound2Sigma: z.nullable(z.number()).optional(),
  upperBound2Sigma: z.nullable(z.number()).optional(),
  lowerBound3Sigma: z.nullable(z.number()).optional(),
  upperBound3Sigma: z.nullable(z.number()).optional(),
  interpolated: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    targetDateContract: "target_date_contract",
    closePrice: "close_price",
    lowerBound1Sigma: "lower_bound_1_sigma",
    upperBound1Sigma: "upper_bound_1_sigma",
    lowerBound2Sigma: "lower_bound_2_sigma",
    upperBound2Sigma: "upper_bound_2_sigma",
    lowerBound3Sigma: "lower_bound_3_sigma",
    upperBound3Sigma: "upper_bound_3_sigma",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForecastTick$ {
  /** @deprecated use `ForecastTick$inboundSchema` instead. */
  export const inboundSchema = ForecastTick$inboundSchema;
  /** @deprecated use `ForecastTick$outboundSchema` instead. */
  export const outboundSchema = ForecastTick$outboundSchema;
  /** @deprecated use `ForecastTick$Outbound` instead. */
  export type Outbound = ForecastTick$Outbound;
}

export function forecastTickToJSON(forecastTick: ForecastTick): string {
  return JSON.stringify(ForecastTick$outboundSchema.parse(forecastTick));
}

export function forecastTickFromJSON(
  jsonString: string,
): SafeParseResult<ForecastTick, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ForecastTick$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ForecastTick' from JSON`,
  );
}
