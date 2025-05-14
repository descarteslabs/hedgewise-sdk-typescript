# FeatureTransformedHistoricalData

## Example Usage

```typescript
import { FeatureTransformedHistoricalData } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: FeatureTransformedHistoricalData = {
  xformFeatureCode: "<value>",
  date: new RFCDate("2024-09-20"),
  value: 6130.36,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `xformFeatureCode`                | *string*                          | :heavy_check_mark:                | N/A                               |
| `date`                            | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `value`                           | *number*                          | :heavy_check_mark:                | N/A                               |
| `label`                           | *string*                          | :heavy_minus_sign:                | N/A                               |