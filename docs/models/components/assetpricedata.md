# AssetPriceData

## Example Usage

```typescript
import { AssetPriceData } from "hedgewise/models/components";

let value: AssetPriceData = {
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
          datetime: new Date("2025-08-18T15:35:38.302Z"),
          volume: 338159,
          openInterest: 961571,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `asset`                                                                                       | [components.Asset](../../models/components/asset.md)                                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `frontMonth`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `marketDate`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `contracts`                                                                                   | [components.ContractWithPriceTicks](../../models/components/contractwithpriceticks.md)[]      | :heavy_check_mark:                                                                            | N/A                                                                                           |