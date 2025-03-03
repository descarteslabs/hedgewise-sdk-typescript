# GetForexDataResponse

## Example Usage

```typescript
import { GetForexDataResponse } from "hedgewise/models/components";

let value: GetForexDataResponse = {
  data: {
    code: "<value>",
    name: "<value>",
    marketDate: new Date("2023-06-12T08:41:49.943Z"),
    prices: [
      {
        date: new Date("2025-12-12T02:02:24.972Z"),
        price: 4783.7,
      },
    ],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | [components.ForexData](../../models/components/forexdata.md) | :heavy_check_mark:                                           | N/A                                                          |