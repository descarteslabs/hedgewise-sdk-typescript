# ContractWithForecasts

## Example Usage

```typescript
import { ContractWithForecasts } from "hedgewise/models/components";

let value: ContractWithForecasts = {
  assetSymbol: "<value>",
  symbol: "<value>",
  name: "<value>",
  forecasts: [
    {
      model: "Alpine",
      forecastDate: new Date("2023-02-21T22:47:27.989Z"),
      closePriceTrajectory: [
        {
          date: new Date("2023-05-07T14:57:53.812Z"),
          closePrice: 6875.74,
        },
      ],
    },
  ],
  marketDrivers: [
    {
      model: "Malibu",
      forecastDate: new Date("2024-12-09T17:10:13.003Z"),
      horizon: 779655,
      categories: [
        {
          category: "<value>",
          contribution: 322.66,
          drilldown: [
            {
              featureCode: "<value>",
              contribution: 6462.33,
              description: "wrathful early tributary spice",
            },
          ],
        },
      ],
    },
  ],
  movingAverages: [
    {
      horizon: 156542,
      movingAverage: [
        {
          date: new Date("2023-07-08T11:23:49.706Z"),
          value: 5130.19,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `assetSymbol`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `symbol`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `lastTick`                                                             | [components.Tick](../../models/components/tick.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `forecasts`                                                            | [components.Forecast](../../models/components/forecast.md)[]           | :heavy_check_mark:                                                     | N/A                                                                    |
| `marketDrivers`                                                        | [components.MarketDriver](../../models/components/marketdriver.md)[]   | :heavy_check_mark:                                                     | N/A                                                                    |
| `movingAverages`                                                       | [components.MovingAverage](../../models/components/movingaverage.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |