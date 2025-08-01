/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type PostFuturesForecastsRequest = {
  /**
   * Future symbol
   */
  symbol: string;
  /**
   * Return a concatenated version of the requested trajectories as if it was coming from a single model. Some restrictions apply
   */
  concatenateTrajectories?: boolean | undefined;
  postAssetForecastsRequest: components.PostAssetForecastsRequest;
};

/** @internal */
export const PostFuturesForecastsRequest$inboundSchema: z.ZodType<
  PostFuturesForecastsRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  symbol: z.string(),
  concatenate_trajectories: z.boolean().default(false),
  PostAssetForecastsRequest: components.PostAssetForecastsRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "concatenate_trajectories": "concatenateTrajectories",
    "PostAssetForecastsRequest": "postAssetForecastsRequest",
  });
});

/** @internal */
export type PostFuturesForecastsRequest$Outbound = {
  symbol: string;
  concatenate_trajectories: boolean;
  PostAssetForecastsRequest: components.PostAssetForecastsRequest$Outbound;
};

/** @internal */
export const PostFuturesForecastsRequest$outboundSchema: z.ZodType<
  PostFuturesForecastsRequest$Outbound,
  z.ZodTypeDef,
  PostFuturesForecastsRequest
> = z.object({
  symbol: z.string(),
  concatenateTrajectories: z.boolean().default(false),
  postAssetForecastsRequest:
    components.PostAssetForecastsRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    concatenateTrajectories: "concatenate_trajectories",
    postAssetForecastsRequest: "PostAssetForecastsRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PostFuturesForecastsRequest$ {
  /** @deprecated use `PostFuturesForecastsRequest$inboundSchema` instead. */
  export const inboundSchema = PostFuturesForecastsRequest$inboundSchema;
  /** @deprecated use `PostFuturesForecastsRequest$outboundSchema` instead. */
  export const outboundSchema = PostFuturesForecastsRequest$outboundSchema;
  /** @deprecated use `PostFuturesForecastsRequest$Outbound` instead. */
  export type Outbound = PostFuturesForecastsRequest$Outbound;
}

export function postFuturesForecastsRequestToJSON(
  postFuturesForecastsRequest: PostFuturesForecastsRequest,
): string {
  return JSON.stringify(
    PostFuturesForecastsRequest$outboundSchema.parse(
      postFuturesForecastsRequest,
    ),
  );
}

export function postFuturesForecastsRequestFromJSON(
  jsonString: string,
): SafeParseResult<PostFuturesForecastsRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PostFuturesForecastsRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PostFuturesForecastsRequest' from JSON`,
  );
}
