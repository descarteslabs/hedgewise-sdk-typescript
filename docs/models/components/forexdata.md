# ForexData

## Example Usage

```typescript
import { ForexData } from "hedgewise/models/components";

let value: ForexData = {
  code: "<value>",
  name: "<value>",
  marketDate: new Date("2023-11-18T03:36:20.029Z"),
  prices: [
    {
      date: new Date("2025-07-19T10:36:40.605Z"),
      price: 6178.77,
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