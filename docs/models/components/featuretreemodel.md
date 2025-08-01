# FeatureTreeModel

## Example Usage

```typescript
import { FeatureTreeModel } from "hedgewise/models/components";

let value: FeatureTreeModel = {
  type: {
    "key": [],
    "key1": [],
  },
  category: {},
  region: {
    "key": [
      {
        label: "<value>",
      },
    ],
  },
  dataFrequency: {},
  phenologyStage: {
    "key": [
      {
        label: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | Record<string, [components.FeatureNode](../../models/components/featurenode.md)[]> | :heavy_check_mark:                                                                 | N/A                                                                                |
| `category`                                                                         | Record<string, [components.FeatureNode](../../models/components/featurenode.md)[]> | :heavy_check_mark:                                                                 | N/A                                                                                |
| `region`                                                                           | Record<string, [components.FeatureNode](../../models/components/featurenode.md)[]> | :heavy_check_mark:                                                                 | N/A                                                                                |
| `dataFrequency`                                                                    | Record<string, [components.FeatureNode](../../models/components/featurenode.md)[]> | :heavy_check_mark:                                                                 | N/A                                                                                |
| `phenologyStage`                                                                   | Record<string, [components.FeatureNode](../../models/components/featurenode.md)[]> | :heavy_check_mark:                                                                 | N/A                                                                                |