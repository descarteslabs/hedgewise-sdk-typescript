# ForecastTrajectorySpec

## Example Usage

```typescript
import { ForecastTrajectorySpec } from "hedgewise/models/components";

let value: ForecastTrajectorySpec = {
  model: "Model 3",
  horizon: 267934,
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `model`                                    | *string*                                   | :heavy_check_mark:                         | Specific model to use for forecast window. |
| `horizon`                                  | *components.Horizon*                       | :heavy_check_mark:                         | Number of days to forecast.                |