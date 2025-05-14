# Forecast

## Example Usage

```typescript
import { Forecast } from "hedgewise/models/components";

let value: Forecast = {
  model: "Camaro",
  forecastDate: new Date("2024-05-02T17:42:05.194Z"),
  closePriceTrajectory: [
    {
      date: new Date("2024-01-11T07:07:58.389Z"),
      closePrice: 3598.83,
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