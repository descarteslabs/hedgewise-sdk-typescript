/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ForecastTickSmall,
  ForecastTickSmall$inboundSchema,
  ForecastTickSmall$Outbound,
  ForecastTickSmall$outboundSchema,
} from "./forecastticksmall.js";

export type ForecastSmall = {
  model: string;
  forecastDate: Date;
  closePriceTrajectory: Array<ForecastTickSmall>;
};

/** @internal */
export const ForecastSmall$inboundSchema: z.ZodType<
  ForecastSmall,
  z.ZodTypeDef,
  unknown
> = z.object({
  model: z.string(),
  forecast_date: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  close_price_trajectory: z.array(ForecastTickSmall$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "forecast_date": "forecastDate",
    "close_price_trajectory": "closePriceTrajectory",
  });
});

/** @internal */
export type ForecastSmall$Outbound = {
  model: string;
  forecast_date: string;
  close_price_trajectory: Array<ForecastTickSmall$Outbound>;
};

/** @internal */
export const ForecastSmall$outboundSchema: z.ZodType<
  ForecastSmall$Outbound,
  z.ZodTypeDef,
  ForecastSmall
> = z.object({
  model: z.string(),
  forecastDate: z.date().transform(v => v.toISOString()),
  closePriceTrajectory: z.array(ForecastTickSmall$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    forecastDate: "forecast_date",
    closePriceTrajectory: "close_price_trajectory",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ForecastSmall$ {
  /** @deprecated use `ForecastSmall$inboundSchema` instead. */
  export const inboundSchema = ForecastSmall$inboundSchema;
  /** @deprecated use `ForecastSmall$outboundSchema` instead. */
  export const outboundSchema = ForecastSmall$outboundSchema;
  /** @deprecated use `ForecastSmall$Outbound` instead. */
  export type Outbound = ForecastSmall$Outbound;
}

export function forecastSmallToJSON(forecastSmall: ForecastSmall): string {
  return JSON.stringify(ForecastSmall$outboundSchema.parse(forecastSmall));
}

export function forecastSmallFromJSON(
  jsonString: string,
): SafeParseResult<ForecastSmall, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ForecastSmall$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ForecastSmall' from JSON`,
  );
}
