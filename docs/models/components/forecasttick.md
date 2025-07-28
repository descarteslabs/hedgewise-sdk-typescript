# ForecastTick

## Example Usage

```typescript
import { ForecastTick } from "hedgewise/models/components";

let value: ForecastTick = {
  date: new Date("2025-05-19T09:15:54.345Z"),
  targetDateContract: "<value>",
  closePrice: 6391.92,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetDateContract`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `closePrice`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lowerBounds`                                                                                 | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `upperBounds`                                                                                 | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `sigmas`                                                                                      | *number*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `interpolated`                                                                                | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |