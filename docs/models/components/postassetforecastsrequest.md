# PostAssetForecastsRequest

## Example Usage

```typescript
import { PostAssetForecastsRequest } from "hedgewise/models/components";

let value: PostAssetForecastsRequest = {
  strategy: [
    {
      startDate: "2025-04-24",
      endDate: "2025-04-24",
      trajectory: [
        {
          model: "V90",
          horizon: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `strategy`                                                                             | [components.AssetForecastStrategy](../../models/components/assetforecaststrategy.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |