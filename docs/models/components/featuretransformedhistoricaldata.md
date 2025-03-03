# FeatureTransformedHistoricalData

## Example Usage

```typescript
import { FeatureTransformedHistoricalData } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: FeatureTransformedHistoricalData = {
  xformFeatureCode: "<value>",
  date: new RFCDate("2024-07-14"),
  value: 2243.17,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `xformFeatureCode`                | *string*                          | :heavy_check_mark:                | N/A                               |
| `date`                            | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `value`                           | *number*                          | :heavy_check_mark:                | N/A                               |
| `label`                           | *string*                          | :heavy_minus_sign:                | N/A                               |