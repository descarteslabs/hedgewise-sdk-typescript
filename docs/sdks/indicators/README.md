# Indicators
(*indicators*)

## Overview

### Available Operations

* [list](#list) - List available indicators

## list

Returns the list of all available market indicators that
        Hedgewise tracks or produces.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_available_indicators" method="get" path="/v1/assets/futures/indicators" -->
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.indicators.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { indicatorsList } from "hedgewise/funcs/indicatorsList.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await indicatorsList(hedgewise);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("indicatorsList failed:", res.error);
  }
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

**Promise\<[components.GetAvailableIndicatorsResponse](../../models/components/getavailableindicatorsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |