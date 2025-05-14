# GetModelOutputResponse

## Example Usage

```typescript
import { GetModelOutputResponse } from "hedgewise/models/components";

let value: GetModelOutputResponse = {
  data: [
    {
      commodity: "<value>",
      date: new Date("2023-12-10T00:37:41.214Z"),
      runDate: new Date("2025-10-25T13:13:14.417Z"),
      horizon: 509754,
      contract: "<value>",
      runDatePrice: 371.75,
      realizedPrice: 5354.23,
      forecast: 624.49,
      forecastError: 8214.7,
      forecastErrorPercent: 3898.33,
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `success`                                                          | *boolean*                                                          | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.ModelOutput](../../models/components/modeloutput.md)[] | :heavy_check_mark:                                                 | N/A                                                                |