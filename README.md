# hedgewise

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *hedgewise* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=hedgewise&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/earthdaily/hedgewise). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

Hedgewise: Hedgewise API

Access to Hedgewise data provided by EarthDaily.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [hedgewise](#hedgewise)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add hedgewise
```

### PNPM

```bash
pnpm add hedgewise
```

### Bun

```bash
bun add hedgewise
```

### Yarn

```bash
yarn add hedgewise zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "Hedgewise": {
      "command": "npx",
      "args": [
        "-y", "--package", "hedgewise",
        "--",
        "mcp", "start",
        "--server-url", "...",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "Hedgewise": {
      "command": "npx",
      "args": [
        "-y", "--package", "hedgewise",
        "--",
        "mcp", "start",
        "--server-url", "...",
        "--bearer-auth", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package hedgewise -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.postFuturesForecasts({
    symbol: "ZC",
    postAssetForecastsRequest: {
      strategy: [
        {
          startDate: "2025-04-24",
          endDate: "2025-04-24",
          trajectory: [],
        },
      ],
    },
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable    |
| ------------ | ---- | ----------- | ----------------------- |
| `bearerAuth` | http | HTTP Bearer | `HEDGEWISE_BEARER_AUTH` |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.postFuturesForecasts({
    symbol: "ZC",
    postAssetForecastsRequest: {
      strategy: [
        {
          startDate: "2025-04-24",
          endDate: "2025-04-24",
          trajectory: [],
        },
      ],
    },
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [assets](docs/sdks/assets/README.md)

* [getCategories](docs/sdks/assets/README.md#getcategories) - List available asset categories (e.g. Futures)

### [data](docs/sdks/data/README.md)

* [getMetadata](docs/sdks/data/README.md#getmetadata) - Get metadata and most recent prices

### [features](docs/sdks/features/README.md)

* [getTree](docs/sdks/features/README.md#gettree) - Provide the tree structure of the features faceting panel
* [list](docs/sdks/features/README.md#list) - List available features
* [getHistoricalValues](docs/sdks/features/README.md#gethistoricalvalues) - Get historical values for a feature
* [getTransformedValues](docs/sdks/features/README.md#gettransformedvalues) - Get the historical values for a feature transformed via the specified transformation
* [getWeightedIndex](docs/sdks/features/README.md#getweightedindex) - Returns the values of a user-definable index by creating a linear combination of features

### [forex](docs/sdks/forex/README.md)

* [listPrices](docs/sdks/forex/README.md#listprices) - Get most recent forex prices for all currencies
* [getPrices](docs/sdks/forex/README.md#getprices) - Get forex data for one currency

### [futures](docs/sdks/futures/README.md)

* [list](docs/sdks/futures/README.md#list) - List all available futures
* [getCalendar](docs/sdks/futures/README.md#getcalendar) - Get trading calendar for a future
* [getForecasts](docs/sdks/futures/README.md#getforecasts) - Get forecasts for a future
* [getLongTermForecast](docs/sdks/futures/README.md#getlongtermforecast) - Get long-term forecast for a future
* [getHedgeIndicator](docs/sdks/futures/README.md#gethedgeindicator) - Get hedge indicator for a future
* [getPrices](docs/sdks/futures/README.md#getprices) - Get historical prices for a future

### [Hedgewise SDK](docs/sdks/hedgewise/README.md)

* [postFuturesForecasts](docs/sdks/hedgewise/README.md#postfuturesforecasts) - Get forecasts for a future supporting multiple date ranges and model selection
* [getFuturesForecastsModels](docs/sdks/hedgewise/README.md#getfuturesforecastsmodels) - Get Forecast Models for a future
* [getModelOutput](docs/sdks/hedgewise/README.md#getmodeloutput) - Get the output of a model for a given symbol
* [getSupplyPhenology](docs/sdks/hedgewise/README.md#getsupplyphenology) - Get phenology stages information for a crop and country and or region

### [indicators](docs/sdks/indicators/README.md)

* [list](docs/sdks/indicators/README.md#list) - List available indicators

### [performanceMetrics](docs/sdks/performancemetrics/README.md)

* [list](docs/sdks/performancemetrics/README.md#list) - List available performance metrics and related models
* [get](docs/sdks/performancemetrics/README.md#get) - Get performance related data metrics for a given futures price forecast model at a given horizon.

### [sectorIndices](docs/sdks/sectorindices/README.md)

* [get](docs/sdks/sectorindices/README.md#get) - Get the proprietary value of the sector index requested

### [supply](docs/sdks/supply/README.md)

* [listCommodities](docs/sdks/supply/README.md#listcommodities) - List commodities with supply models
* [get](docs/sdks/supply/README.md#get) - Get supply data for a commodity and country

### [system](docs/sdks/system/README.md)

* [ping](docs/sdks/system/README.md#ping) - Ping

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`assetsGetCategories`](docs/sdks/assets/README.md#getcategories) - List available asset categories (e.g. Futures)
- [`dataGetMetadata`](docs/sdks/data/README.md#getmetadata) - Get metadata and most recent prices
- [`featuresGetHistoricalValues`](docs/sdks/features/README.md#gethistoricalvalues) - Get historical values for a feature
- [`featuresGetTransformedValues`](docs/sdks/features/README.md#gettransformedvalues) - Get the historical values for a feature transformed via the specified transformation
- [`featuresGetTree`](docs/sdks/features/README.md#gettree) - Provide the tree structure of the features faceting panel
- [`featuresGetWeightedIndex`](docs/sdks/features/README.md#getweightedindex) - Returns the values of a user-definable index by creating a linear combination of features
- [`featuresList`](docs/sdks/features/README.md#list) - List available features
- [`forexGetPrices`](docs/sdks/forex/README.md#getprices) - Get forex data for one currency
- [`forexListPrices`](docs/sdks/forex/README.md#listprices) - Get most recent forex prices for all currencies
- [`futuresGetCalendar`](docs/sdks/futures/README.md#getcalendar) - Get trading calendar for a future
- [`futuresGetForecasts`](docs/sdks/futures/README.md#getforecasts) - Get forecasts for a future
- [`futuresGetHedgeIndicator`](docs/sdks/futures/README.md#gethedgeindicator) - Get hedge indicator for a future
- [`futuresGetLongTermForecast`](docs/sdks/futures/README.md#getlongtermforecast) - Get long-term forecast for a future
- [`futuresGetPrices`](docs/sdks/futures/README.md#getprices) - Get historical prices for a future
- [`futuresList`](docs/sdks/futures/README.md#list) - List all available futures
- [`getFuturesForecastsModels`](docs/sdks/hedgewise/README.md#getfuturesforecastsmodels) - Get Forecast Models for a future
- [`getModelOutput`](docs/sdks/hedgewise/README.md#getmodeloutput) - Get the output of a model for a given symbol
- [`getSupplyPhenology`](docs/sdks/hedgewise/README.md#getsupplyphenology) - Get phenology stages information for a crop and country and or region
- [`indicatorsList`](docs/sdks/indicators/README.md#list) - List available indicators
- [`performanceMetricsGet`](docs/sdks/performancemetrics/README.md#get) - Get performance related data metrics for a given futures price forecast model at a given horizon.
- [`performanceMetricsList`](docs/sdks/performancemetrics/README.md#list) - List available performance metrics and related models
- [`postFuturesForecasts`](docs/sdks/hedgewise/README.md#postfuturesforecasts) - Get forecasts for a future supporting multiple date ranges and model selection
- [`sectorIndicesGet`](docs/sdks/sectorindices/README.md#get) - Get the proprietary value of the sector index requested
- [`supplyGet`](docs/sdks/supply/README.md#get) - Get supply data for a commodity and country
- [`supplyListCommodities`](docs/sdks/supply/README.md#listcommodities) - List commodities with supply models
- [`systemPing`](docs/sdks/system/README.md#ping) - Ping

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.postFuturesForecasts({
    symbol: "ZC",
    postAssetForecastsRequest: {
      strategy: [
        {
          startDate: "2025-04-24",
          endDate: "2025-04-24",
          trajectory: [],
        },
      ],
    },
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  const result = await hedgewise.postFuturesForecasts({
    symbol: "ZC",
    postAssetForecastsRequest: {
      strategy: [
        {
          startDate: "2025-04-24",
          endDate: "2025-04-24",
          trajectory: [],
        },
      ],
    },
  });

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

This table shows properties which are common on error classes. For full details see [error classes](#error-classes).

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.name`        | `string`   | Error class name eg `APIError`                                                          |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP status code eg `404`                                                               |
| `error.contentType` | `string`   | HTTP content type eg `application/json`                                                 |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response. Access to headers and more.                                          |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { Hedgewise } from "hedgewise";
import * as errors from "hedgewise/models/errors";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
  bearerAuth: process.env["HEDGEWISE_BEARER_AUTH"] ?? "",
});

async function run() {
  try {
    const result = await hedgewise.postFuturesForecasts({
      symbol: "ZC",
      postAssetForecastsRequest: {
        strategy: [
          {
            startDate: "2025-04-24",
            endDate: "2025-04-24",
            trajectory: [],
          },
        ],
      },
    });

    console.log(result);
  } catch (error) {
    // Depending on the method different errors may be thrown
    if (error instanceof errors.HTTPValidationError) {
      console.log(error.message);
      console.log(error.data$.detail); // ValidationError[]
    }

    // Fallback error class, if no other more specific error class is matched
    if (error instanceof errors.APIError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.rawResponse.headers);
    }
  }
}

run();

```

### Error Classes
* `APIError`: The fallback error class, if no other more specific error class is matched.
* `SDKValidationError`: Type mismatch between the data returned from the server and the structure expected by the SDK. This can also be thrown for invalid method arguments. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.
* Network errors:
    * `ConnectionError`: HTTP client was unable to make a request to a server.
    * `RequestTimeoutError`: HTTP request timed out due to an AbortSignal signal.
    * `RequestAbortedError`: HTTP request was aborted by the client.
    * `InvalidRequestError`: Any input used to create a request is invalid.
    * `UnexpectedClientError`: Unrecognised or unexpected error.
* Less common errors, applicable to a subset of methods:
    * [`HTTPValidationError`](docs/models/errors/httpvalidationerror.md): Validation Error. Status code `422`. Applicable to 17 of 26 methods.*


\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Hedgewise } from "hedgewise";
import { HTTPClient } from "hedgewise/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Hedgewise({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Hedgewise } from "hedgewise";

const sdk = new Hedgewise({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `HEDGEWISE_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=hedgewise&utm_campaign=typescript)
