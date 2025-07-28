# PerformanceMetrics
(*performanceMetrics*)

## Overview

### Available Operations

* [list](#list) - List available performance metrics and related models
* [get](#get) - Get performance related data metrics for a given futures price forecast model at a given horizon.

## list

Returns the list of success data that can be requested to assess our forecasting models performance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_available_performance_metrics" method="get" path="/v1/models/performance" -->
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.performanceMetrics.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { performanceMetricsList } from "hedgewise/funcs/performanceMetricsList.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await performanceMetricsList(hedgewise);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("performanceMetricsList failed:", res.error);
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

**Promise\<[components.GetAvailablePerformanceMetricsResponse](../../models/components/getavailableperformancemetricsresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## get

The metrics values are not provided as-is, but the relevant data and recommended aggregation method for each metric is returned.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_performance_metrics" method="get" path="/v1/models/performance/{symbol}" -->
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.performanceMetrics.get({
    symbol: "ZC",
    metric: "hitrate",
    horizon: 10,
    startDate: "2025-01-02",
    endDate: "2025-04-25",
    thresholdOnForecast: 0,
    thresholdOnActual: 0,
    sigma: 2,
    modelName: "coffee_arabica_v1_3",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { performanceMetricsGet } from "hedgewise/funcs/performanceMetricsGet.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await performanceMetricsGet(hedgewise, {
    symbol: "ZC",
    metric: "hitrate",
    horizon: 10,
    startDate: "2025-01-02",
    endDate: "2025-04-25",
    thresholdOnForecast: 0,
    thresholdOnActual: 0,
    sigma: 2,
    modelName: "coffee_arabica_v1_3",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("performanceMetricsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPerformanceMetricsRequest](../../models/operations/getperformancemetricsrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetPerformanceMetricsResponse](../../models/components/getperformancemetricsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |