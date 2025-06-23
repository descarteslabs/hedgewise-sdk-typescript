# AssetForecastSmallData

## Example Usage

```typescript
import { AssetForecastSmallData } from "hedgewise/models/components";

let value: AssetForecastSmallData = {
  asset: {
    symbol: "<value>",
    type: "<value>",
    assetClassSymbol: "<value>",
    name: "<value>",
    sku: "<value>",
    code: "<value>",
    priceFile: "<value>",
  },
  contracts: [],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `asset`                                                                                          | [components.Asset](../../models/components/asset.md)                                             | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `contracts`                                                                                      | [components.ContractWithForecastsSmall](../../models/components/contractwithforecastssmall.md)[] | :heavy_check_mark:                                                                               | N/A                                                                                              |