# AssetForecastModelData

## Example Usage

```typescript
import { AssetForecastModelData } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: AssetForecastModelData = {
  modelType: "<value>",
  modelName: "<value>",
  displayName: "Heloise43",
  startDate: new RFCDate("2025-07-26"),
  endDate: new RFCDate("2025-04-05"),
  horizons: [
    496775,
    906040,
    355067,
  ],
  indicators: [],
  native: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `modelType`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `modelName`                                                                      | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `displayName`                                                                    | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `startDate`                                                                      | [RFCDate](../../types/rfcdate.md)                                                | :heavy_check_mark:                                                               | N/A                                                                              |
| `endDate`                                                                        | [RFCDate](../../types/rfcdate.md)                                                | :heavy_check_mark:                                                               | N/A                                                                              |
| `horizons`                                                                       | *number*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `indicators`                                                                     | *string*[]                                                                       | :heavy_check_mark:                                                               | N/A                                                                              |
| `native`                                                                         | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `targetType`                                                                     | *string*                                                                         | :heavy_minus_sign:                                                               | N/A                                                                              |
| `rollingMeanWindows`                                                             | *number*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `features`                                                                       | *string*[]                                                                       | :heavy_minus_sign:                                                               | N/A                                                                              |
| `strategy`                                                                       | [components.ForecastTrajectory](../../models/components/forecasttrajectory.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |