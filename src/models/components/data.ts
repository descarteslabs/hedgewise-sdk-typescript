/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Asset,
  Asset$inboundSchema,
  Asset$Outbound,
  Asset$outboundSchema,
} from "./asset.js";
import {
  AssetClass,
  AssetClass$inboundSchema,
  AssetClass$Outbound,
  AssetClass$outboundSchema,
} from "./assetclass.js";
import {
  Contract,
  Contract$inboundSchema,
  Contract$Outbound,
  Contract$outboundSchema,
} from "./contract.js";

export type Data = {
  assetClasses: Array<AssetClass>;
  assets: Array<Asset>;
  contracts: Array<Contract>;
};

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .object({
    asset_classes: z.array(AssetClass$inboundSchema),
    assets: z.array(Asset$inboundSchema),
    contracts: z.array(Contract$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "asset_classes": "assetClasses",
    });
  });

/** @internal */
export type Data$Outbound = {
  asset_classes: Array<AssetClass$Outbound>;
  assets: Array<Asset$Outbound>;
  contracts: Array<Contract$Outbound>;
};

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.object({
    assetClasses: z.array(AssetClass$outboundSchema),
    assets: z.array(Asset$outboundSchema),
    contracts: z.array(Contract$outboundSchema),
  }).transform((v) => {
    return remap$(v, {
      assetClasses: "asset_classes",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data$ {
  /** @deprecated use `Data$inboundSchema` instead. */
  export const inboundSchema = Data$inboundSchema;
  /** @deprecated use `Data$outboundSchema` instead. */
  export const outboundSchema = Data$outboundSchema;
  /** @deprecated use `Data$Outbound` instead. */
  export type Outbound = Data$Outbound;
}

export function dataToJSON(data: Data): string {
  return JSON.stringify(Data$outboundSchema.parse(data));
}

export function dataFromJSON(
  jsonString: string,
): SafeParseResult<Data, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data' from JSON`,
  );
}
