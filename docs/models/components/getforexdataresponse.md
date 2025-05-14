# GetForexDataResponse

## Example Usage

```typescript
import { GetForexDataResponse } from "hedgewise/models/components";

let value: GetForexDataResponse = {
  data: {
    code: "<value>",
    name: "<value>",
    marketDate: new Date("2025-01-10T18:45:53.608Z"),
    prices: [
      {
        date: new Date("2023-12-28T02:19:57.452Z"),
        price: 2910.67,
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