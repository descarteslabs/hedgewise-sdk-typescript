# GetAvailablePerformanceMetricsResponse

## Example Usage

```typescript
import { GetAvailablePerformanceMetricsResponse } from "hedgewise/models/components";

let value: GetAvailablePerformanceMetricsResponse = {
  data: [
    {
      metric: "<value>",
      description: "wedding information lumpy",
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.PerformanceMetric](../../models/components/performancemetric.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |