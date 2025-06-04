# FeatureCategory

## Example Usage

```typescript
import { FeatureCategory } from "hedgewise/models/components";

let value: FeatureCategory = {
  category: "<value>",
  contribution: 3686.72,
  drilldown: [
    {
      featureCode: "<value>",
      contribution: 3498.28,
      description: "fast gladly drat annex",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `category`                                                                   | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `contribution`                                                               | *number*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `drilldown`                                                                  | [components.FeatureDrilldown](../../models/components/featuredrilldown.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |