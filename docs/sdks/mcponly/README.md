# McpOnly
(*mcpOnly*)

## Overview

### Available Operations

* [getFuturesPricesLlmV1AssetsFuturesPricesSymbolLlmGet](#getfuturespricesllmv1assetsfuturespricessymbolllmget) - Get historical prices for a future
* [getFuturesForecastsLlmV1AssetsFuturesForecastsSymbolLlmGet](#getfuturesforecastsllmv1assetsfuturesforecastssymbolllmget) - Get forecasts for a future
* [getFuturesLongTermForecastLlmV1AssetsFuturesForecastsSymbolLongTermForecastLlmGet](#getfutureslongtermforecastllmv1assetsfuturesforecastssymbollongtermforecastllmget) - Get long-term forecasts for a future
* [getForexDataLlmCodeLlmGet](#getforexdatallmcodellmget) - Get forex data for one currency
* [getSupplyLlm](#getsupplyllm) - Get supply data for a commodity and country

## getFuturesPricesLlmV1AssetsFuturesPricesSymbolLlmGet

Returns historical price data for a given future symbol in optimized text format.
        Prices are available for all actively traded contracts on each day.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_futures_prices_llm_v1_assets_futures_prices__symbol__llm_get" method="get" path="/v1/assets/futures/prices/{symbol}/llm" -->
```typescript
import { Hedgewise } from "hedgewise";
import { RFCDate } from "hedgewise/types";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
});

async function run() {
  await hedgewise.mcpOnly.getFuturesPricesLlmV1AssetsFuturesPricesSymbolLlmGet({
    symbol: "ZC",
    contract: "2025H",
    startDate: new RFCDate("2025-04-24"),
    endDate: new RFCDate("2025-04-24"),
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { mcpOnlyGetFuturesPricesLlmV1AssetsFuturesPricesSymbolLlmGet } from "hedgewise/funcs/mcpOnlyGetFuturesPricesLlmV1AssetsFuturesPricesSymbolLlmGet.js";
import { RFCDate } from "hedgewise/types";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await mcpOnlyGetFuturesPricesLlmV1AssetsFuturesPricesSymbolLlmGet(hedgewise, {
    symbol: "ZC",
    contract: "2025H",
    startDate: new RFCDate("2025-04-24"),
    endDate: new RFCDate("2025-04-24"),
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("mcpOnlyGetFuturesPricesLlmV1AssetsFuturesPricesSymbolLlmGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFuturesPricesLlmV1AssetsFuturesPricesSymbolLlmGetRequest](../../models/operations/getfuturespricesllmv1assetsfuturespricessymbolllmgetrequest.md)               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getFuturesForecastsLlmV1AssetsFuturesForecastsSymbolLlmGet

Returns forecast data for a given future symbol in optimized text format.
        Forecasts are available for all actively traded contracts.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_futures_forecasts_llm_v1_assets_futures_forecasts__symbol__llm_get" method="get" path="/v1/assets/futures/forecasts/{symbol}/llm" -->
```typescript
import { Hedgewise } from "hedgewise";
import { RFCDate } from "hedgewise/types";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
});

async function run() {
  await hedgewise.mcpOnly.getFuturesForecastsLlmV1AssetsFuturesForecastsSymbolLlmGet({
    symbol: "ZC",
    contract: "2025H",
    startDate: new RFCDate("2025-04-24"),
    endDate: new RFCDate("2025-04-24"),
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { mcpOnlyGetFuturesForecastsLlmV1AssetsFuturesForecastsSymbolLlmGet } from "hedgewise/funcs/mcpOnlyGetFuturesForecastsLlmV1AssetsFuturesForecastsSymbolLlmGet.js";
import { RFCDate } from "hedgewise/types";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await mcpOnlyGetFuturesForecastsLlmV1AssetsFuturesForecastsSymbolLlmGet(hedgewise, {
    symbol: "ZC",
    contract: "2025H",
    startDate: new RFCDate("2025-04-24"),
    endDate: new RFCDate("2025-04-24"),
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("mcpOnlyGetFuturesForecastsLlmV1AssetsFuturesForecastsSymbolLlmGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFuturesForecastsLlmV1AssetsFuturesForecastsSymbolLlmGetRequest](../../models/operations/getfuturesforecastsllmv1assetsfuturesforecastssymbolllmgetrequest.md)   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getFuturesLongTermForecastLlmV1AssetsFuturesForecastsSymbolLongTermForecastLlmGet

Returns long-term forecast data for a given future symbol in optimized text format.
        Long-term forecasts are directional predictions for price increases.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_futures_long_term_forecast_llm_v1_assets_futures_forecasts__symbol__long_term_forecast_llm_get" method="get" path="/v1/assets/futures/forecasts/{symbol}/long_term_forecast/llm" -->
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
});

async function run() {
  await hedgewise.mcpOnly.getFuturesLongTermForecastLlmV1AssetsFuturesForecastsSymbolLongTermForecastLlmGet({
    symbol: "ZC",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import {
  mcpOnlyGetFuturesLongTermForecastLlmV1AssetsFuturesForecastsSymbolLongTermForecastLlmGet,
} from "hedgewise/funcs/mcpOnlyGetFuturesLongTermForecastLlmV1AssetsFuturesForecastsSymbolLongTermForecastLlmGet.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await mcpOnlyGetFuturesLongTermForecastLlmV1AssetsFuturesForecastsSymbolLongTermForecastLlmGet(hedgewise, {
    symbol: "ZC",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("mcpOnlyGetFuturesLongTermForecastLlmV1AssetsFuturesForecastsSymbolLongTermForecastLlmGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.GetFuturesLongTermForecastLlmV1AssetsFuturesForecastsSymbolLongTermForecastLlmGetRequest](../../models/operations/getfutureslongtermforecastllmv1assetsfuturesforecastssymbollongtermforecastllmgetrequest.md) | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `options`                                                                                                                                                                                                                  | RequestOptions                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                         | Used to set various options for making HTTP requests.                                                                                                                                                                      |
| `options.fetchOptions`                                                                                                                                                                                                     | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                         | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed.                                             |
| `options.retries`                                                                                                                                                                                                          | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                         | Enables retrying HTTP requests under certain failure conditions.                                                                                                                                                           |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getForexDataLlmCodeLlmGet

Returns forex price history for a given currency code in optimized text format.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_forex_data_llm__code__llm_get" method="get" path="/{code}/llm" -->
```typescript
import { Hedgewise } from "hedgewise";
import { RFCDate } from "hedgewise/types";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
});

async function run() {
  await hedgewise.mcpOnly.getForexDataLlmCodeLlmGet({
    code: "EUR",
    startDate: new RFCDate("2025-04-17"),
    endDate: new RFCDate("2025-04-25"),
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { mcpOnlyGetForexDataLlmCodeLlmGet } from "hedgewise/funcs/mcpOnlyGetForexDataLlmCodeLlmGet.js";
import { RFCDate } from "hedgewise/types";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await mcpOnlyGetForexDataLlmCodeLlmGet(hedgewise, {
    code: "EUR",
    startDate: new RFCDate("2025-04-17"),
    endDate: new RFCDate("2025-04-25"),
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("mcpOnlyGetForexDataLlmCodeLlmGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetForexDataLlmCodeLlmGetRequest](../../models/operations/getforexdatallmcodellmgetrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getSupplyLlm

Returns historical and forecasted supply data for a given
        commodity and country in optimized text format. Country codes follow the UN/LOCODE standard:
        https://unece.org/trade/cefact/unlocode-code-list-country-and-territory

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_supply_llm" method="get" path="/v1/supply/{symbol}/llm" -->
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
});

async function run() {
  await hedgewise.mcpOnly.getSupplyLlm({
    symbol: "KC",
    countryCode: "BR",
    startDate: "2024-04-24",
    endDate: "2025-04-25",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { mcpOnlyGetSupplyLlm } from "hedgewise/funcs/mcpOnlyGetSupplyLlm.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
});

async function run() {
  const res = await mcpOnlyGetSupplyLlm(hedgewise, {
    symbol: "KC",
    countryCode: "BR",
    startDate: "2024-04-24",
    endDate: "2025-04-25",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("mcpOnlyGetSupplyLlm failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSupplyLlmRequest](../../models/operations/getsupplyllmrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |