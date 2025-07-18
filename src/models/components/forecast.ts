/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ForecastTick,
  ForecastTick$inboundSchema,
  ForecastTick$Outbound,
  ForecastTick$outboundSchema,
} from "./forecasttick.js";

export type Forecast = {
  model: string;
  forecastDate: Date;
  closePriceTrajectory: Array<ForecastTick>;
};

/** @internal */
export const Forecast$inboundSchema: z.ZodType<
  Forecast,
  z.ZodTypeDef,
  unknown
> = z.object({
  model: z.string(),
  forecast_date: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  close_price_trajectory: z.array(ForecastTick$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "forecast_date": "forecastDate",
    "close_price_trajectory": "closePriceTrajectory",
  });
});

/** @internal */
export type Forecast$Outbound = {
  model: string;
  forecast_date: string;
  close_price_trajectory: Array<ForecastTick$Outbound>;
};

/** @internal */
export const Forecast$outboundSchema: z.ZodType<
  Forecast$Outbound,
  z.ZodTypeDef,
  Forecast
> = z.object({
  model: z.string(),
  forecastDate: z.date().transform(v => v.toISOString()),
  closePriceTrajectory: z.array(ForecastTick$outboundSchema),
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
export namespace Forecast$ {
  /** @deprecated use `Forecast$inboundSchema` instead. */
  export const inboundSchema = Forecast$inboundSchema;
  /** @deprecated use `Forecast$outboundSchema` instead. */
  export const outboundSchema = Forecast$outboundSchema;
  /** @deprecated use `Forecast$Outbound` instead. */
  export type Outbound = Forecast$Outbound;
}

export function forecastToJSON(forecast: Forecast): string {
  return JSON.stringify(Forecast$outboundSchema.parse(forecast));
}

export function forecastFromJSON(
  jsonString: string,
): SafeParseResult<Forecast, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Forecast$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Forecast' from JSON`,
  );
}
