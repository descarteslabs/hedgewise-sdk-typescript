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
            model: "LeBaron",
            forecastDate: new Date("2024-04-24T14:17:38.418Z"),
            closePriceTrajectory: [
              {
                date: new Date("2025-09-04T09:11:49.246Z"),
                closePrice: 9636.63,
              },
            ],
          },
        ],
        marketDrivers: [
          {
            model: "El Camino",
            forecastDate: new Date("2025-05-17T17:32:07.447Z"),
            horizon: 528895,
            categories: [
              {
                category: "<value>",
                contribution: 5680.45,
                drilldown: [
                  {
                    featureCode: "<value>",
                    contribution: 9255.97,
                    description: "the mismatch plagiarise",
                  },
                ],
              },
            ],
          },
        ],
        movingAverages: [
          {
            horizon: 612096,
            movingAverage: [
              {
                date: new Date("2024-11-07T03:49:54.674Z"),
                value: 9437.49,
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