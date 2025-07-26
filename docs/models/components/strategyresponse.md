# StrategyResponse

## Example Usage

```typescript
import { StrategyResponse } from "hedgewise/models/components";

let value: StrategyResponse = {
  id: "<id>",
  createdAt: "1728861399768",
  updatedAt: "1735674844864",
  name: "<value>",
  symbol: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `symbol`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `trajectories`                                                                                   | [components.StrategyTrajectoryResponse](../../models/components/strategytrajectoryresponse.md)[] | :heavy_minus_sign:                                                                               | N/A                                                                                              |