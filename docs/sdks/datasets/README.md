# Datasets
(*datasets*)

## Overview

### Available Operations

* [getDatasets](#getdatasets) - Get a list of all premium and standard datasets

## getDatasets

Returns a list of all datasets. Datasets are collections of features grouped by interest, relevance, commodity, and/or asset class.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_datasets" method="get" path="/v1/datasets" -->
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.datasets.getDatasets({
    symbols: [
      "KC",
    ],
    datasetKeys: [
      "technical_macro_v1_2025",
    ],
    statisticTypes: [
      "raw_value",
    ],
    variableTypes: [
      "price",
    ],
    sources: [
      "CFTC",
    ],
    countries: [
      "usa",
    ],
    frequencies: [
      "daily",
    ],
    phenologyStages: [
      "harvest",
    ],
    limit: 979211,
    offset: 968616,
    search: "coffee",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { datasetsGetDatasets } from "hedgewise/funcs/datasetsGetDatasets.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await datasetsGetDatasets(hedgewise, {
    symbols: [
      "KC",
    ],
    datasetKeys: [
      "technical_macro_v1_2025",
    ],
    statisticTypes: [
      "raw_value",
    ],
    variableTypes: [
      "price",
    ],
    sources: [
      "CFTC",
    ],
    countries: [
      "usa",
    ],
    frequencies: [
      "daily",
    ],
    phenologyStages: [
      "harvest",
    ],
    limit: 979211,
    offset: 968616,
    search: "coffee",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("datasetsGetDatasets failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetDatasetsRequest](../../models/operations/getdatasetsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetDatasetsResponse](../../models/components/getdatasetsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |