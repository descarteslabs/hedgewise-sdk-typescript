# ForecastTickSmall

## Example Usage

```typescript
import { ForecastTickSmall } from "hedgewise/models/components";

let value: ForecastTickSmall = {
  date: new Date("2025-09-02T22:07:48.713Z"),
  targetDateContract: "<value>",
  closePrice: 2406.96,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `targetDateContract`                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `closePrice`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `interpolated`                                                                                | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |