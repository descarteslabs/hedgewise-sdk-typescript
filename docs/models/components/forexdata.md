# ForexData

## Example Usage

```typescript
import { ForexData } from "hedgewise/models/components";

let value: ForexData = {
  code: "<value>",
  name: "<value>",
  marketDate: new Date("2023-04-01T10:57:43.186Z"),
  prices: [
    {
      date: new Date("2024-08-20T05:19:48.526Z"),
      price: 7728.42,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `code`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `marketDate`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `prices`                                                                                      | [components.ForexTick](../../models/components/forextick.md)[]                                | :heavy_check_mark:                                                                            | N/A                                                                                           |