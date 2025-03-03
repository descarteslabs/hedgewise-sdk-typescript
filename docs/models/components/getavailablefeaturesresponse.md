# GetAvailableFeaturesResponse

## Example Usage

```typescript
import { GetAvailableFeaturesResponse } from "hedgewise/models/components";

let value: GetAvailableFeaturesResponse = {
  data: [
    {
      featureCode: "<value>",
      type: "<value>",
      longName: "<value>",
      variableType: "<value>",
    },
  ],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `success`                                                  | *boolean*                                                  | :heavy_check_mark:                                         | N/A                                                        |
| `data`                                                     | [components.Feature](../../models/components/feature.md)[] | :heavy_check_mark:                                         | N/A                                                        |