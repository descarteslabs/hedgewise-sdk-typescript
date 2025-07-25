/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ForecastSmall,
  ForecastSmall$inboundSchema,
  ForecastSmall$Outbound,
  ForecastSmall$outboundSchema,
} from "./forecastsmall.js";
import {
  MarketDriver,
  MarketDriver$inboundSchema,
  MarketDriver$Outbound,
  MarketDriver$outboundSchema,
} from "./marketdriver.js";
import {
  MovingAverage,
  MovingAverage$inboundSchema,
  MovingAverage$Outbound,
  MovingAverage$outboundSchema,
} from "./movingaverage.js";
import {
  Tick,
  Tick$inboundSchema,
  Tick$Outbound,
  Tick$outboundSchema,
} from "./tick.js";

export type ContractWithForecastsSmall = {
  assetSymbol: string;
  symbol: string;
  name: string;
  lastTick?: Tick | null | undefined;
  forecasts: Array<ForecastSmall>;
  marketDrivers: Array<MarketDriver> | null;
  movingAverages: Array<MovingAverage> | null;
};

/** @internal */
export const ContractWithForecastsSmall$inboundSchema: z.ZodType<
  ContractWithForecastsSmall,
  z.ZodTypeDef,
  unknown
> = z.object({
  asset_symbol: z.string(),
  symbol: z.string(),
  name: z.string(),
  last_tick: z.nullable(Tick$inboundSchema).optional(),
  forecasts: z.array(ForecastSmall$inboundSchema),
  market_drivers: z.nullable(z.array(MarketDriver$inboundSchema)),
  moving_averages: z.nullable(z.array(MovingAverage$inboundSchema)),
}).transform((v) => {
  return remap$(v, {
    "asset_symbol": "assetSymbol",
    "last_tick": "lastTick",
    "market_drivers": "marketDrivers",
    "moving_averages": "movingAverages",
  });
});

/** @internal */
export type ContractWithForecastsSmall$Outbound = {
  asset_symbol: string;
  symbol: string;
  name: string;
  last_tick?: Tick$Outbound | null | undefined;
  forecasts: Array<ForecastSmall$Outbound>;
  market_drivers: Array<MarketDriver$Outbound> | null;
  moving_averages: Array<MovingAverage$Outbound> | null;
};

/** @internal */
export const ContractWithForecastsSmall$outboundSchema: z.ZodType<
  ContractWithForecastsSmall$Outbound,
  z.ZodTypeDef,
  ContractWithForecastsSmall
> = z.object({
  assetSymbol: z.string(),
  symbol: z.string(),
  name: z.string(),
  lastTick: z.nullable(Tick$outboundSchema).optional(),
  forecasts: z.array(ForecastSmall$outboundSchema),
  marketDrivers: z.nullable(z.array(MarketDriver$outboundSchema)),
  movingAverages: z.nullable(z.array(MovingAverage$outboundSchema)),
}).transform((v) => {
  return remap$(v, {
    assetSymbol: "asset_symbol",
    lastTick: "last_tick",
    marketDrivers: "market_drivers",
    movingAverages: "moving_averages",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContractWithForecastsSmall$ {
  /** @deprecated use `ContractWithForecastsSmall$inboundSchema` instead. */
  export const inboundSchema = ContractWithForecastsSmall$inboundSchema;
  /** @deprecated use `ContractWithForecastsSmall$outboundSchema` instead. */
  export const outboundSchema = ContractWithForecastsSmall$outboundSchema;
  /** @deprecated use `ContractWithForecastsSmall$Outbound` instead. */
  export type Outbound = ContractWithForecastsSmall$Outbound;
}

export function contractWithForecastsSmallToJSON(
  contractWithForecastsSmall: ContractWithForecastsSmall,
): string {
  return JSON.stringify(
    ContractWithForecastsSmall$outboundSchema.parse(contractWithForecastsSmall),
  );
}

export function contractWithForecastsSmallFromJSON(
  jsonString: string,
): SafeParseResult<ContractWithForecastsSmall, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContractWithForecastsSmall$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContractWithForecastsSmall' from JSON`,
  );
}
