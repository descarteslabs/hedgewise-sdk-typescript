# AssetForecastData

## Example Usage

```typescript
import { AssetForecastData } from "hedgewise/models/components";

let value: AssetForecastData = {
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
          model: "Jetta",
          forecastDate: new Date("2024-05-10T19:18:06.055Z"),
          closePriceTrajectory: [
            {
              date: new Date("2024-07-08T08:05:25.881Z"),
              closePrice: 803.16,
            },
          ],
        },
      ],
      marketDrivers: [
        {
          model: "Prius",
          forecastDate: new Date("2025-06-22T03:17:54.743Z"),
          horizon: 302071,
          categories: [
            {
              category: "<value>",
              contribution: 9362.92,
              drilldown: [
                {
                  featureCode: "<value>",
                  contribution: 6684,
                  description: "antagonize alb what",
                },
              ],
            },
          ],
        },
      ],
      movingAverages: [
        {
          horizon: 399654,
          movingAverage: [
            {
              date: new Date("2023-11-22T17:30:44.773Z"),
              value: 9181.57,
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `asset`                                                                                | [components.Asset](../../models/components/asset.md)                                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `contracts`                                                                            | [components.ContractWithForecasts](../../models/components/contractwithforecasts.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |