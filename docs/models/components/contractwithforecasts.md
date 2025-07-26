# ContractWithForecasts

## Example Usage

```typescript
import { ContractWithForecasts } from "hedgewise/models/components";

let value: ContractWithForecasts = {
  assetSymbol: "<value>",
  symbol: "<value>",
  name: "<value>",
  forecasts: [],
  marketDrivers: null,
  movingAverages: [
    {
      horizon: 650817,
      movingAverage: [
        {
          date: new Date("2025-05-04T12:02:08.109Z"),
          value: 322.66,
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