# GetAssetPricesResponse

## Example Usage

```typescript
import { GetAssetPricesResponse } from "hedgewise/models/components";

let value: GetAssetPricesResponse = {
  data: {
    asset: {
      symbol: "<value>",
      type: "<value>",
      assetClassSymbol: "<value>",
      name: "<value>",
      sku: "<value>",
      code: "<value>",
      priceFile: "<value>",
    },
    frontMonth: "<value>",
    contracts: [
      {
        assetSymbol: "<value>",
        symbol: "<value>",
        name: "<value>",
        ticks: [],
      },
    ],
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `success`                                                              | *boolean*                                                              | :heavy_check_mark:                                                     | N/A                                                                    |
| `data`                                                                 | [components.AssetPriceData](../../models/components/assetpricedata.md) | :heavy_check_mark:                                                     | N/A                                                                    |