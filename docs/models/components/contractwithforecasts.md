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
      model: "ATS",
      forecastDate: new Date("2024-09-23T05:41:47.829Z"),
      closePriceTrajectory: [
        {
          date: new Date("2025-10-15T12:12:25.852Z"),
          closePrice: 3185.69,
        },
      ],
    },
  ],
  marketDrivers: [
    {
      model: "Mercielago",
      forecastDate: new Date("2023-05-25T10:48:39.501Z"),
      horizon: 716327,
      categories: [
        {
          category: "<value>",
          contribution: 2894.06,
          drilldown: [
            {
              featureCode: "<value>",
              contribution: 1831.91,
              description: "oof failing other insignificant woot purse salty",
            },
          ],
        },
      ],
    },
  ],
  movingAverages: [
    {
      horizon: 100226,
      movingAverage: [
        {
          date: new Date("2025-10-04T18:04:14.419Z"),
          value: 7142.42,
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