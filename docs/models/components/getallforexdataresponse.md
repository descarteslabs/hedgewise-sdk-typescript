# GetAllForexDataResponse

## Example Usage

```typescript
import { GetAllForexDataResponse } from "hedgewise/models/components";

let value: GetAllForexDataResponse = {
  data: [
    {
      code: "<value>",
      name: "<value>",
      marketDate: new Date("2023-11-01T20:50:44.115Z"),
      prices: [
        {
          date: new Date("2024-05-02T22:55:26.222Z"),
          price: 1801.97,
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