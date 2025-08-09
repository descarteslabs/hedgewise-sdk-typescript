# SectorIndices
(*sectorIndices*)

## Overview

### Available Operations

* [get](#get) - Get the proprietary value of the sector index requested

## get

Return the selected sector or asset class index historical values using a proprietary methodology and composition

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_asset_class_index" method="get" path="/v1/sector_index/{asset_class_symbol}" -->
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await hedgewise.sectorIndices.get({
    assetClassSymbol: "GRN, SFT, CUR, ENR, OIL, PRD",
    methodology: "riskparity",
    startDate: "2025-03-24",
    endDate: "2025-04-25",
    freq: "weekly",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { sectorIndicesGet } from "hedgewise/funcs/sectorIndicesGet.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await sectorIndicesGet(hedgewise, {
    assetClassSymbol: "GRN, SFT, CUR, ENR, OIL, PRD",
    methodology: "riskparity",
    startDate: "2025-03-24",
    endDate: "2025-04-25",
    freq: "weekly",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("sectorIndicesGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssetClassIndexRequest](../../models/operations/getassetclassindexrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetSectorIndexHistoricalResponse](../../models/components/getsectorindexhistoricalresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |