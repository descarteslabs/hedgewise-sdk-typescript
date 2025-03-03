# FeatureTreeModel

## Example Usage

```typescript
import { FeatureTreeModel } from "hedgewise/models/components";

let value: FeatureTreeModel = {
  type: {},
  category: {},
  region: {},
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `type`                                                                             | Record<string, [components.FeatureNode](../../models/components/featurenode.md)[]> | :heavy_check_mark:                                                                 | N/A                                                                                |
| `category`                                                                         | Record<string, [components.FeatureNode](../../models/components/featurenode.md)[]> | :heavy_check_mark:                                                                 | N/A                                                                                |
| `region`                                                                           | Record<string, [components.FeatureNode](../../models/components/featurenode.md)[]> | :heavy_check_mark:                                                                 | N/A                                                                                |