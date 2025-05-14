# GetAssetForecastsResponse

## Example Usage

```typescript
import { GetAssetForecastsResponse } from "hedgewise/models/components";

let value: GetAssetForecastsResponse = {
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
            model: "Accord",
            forecastDate: new Date("2025-09-30T12:59:21.883Z"),
            closePriceTrajectory: [
              {
                date: new Date("2024-01-23T13:21:24.341Z"),
                closePrice: 6291.75,
              },
            ],
          },
        ],
        marketDrivers: [
          {
            model: "2",
            forecastDate: new Date("2025-12-03T13:29:17.658Z"),
            horizon: 585349,
            categories: [
              {
                category: "<value>",
                contribution: 419.67,
                drilldown: [
                  {
                    featureCode: "<value>",
                    contribution: 4198.15,
                    description: "vague frankly for or shakily distant",
                  },
                ],
              },
            ],
          },
        ],
        movingAverages: [
          {
            horizon: 202459,
            movingAverage: [
              {
                date: new Date("2023-10-30T20:46:58.747Z"),
                value: 1749.44,
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

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [components.AssetForecastData](../../models/components/assetforecastdata.md) | :heavy_check_mark:                                                           | N/A                                                                          |