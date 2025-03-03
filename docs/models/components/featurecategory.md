# FeatureCategory

## Example Usage

```typescript
import { FeatureCategory } from "hedgewise/models/components";

let value: FeatureCategory = {
  category: "<value>",
  contribution: 6214.79,
  drilldown: [
    {
      featureCode: "<value>",
      contribution: 5772.29,
      description: "justly pfft oh delete",
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