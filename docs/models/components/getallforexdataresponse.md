# GetAllForexDataResponse

## Example Usage

```typescript
import { GetAllForexDataResponse } from "hedgewise/models/components";

let value: GetAllForexDataResponse = {
  data: [
    {
      code: "<value>",
      name: "<value>",
      marketDate: new Date("2025-05-25T22:13:29.488Z"),
      prices: [
        {
          date: new Date("2024-11-21T23:18:09.113Z"),
          price: 8742.88,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `success`                                                      | *boolean*                                                      | :heavy_check_mark:                                             | N/A                                                            |
| `data`                                                         | [components.ForexData](../../models/components/forexdata.md)[] | :heavy_check_mark:                                             | N/A                                                            |