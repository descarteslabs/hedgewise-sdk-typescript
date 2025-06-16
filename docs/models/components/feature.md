# Feature

## Example Usage

```typescript
import { Feature } from "hedgewise/models/components";

let value: Feature = {
  featureCode: "<value>",
  type: "<value>",
  longName: "<value>",
  variableType: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `featureCode`      | *string*           | :heavy_check_mark: | N/A                |
| `type`             | *string*           | :heavy_check_mark: | N/A                |
| `longName`         | *string*           | :heavy_check_mark: | N/A                |
| `variableType`     | *string*           | :heavy_check_mark: | N/A                |
| `mainCommodity`    | *string*           | :heavy_minus_sign: | N/A                |
| `symbols`          | *string*[]         | :heavy_minus_sign: | N/A                |
| `country`          | *string*           | :heavy_minus_sign: | N/A                |
| `location`         | *string*           | :heavy_minus_sign: | N/A                |
| `statisticType`    | *string*           | :heavy_minus_sign: | N/A                |
| `unit`             | *string*           | :heavy_minus_sign: | N/A                |
| `source`           | *string*           | :heavy_minus_sign: | N/A                |
| `recentInfluence`  | *number*           | :heavy_minus_sign: | N/A                |
| `frequency`        | *string*           | :heavy_minus_sign: | N/A                |
| `phenologyStage`   | *string*[]         | :heavy_minus_sign: | N/A                |
| `horizons`         | *string*[]         | :heavy_minus_sign: | N/A                |
| `datasets`         | *string*[]         | :heavy_minus_sign: | N/A                |