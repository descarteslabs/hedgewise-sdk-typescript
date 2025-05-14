# GetTransformedFeatureResponse

## Example Usage

```typescript
import { GetTransformedFeatureResponse } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: GetTransformedFeatureResponse = {
  data: [
    {
      xformFeatureCode: "<value>",
      date: new RFCDate("2025-10-28"),
      value: 9774.14,
    },
  ],
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `success`                                                                                                    | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `data`                                                                                                       | [components.FeatureTransformedHistoricalData](../../models/components/featuretransformedhistoricaldata.md)[] | :heavy_check_mark:                                                                                           | N/A                                                                                                          |