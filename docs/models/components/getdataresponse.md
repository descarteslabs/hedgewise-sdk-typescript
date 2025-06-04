# GetDataResponse

## Example Usage

```typescript
import { GetDataResponse } from "hedgewise/models/components";

let value: GetDataResponse = {
  data: {
    assetClasses: [],
    assets: [],
    contracts: [
      {
        assetSymbol: "<value>",
        symbol: "<value>",
        name: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `success`                                          | *boolean*                                          | :heavy_check_mark:                                 | N/A                                                |
| `data`                                             | [components.Data](../../models/components/data.md) | :heavy_check_mark:                                 | N/A                                                |