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
      forecasts: [],
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
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `asset`                                                                                | [components.Asset](../../models/components/asset.md)                                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `contracts`                                                                            | [components.ContractWithForecasts](../../models/components/contractwithforecasts.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |