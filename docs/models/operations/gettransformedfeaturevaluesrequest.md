# GetTransformedFeatureValuesRequest

## Example Usage

```typescript
import { GetTransformedFeatureValuesRequest } from "hedgewise/models/operations";

let value: GetTransformedFeatureValuesRequest = {
  featureCode: "vietnam_t2mean",
  transform: "xyavg",
  startDate: "2025-02-03",
  endDate: "2025-03-03",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `featureCode`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | Feature code                                                                                      | vietnam_t2mean                                                                                    |
| `transform`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | The type of transform requested. Currently supported are xyavg, rebase, zscore, yoy               | xyavg                                                                                             |
| `numberOfYears`                                                                                   | *number*                                                                                          | :heavy_minus_sign:                                                                                | Number of years to perform the average on. (valid for xyavg and yoy transforms)                   | 5                                                                                                 |
| `window`                                                                                          | *number*                                                                                          | :heavy_minus_sign:                                                                                | Number of observations used in the transformation window. (valid for xyavg and zscore transforms) | 3                                                                                                 |
| `startDate`                                                                                       | *string*                                                                                          | :heavy_minus_sign:                                                                                | Start of transformed feature data window (YYYY-MM-DD) - not relevant for yoy                      | 2025-02-03                                                                                        |
| `endDate`                                                                                         | *string*                                                                                          | :heavy_minus_sign:                                                                                | End of transformed feature data window (YYYY-MM-DD) - not relevant for yoy                        | 2025-03-03                                                                                        |