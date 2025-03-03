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
        ticks: [
          {
            datetime: new Date("2023-03-12T02:16:45.552Z"),
            volume: 485628,
            openInterest: 977496,
          },
        ],
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