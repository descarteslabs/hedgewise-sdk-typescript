# GetStrategiesResponse

## Example Usage

```typescript
import { GetStrategiesResponse } from "hedgewise/models/components";

let value: GetStrategiesResponse = {
  data: [
    {
      id: "<id>",
      createdAt: "1712691005207",
      updatedAt: null,
      name: "<value>",
      symbol: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `success`                                                                    | *boolean*                                                                    | :heavy_check_mark:                                                           | N/A                                                                          |
| `data`                                                                       | [components.StrategyResponse](../../models/components/strategyresponse.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |