# GetPerformanceMetricsResponse

## Example Usage

```typescript
import { GetPerformanceMetricsResponse } from "hedgewise/models/components";

let value: GetPerformanceMetricsResponse = {
  data: [
    {
      metric: "<value>",
      horizon: 438400,
      value: 7218.68,
    },
  ],
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `success`                                                                                  | *boolean*                                                                                  | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `data`                                                                                     | [components.PerformanceMetricResult](../../models/components/performancemetricresult.md)[] | :heavy_check_mark:                                                                         | N/A                                                                                        |