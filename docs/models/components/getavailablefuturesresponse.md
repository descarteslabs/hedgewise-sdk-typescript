# GetAvailableFuturesResponse

## Example Usage

```typescript
import { GetAvailableFuturesResponse } from "hedgewise/models/components";

let value: GetAvailableFuturesResponse = {
  data: [
    {
      symbol: "<value>",
      type: "<value>",
      assetClassSymbol: "<value>",
      name: "<value>",
      sku: "<value>",
      code: "<value>",
      priceFile: "<value>",
      hasForecast: true,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `success`                                                                  | *boolean*                                                                  | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [components.AvailableFuture](../../models/components/availablefuture.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |