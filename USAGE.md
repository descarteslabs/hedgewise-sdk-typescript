<!-- Start SDK Example Usage [usage] -->
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