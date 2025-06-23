# GetAssetForecastsSmallResponse

## Example Usage

```typescript
import { GetAssetForecastsSmallResponse } from "hedgewise/models/components";

let value: GetAssetForecastsSmallResponse = {
  data: {
    asset: {
      symbol: "<value>",
      type: "<value>",
      assetClassSymbol: "<value>",
      name: "<value>",
      sku: "<value>",
      code: "<value>",
      priceFile: "<value>",
    },
    contracts: [
      {
        assetSymbol: "<value>",
        symbol: "<value>",
        name: "<value>",
        forecasts: [
          {
            model: "Countach",
            forecastDate: new Date("2023-04-27T15:15:22.866Z"),
            closePriceTrajectory: [],
          },
        ],
        marketDrivers: [
          {
            model: "Prius",
            forecastDate: new Date("2025-04-04T09:39:41.846Z"),
            targetDateContract: "<value>",
            horizon: 349784,
            categories: [
              {
                category: "<value>",
                contribution: 9186.23,
                drilldown: [],
              },
            ],
          },
        ],
        movingAverages: [
          {
            horizon: 800625,
            movingAverage: [
              {
                date: new Date("2023-06-05T16:32:52.994Z"),
                value: 1452.04,
              },
            ],
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `success`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [components.AssetForecastSmallData](../../models/components/assetforecastsmalldata.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |