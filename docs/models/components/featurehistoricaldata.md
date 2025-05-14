# FeatureHistoricalData

## Example Usage

```typescript
import { FeatureHistoricalData } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: FeatureHistoricalData = {
  featureCode: "<value>",
  date: new RFCDate("2023-05-06"),
  value: 8475.16,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `featureCode`                     | *string*                          | :heavy_check_mark:                | N/A                               |
| `date`                            | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `value`                           | *number*                          | :heavy_check_mark:                | N/A                               |
| `strength`                        | *number*                          | :heavy_minus_sign:                | N/A                               |
| `phenologyStage`                  | *string*                          | :heavy_minus_sign:                | N/A                               |