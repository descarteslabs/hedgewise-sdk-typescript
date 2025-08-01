/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { HedgewiseError } from "./hedgewiseerror.js";

export type GetUserRegistrationReponseErrorData = {
  success: true;
  data: string;
};

export class GetUserRegistrationReponseError extends HedgewiseError {
  success: true;
  data: string;

  /** The original data that was passed to this error instance. */
  data$: GetUserRegistrationReponseErrorData;

  constructor(
    err: GetUserRegistrationReponseErrorData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message, httpMeta);
    this.data$ = err;
    this.success = err.success;
    this.data = err.data;

    this.name = "GetUserRegistrationReponseError";
  }
}

/** @internal */
export const GetUserRegistrationReponseError$inboundSchema: z.ZodType<
  GetUserRegistrationReponseError,
  z.ZodTypeDef,
  unknown
> = z.object({
  success: z.literal(true).default(true),
  data: z.string(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    return new GetUserRegistrationReponseError(v, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type GetUserRegistrationReponseError$Outbound = {
  success: true;
  data: string;
};

/** @internal */
export const GetUserRegistrationReponseError$outboundSchema: z.ZodType<
  GetUserRegistrationReponseError$Outbound,
  z.ZodTypeDef,
  GetUserRegistrationReponseError
> = z.instanceof(GetUserRegistrationReponseError)
  .transform(v => v.data$)
  .pipe(z.object({
    success: z.literal(true).default(true as const),
    data: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUserRegistrationReponseError$ {
  /** @deprecated use `GetUserRegistrationReponseError$inboundSchema` instead. */
  export const inboundSchema = GetUserRegistrationReponseError$inboundSchema;
  /** @deprecated use `GetUserRegistrationReponseError$outboundSchema` instead. */
  export const outboundSchema = GetUserRegistrationReponseError$outboundSchema;
  /** @deprecated use `GetUserRegistrationReponseError$Outbound` instead. */
  export type Outbound = GetUserRegistrationReponseError$Outbound;
}
