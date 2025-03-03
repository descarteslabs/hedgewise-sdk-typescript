# AvailableIndicator

## Example Usage

```typescript
import { AvailableIndicator } from "hedgewise/models/components";

let value: AvailableIndicator = {
  name: "<value>",
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
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `name`                                                 | *string*                                               | :heavy_check_mark:                                     | N/A                                                    |
| `assets`                                               | [components.Asset](../../models/components/asset.md)[] | :heavy_check_mark:                                     | N/A                                                    |