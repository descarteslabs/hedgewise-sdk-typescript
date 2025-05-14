# ForecastTrajectory

## Example Usage

```typescript
import { ForecastTrajectory } from "hedgewise/models/components";

let value: ForecastTrajectory = {
  model: "Civic",
  horizon: "<value>",
};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `model`                                    | *string*                                   | :heavy_check_mark:                         | Specific model to use for forecast window. |
| `horizon`                                  | *components.Horizon*                       | :heavy_check_mark:                         | Number of days to forecast.                |