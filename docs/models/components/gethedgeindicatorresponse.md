# GetHedgeIndicatorResponse

## Example Usage

```typescript
import { GetHedgeIndicatorResponse } from "hedgewise/models/components";

let value: GetHedgeIndicatorResponse = {
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
    contracts: [
      {
        assetSymbol: "<value>",
        symbol: "<value>",
        name: "<value>",
        indicator: {
          name: "<value>",
          series: [
            {
              date: "2025-03-04",
              value: 2921.47,
            },
          ],
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.AssetIndicatorData](../../models/components/assetindicatordata.md) | :heavy_check_mark:                                                             | N/A                                                                            |