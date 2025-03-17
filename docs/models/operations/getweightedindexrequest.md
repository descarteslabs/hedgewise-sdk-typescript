# GetWeightedIndexRequest

## Example Usage

```typescript
import { GetWeightedIndexRequest } from "hedgewise/models/operations";

let value: GetWeightedIndexRequest = {
  weights: [
    0.5,
  ],
  featureCodes: [
    "vietnam_t2mean",
  ],
  indexLabel: "user_defined_index",
  startDate: "2025-02-17",
  endDate: "2025-03-17",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `weights`                                                                  | *number*[]                                                                 | :heavy_check_mark:                                                         | The list of weights to apply on the features selection to create the index | 0.5                                                                        |
| `featureCodes`                                                             | *string*[]                                                                 | :heavy_check_mark:                                                         | The list of features to include in the index                               | vietnam_t2mean                                                             |
| `indexLabel`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | user defined string used to name the weighted index                        | user_defined_index                                                         |
| `startDate`                                                                | *string*                                                                   | :heavy_minus_sign:                                                         | Start of transformed feature data window (YYYY-MM-DD)                      | 2025-02-17                                                                 |
| `endDate`                                                                  | *string*                                                                   | :heavy_minus_sign:                                                         | End of transformed feature data window (YYYY-MM-DD)                        | 2025-03-17                                                                 |