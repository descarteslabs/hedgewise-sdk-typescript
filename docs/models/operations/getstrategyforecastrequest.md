# GetStrategyForecastRequest

## Example Usage

```typescript
import { GetStrategyForecastRequest } from "hedgewise/models/operations";

let value: GetStrategyForecastRequest = {
  strategyId: "123e4567-e89b-12d3-a456-426614174000",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `strategyId`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Strategy UUID id                                                                                                             | 123e4567-e89b-12d3-a456-426614174000                                                                                         |
| `concatenateTrajectories`                                                                                                    | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Return a concatenated version of the requested trajectories as if it was coming from a single model. Some restrictions apply |                                                                                                                              |