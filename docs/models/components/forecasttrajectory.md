# ForecastTrajectory

## Example Usage

```typescript
import { ForecastTrajectory } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: ForecastTrajectory = {
  trajectory: [],
  startDate: new RFCDate("2024-08-29"),
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `trajectory`                                                                                   | [components.ForecastTrajectoryElement](../../models/components/forecasttrajectoryelement.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `startDate`                                                                                    | [RFCDate](../../types/rfcdate.md)                                                              | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `endDate`                                                                                      | [RFCDate](../../types/rfcdate.md)                                                              | :heavy_minus_sign:                                                                             | N/A                                                                                            |