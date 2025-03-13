# Forex
(*forex*)

## Overview

### Available Operations

* [listPrices](#listprices) - Get most recent forex prices for all currencies
* [getPrices](#getprices) - Get forex data for one currency

## listPrices

Get most recent forex prices for all currencies

### Example Usage

```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await hedgewise.forex.listPrices();

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { forexListPrices } from "hedgewise/funcs/forexListPrices.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await forexListPrices(hedgewise);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetAllForexDataResponse](../../models/components/getallforexdataresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getPrices

Returns forex price history for a given currency code.

### Example Usage

```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await hedgewise.forex.getPrices({
    code: "EUR",
    startDate: "2025-03-06",
    endDate: "2025-03-13",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { forexGetPrices } from "hedgewise/funcs/forexGetPrices.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await forexGetPrices(hedgewise, {
    code: "EUR",
    startDate: "2025-03-06",
    endDate: "2025-03-13",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetForexPricesRequest](../../models/operations/getforexpricesrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetForexDataResponse](../../models/components/getforexdataresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |