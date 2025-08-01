/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  StrategyTrajectoryResponse,
  StrategyTrajectoryResponse$inboundSchema,
  StrategyTrajectoryResponse$Outbound,
  StrategyTrajectoryResponse$outboundSchema,
} from "./strategytrajectoryresponse.js";

export type StrategyResponse = {
  id: string;
  createdAt: string | null;
  updatedAt: string | null;
  name: string | null;
  symbol: string;
  trajectories?: Array<StrategyTrajectoryResponse> | null | undefined;
};

/** @internal */
export const StrategyResponse$inboundSchema: z.ZodType<
  StrategyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  created_at: z.nullable(z.string()),
  updated_at: z.nullable(z.string()),
  name: z.nullable(z.string()),
  symbol: z.string(),
  trajectories: z.nullable(z.array(StrategyTrajectoryResponse$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type StrategyResponse$Outbound = {
  id: string;
  created_at: string | null;
  updated_at: string | null;
  name: string | null;
  symbol: string;
  trajectories?: Array<StrategyTrajectoryResponse$Outbound> | null | undefined;
};

/** @internal */
export const StrategyResponse$outboundSchema: z.ZodType<
  StrategyResponse$Outbound,
  z.ZodTypeDef,
  StrategyResponse
> = z.object({
  id: z.string(),
  createdAt: z.nullable(z.string()),
  updatedAt: z.nullable(z.string()),
  name: z.nullable(z.string()),
  symbol: z.string(),
  trajectories: z.nullable(z.array(StrategyTrajectoryResponse$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StrategyResponse$ {
  /** @deprecated use `StrategyResponse$inboundSchema` instead. */
  export const inboundSchema = StrategyResponse$inboundSchema;
  /** @deprecated use `StrategyResponse$outboundSchema` instead. */
  export const outboundSchema = StrategyResponse$outboundSchema;
  /** @deprecated use `StrategyResponse$Outbound` instead. */
  export type Outbound = StrategyResponse$Outbound;
}

export function strategyResponseToJSON(
  strategyResponse: StrategyResponse,
): string {
  return JSON.stringify(
    StrategyResponse$outboundSchema.parse(strategyResponse),
  );
}

export function strategyResponseFromJSON(
  jsonString: string,
): SafeParseResult<StrategyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => StrategyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'StrategyResponse' from JSON`,
  );
}
