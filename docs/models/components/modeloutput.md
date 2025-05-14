# ModelOutput

## Example Usage

```typescript
import { ModelOutput } from "hedgewise/models/components";

let value: ModelOutput = {
  commodity: "<value>",
  date: new Date("2025-08-14T04:52:54.632Z"),
  runDate: new Date("2025-09-03T22:47:33.168Z"),
  horizon: 729121,
  contract: "<value>",
  runDatePrice: 1867.3,
  realizedPrice: 6037.53,
  forecast: 1897.64,
  forecastError: 1192.36,
  forecastErrorPercent: 5044.21,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `commodity`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `horizon`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `contract`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `runDatePrice`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `realizedPrice`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `forecast`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `forecastError`                                                                               | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `forecastErrorPercent`                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |