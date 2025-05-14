# AssetIndicatorData

## Example Usage

```typescript
import { AssetIndicatorData } from "hedgewise/models/components";

let value: AssetIndicatorData = {
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
      indicator: {
        name: "<value>",
        series: [
          {
            date: "2024-08-16",
            value: 5804.47,
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `asset`                                                                                | [components.Asset](../../models/components/asset.md)                                   | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `contracts`                                                                            | [components.ContractWithIndicator](../../models/components/contractwithindicator.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |