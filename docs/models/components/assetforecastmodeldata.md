# AssetForecastModelData

## Example Usage

```typescript
import { AssetForecastModelData } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: AssetForecastModelData = {
  modelName: "<value>",
  startDate: new RFCDate("2024-04-08"),
  endDate: new RFCDate("2024-01-12"),
  horizons: [
    670211,
  ],
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `modelName`                       | *string*                          | :heavy_check_mark:                | N/A                               |
| `startDate`                       | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `endDate`                         | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `horizons`                        | *number*[]                        | :heavy_check_mark:                | N/A                               |
| `targetType`                      | *string*                          | :heavy_minus_sign:                | N/A                               |
| `rollingMeanWindows`              | *number*[]                        | :heavy_minus_sign:                | N/A                               |
| `features`                        | *string*[]                        | :heavy_minus_sign:                | N/A                               |