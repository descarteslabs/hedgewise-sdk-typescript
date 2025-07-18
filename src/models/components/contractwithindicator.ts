/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Indicator,
  Indicator$inboundSchema,
  Indicator$Outbound,
  Indicator$outboundSchema,
} from "./indicator.js";
import {
  Tick,
  Tick$inboundSchema,
  Tick$Outbound,
  Tick$outboundSchema,
} from "./tick.js";

export type ContractWithIndicator = {
  assetSymbol: string;
  symbol: string;
  name: string;
  lastTick?: Tick | null | undefined;
  indicator: Indicator;
};

/** @internal */
export const ContractWithIndicator$inboundSchema: z.ZodType<
  ContractWithIndicator,
  z.ZodTypeDef,
  unknown
> = z.object({
  asset_symbol: z.string(),
  symbol: z.string(),
  name: z.string(),
  last_tick: z.nullable(Tick$inboundSchema).optional(),
  indicator: Indicator$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "asset_symbol": "assetSymbol",
    "last_tick": "lastTick",
  });
});

/** @internal */
export type ContractWithIndicator$Outbound = {
  asset_symbol: string;
  symbol: string;
  name: string;
  last_tick?: Tick$Outbound | null | undefined;
  indicator: Indicator$Outbound;
};

/** @internal */
export const ContractWithIndicator$outboundSchema: z.ZodType<
  ContractWithIndicator$Outbound,
  z.ZodTypeDef,
  ContractWithIndicator
> = z.object({
  assetSymbol: z.string(),
  symbol: z.string(),
  name: z.string(),
  lastTick: z.nullable(Tick$outboundSchema).optional(),
  indicator: Indicator$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    assetSymbol: "asset_symbol",
    lastTick: "last_tick",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContractWithIndicator$ {
  /** @deprecated use `ContractWithIndicator$inboundSchema` instead. */
  export const inboundSchema = ContractWithIndicator$inboundSchema;
  /** @deprecated use `ContractWithIndicator$outboundSchema` instead. */
  export const outboundSchema = ContractWithIndicator$outboundSchema;
  /** @deprecated use `ContractWithIndicator$Outbound` instead. */
  export type Outbound = ContractWithIndicator$Outbound;
}

export function contractWithIndicatorToJSON(
  contractWithIndicator: ContractWithIndicator,
): string {
  return JSON.stringify(
    ContractWithIndicator$outboundSchema.parse(contractWithIndicator),
  );
}

export function contractWithIndicatorFromJSON(
  jsonString: string,
): SafeParseResult<ContractWithIndicator, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContractWithIndicator$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContractWithIndicator' from JSON`,
  );
}
