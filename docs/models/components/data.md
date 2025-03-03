# Data

## Example Usage

```typescript
import { Data } from "hedgewise/models/components";

let value: Data = {
  assetClasses: [
    {
      symbol: "<value>",
      name: "<value>",
    },
  ],
  assets: [
    {
      symbol: "<value>",
      type: "<value>",
      assetClassSymbol: "<value>",
      name: "<value>",
      sku: "<value>",
      code: "<value>",
      priceFile: "<value>",
    },
  ],
  contracts: [
    {
      assetSymbol: "<value>",
      symbol: "<value>",
      name: "<value>",
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `assetClasses`                                                   | [components.AssetClass](../../models/components/assetclass.md)[] | :heavy_check_mark:                                               | N/A                                                              |
| `assets`                                                         | [components.Asset](../../models/components/asset.md)[]           | :heavy_check_mark:                                               | N/A                                                              |
| `contracts`                                                      | [components.Contract](../../models/components/contract.md)[]     | :heavy_check_mark:                                               | N/A                                                              |