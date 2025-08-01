/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type GetDatasetsRequest = {
  /**
   * List of futures contract symbols
   */
  symbols?: Array<string> | undefined;
  /**
   * Dataset key to which the features belong
   */
  datasetKeys?: Array<string> | undefined;
  /**
   * Filter by statistic_type on all features attached to the dataset
   */
  statisticTypes?: Array<string> | undefined;
  /**
   * Filter by variable_type on all features attached to the dataset
   */
  variableTypes?: Array<string> | undefined;
  /**
   * Filter by source on all features attached to the dataset
   */
  sources?: Array<string> | undefined;
  /**
   * Filter by country on all features attached to the dataset
   */
  countries?: Array<string> | undefined;
  /**
   * Filter by frequency on all features attached to the dataset
   */
  frequencies?: Array<string> | undefined;
  /**
   * Filter by phenology_stage or phenology_phase on all features attached to the dataset
   */
  phenologyStages?: Array<string> | undefined;
  /**
   * Maximum number of results to return (required). Maximum is 1000.
   */
  limit: number;
  /**
   * Number of results to skip before returning (required)
   */
  offset: number;
  /**
   * Search string to match against feature fields.
   */
  search?: string | null | undefined;
};

/** @internal */
export const GetDatasetsRequest$inboundSchema: z.ZodType<
  GetDatasetsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  symbols: z.array(z.string()).optional(),
  dataset_keys: z.array(z.string()).optional(),
  statistic_types: z.array(z.string()).optional(),
  variable_types: z.array(z.string()).optional(),
  sources: z.array(z.string()).optional(),
  countries: z.array(z.string()).optional(),
  frequencies: z.array(z.string()).optional(),
  phenology_stages: z.array(z.string()).optional(),
  limit: z.number().int(),
  offset: z.number().int(),
  search: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "dataset_keys": "datasetKeys",
    "statistic_types": "statisticTypes",
    "variable_types": "variableTypes",
    "phenology_stages": "phenologyStages",
  });
});

/** @internal */
export type GetDatasetsRequest$Outbound = {
  symbols?: Array<string> | undefined;
  dataset_keys?: Array<string> | undefined;
  statistic_types?: Array<string> | undefined;
  variable_types?: Array<string> | undefined;
  sources?: Array<string> | undefined;
  countries?: Array<string> | undefined;
  frequencies?: Array<string> | undefined;
  phenology_stages?: Array<string> | undefined;
  limit: number;
  offset: number;
  search?: string | null | undefined;
};

/** @internal */
export const GetDatasetsRequest$outboundSchema: z.ZodType<
  GetDatasetsRequest$Outbound,
  z.ZodTypeDef,
  GetDatasetsRequest
> = z.object({
  symbols: z.array(z.string()).optional(),
  datasetKeys: z.array(z.string()).optional(),
  statisticTypes: z.array(z.string()).optional(),
  variableTypes: z.array(z.string()).optional(),
  sources: z.array(z.string()).optional(),
  countries: z.array(z.string()).optional(),
  frequencies: z.array(z.string()).optional(),
  phenologyStages: z.array(z.string()).optional(),
  limit: z.number().int(),
  offset: z.number().int(),
  search: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    datasetKeys: "dataset_keys",
    statisticTypes: "statistic_types",
    variableTypes: "variable_types",
    phenologyStages: "phenology_stages",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDatasetsRequest$ {
  /** @deprecated use `GetDatasetsRequest$inboundSchema` instead. */
  export const inboundSchema = GetDatasetsRequest$inboundSchema;
  /** @deprecated use `GetDatasetsRequest$outboundSchema` instead. */
  export const outboundSchema = GetDatasetsRequest$outboundSchema;
  /** @deprecated use `GetDatasetsRequest$Outbound` instead. */
  export type Outbound = GetDatasetsRequest$Outbound;
}

export function getDatasetsRequestToJSON(
  getDatasetsRequest: GetDatasetsRequest,
): string {
  return JSON.stringify(
    GetDatasetsRequest$outboundSchema.parse(getDatasetsRequest),
  );
}

export function getDatasetsRequestFromJSON(
  jsonString: string,
): SafeParseResult<GetDatasetsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDatasetsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDatasetsRequest' from JSON`,
  );
}
