# ContractWithForecastsSmall

## Example Usage

```typescript
import { ContractWithForecastsSmall } from "hedgewise/models/components";

let value: ContractWithForecastsSmall = {
  assetSymbol: "<value>",
  symbol: "<value>",
  name: "<value>",
  forecasts: [],
  marketDrivers: [],
  movingAverages: [],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `assetSymbol`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `symbol`                                                               | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `lastTick`                                                             | [components.Tick](../../models/components/tick.md)                     | :heavy_minus_sign:                                                     | N/A                                                                    |
| `forecasts`                                                            | [components.ForecastSmall](../../models/components/forecastsmall.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `marketDrivers`                                                        | [components.MarketDriver](../../models/components/marketdriver.md)[]   | :heavy_check_mark:                                                     | N/A                                                                    |
| `movingAverages`                                                       | [components.MovingAverage](../../models/components/movingaverage.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |