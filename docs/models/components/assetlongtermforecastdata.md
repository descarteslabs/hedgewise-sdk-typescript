# AssetLongTermForecastData

## Example Usage

```typescript
import { AssetLongTermForecastData } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: AssetLongTermForecastData = {
  asset: {
    symbol: "<value>",
    type: "<value>",
    assetClassSymbol: "<value>",
    name: "<value>",
    sku: "<value>",
    code: "<value>",
    priceFile: "<value>",
  },
  longTermForecast: [
    {
      date: new RFCDate("2024-02-17"),
      contract: "<value>",
      priceIncrease: true,
    },
  ],
  marketDrivers: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `asset`                                                                      | [components.Asset](../../models/components/asset.md)                         | :heavy_check_mark:                                                           | N/A                                                                          |
| `longTermForecast`                                                           | [components.LongTermForecast](../../models/components/longtermforecast.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `marketDrivers`                                                              | [components.MarketDriver](../../models/components/marketdriver.md)[]         | :heavy_check_mark:                                                           | N/A                                                                          |