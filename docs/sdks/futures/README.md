# Futures
(*futures*)

## Overview

### Available Operations

* [list](#list) - List all available futures
* [getCalendar](#getcalendar) - Get trading calendar for a future
* [getForecasts](#getforecasts) - Get forecasts for a future
* [getLongTermForecast](#getlongtermforecast) - Get long-term forecast for a future
* [getHedgeIndicator](#gethedgeindicator) - Get hedge indicator for a future
* [getPrices](#getprices) - Get historical prices for a future

## list

Returns a list of all available future symbols that
        Hedgewise tracks.

### Example Usage

```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.futures.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { futuresList } from "hedgewise/funcs/futuresList.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await futuresList(hedgewise);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("futuresList failed:", res.error);
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

**Promise\<[components.GetAvailableFuturesResponse](../../models/components/getavailablefuturesresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.APIError | 4XX, 5XX        | \*/\*           |

## getCalendar

Returns a list of all trading days for a given future
        symbol, based on the exchange where its contracts are traded. Prices,
        forecasts, and indicators are available for each of these days.

### Example Usage

```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.futures.getCalendar({
    symbol: "ZC",
    startDate: "2025-04-17",
    endDate: "2025-04-25",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { futuresGetCalendar } from "hedgewise/funcs/futuresGetCalendar.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await futuresGetCalendar(hedgewise, {
    symbol: "ZC",
    startDate: "2025-04-17",
    endDate: "2025-04-25",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("futuresGetCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAssetCalendarRequest](../../models/operations/getassetcalendarrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetAssetCalendarResponse](../../models/components/getassetcalendarresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getForecasts

Returns a list of all forecasts made for a given future
        symbol. Forecasts are made at various horizons, and can be interpolated
        to daily values. Forecasted prices, estimated lower and upper bounds,
        and market drivers are available for each forecast.

### Example Usage

```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.futures.getForecasts({
    symbol: "ZC",
    startDate: "2025-04-24",
    endDate: "2025-04-24",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { futuresGetForecasts } from "hedgewise/funcs/futuresGetForecasts.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await futuresGetForecasts(hedgewise, {
    symbol: "ZC",
    startDate: "2025-04-24",
    endDate: "2025-04-24",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("futuresGetForecasts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFuturesForecastsRequest](../../models/operations/getfuturesforecastsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetAssetForecastsResponse](../../models/components/getassetforecastsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getLongTermForecast

Returns a list of booleans indicating whether the price of the given future is expected to increase over the next 12 months.

### Example Usage

```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.futures.getLongTermForecast({
    symbol: "ZC",
    horizon: 12,
    startDate: "2025-03-24",
    endDate: "2025-04-25",
    rolloverType: "hist_vol",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { futuresGetLongTermForecast } from "hedgewise/funcs/futuresGetLongTermForecast.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await futuresGetLongTermForecast(hedgewise, {
    symbol: "ZC",
    horizon: 12,
    startDate: "2025-03-24",
    endDate: "2025-04-25",
    rolloverType: "hist_vol",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("futuresGetLongTermForecast failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetLongTermForecastRequest](../../models/operations/getlongtermforecastrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetAssetLongTermForecastsResponse](../../models/components/getassetlongtermforecastsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getHedgeIndicator

Returns a list of values indicating the likelihood that the
        future price will increase, indicating that this is a good time to
        hedge. The indicator is quintiles of the ratio of the forecasted price
        trajectory (out to a specified horizon) to the forecasted ulcer index,
        where the quintiles are given by historical values of this indicator
        back a specified number of lookback days.

### Example Usage

```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.futures.getHedgeIndicator({
    symbol: "ZC",
    contract: "2025H",
    hedgeHorizon: 86,
    startDate: "2025-03-24",
    endDate: "2025-04-24",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { futuresGetHedgeIndicator } from "hedgewise/funcs/futuresGetHedgeIndicator.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await futuresGetHedgeIndicator(hedgewise, {
    symbol: "ZC",
    contract: "2025H",
    hedgeHorizon: 86,
    startDate: "2025-03-24",
    endDate: "2025-04-24",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("futuresGetHedgeIndicator failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHedgeIndicatorRequest](../../models/operations/gethedgeindicatorrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetHedgeIndicatorResponse](../../models/components/gethedgeindicatorresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |

## getPrices

Returns historical price data for a given future symbol.
        Prices are available for all actively traded contracts on each day.

### Example Usage

```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.futures.getPrices({
    symbol: "ZC",
    contract: "2025H",
    startDate: "2025-04-24",
    endDate: "2025-04-24",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { HedgewiseCore } from "hedgewise/core.js";
import { futuresGetPrices } from "hedgewise/funcs/futuresGetPrices.js";

// Use `HedgewiseCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const hedgewise = new HedgewiseCore({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const res = await futuresGetPrices(hedgewise, {
    symbol: "ZC",
    contract: "2025H",
    startDate: "2025-04-24",
    endDate: "2025-04-24",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("futuresGetPrices failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFuturesPricesRequest](../../models/operations/getfuturespricesrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetAssetPricesResponse](../../models/components/getassetpricesresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.APIError            | 4XX, 5XX                   | \*/\*                      |