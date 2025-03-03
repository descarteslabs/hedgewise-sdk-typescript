# Forecast

## Example Usage

```typescript
import { Forecast } from "hedgewise/models/components";

let value: Forecast = {
  model: "Fiesta",
  forecastDate: new Date("2024-01-25T18:02:14.843Z"),
  closePriceTrajectory: [
    {
      date: new Date("2025-10-27T17:07:18.797Z"),
      closePrice: 7653.26,
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `model`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `forecastDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `closePriceTrajectory`                                                                        | [components.ForecastTick](../../models/components/forecasttick.md)[]                          | :heavy_check_mark:                                                                            | N/A                                                                                           |