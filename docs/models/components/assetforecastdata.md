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
          model: "Mercielago",
          forecastDate: new Date("2024-01-30T00:29:44.940Z"),
          closePriceTrajectory: [
            {
              date: new Date("2024-04-23T23:41:18.646Z"),
              closePrice: 6976.31,
            },
          ],
        },
      ],
      marketDrivers: [
        {
          model: "A4",
          forecastDate: new Date("2024-12-31T18:37:54.059Z"),
          horizon: 670638,
          categories: [
            {
              category: "<value>",
              contribution: 2103.82,
              drilldown: [
                {
                  featureCode: "<value>",
                  contribution: 1289.26,
                  description: "deeply opposite because furiously unless",
                },
              ],
            },
          ],
        },
      ],
      movingAverages: [
        {
          horizon: 566602,
          movingAverage: [
            {
              date: new Date("2023-10-18T20:48:18.611Z"),
              value: 5232.48,
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