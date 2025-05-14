# GetFeatureHistoricalResponse

## Example Usage

```typescript
import { GetFeatureHistoricalResponse } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: GetFeatureHistoricalResponse = {
  data: [
    {
      featureCode: "<value>",
      date: new RFCDate("2023-12-27"),
      value: 6083.43,
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `success`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [components.FeatureHistoricalData](../../models/components/featurehistoricaldata.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |