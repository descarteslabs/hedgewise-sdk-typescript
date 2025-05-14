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
      contribution: 8067.41,
      description:
        "ameliorate task minor majestically colligate even smoothly righteously",
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