# ForecastSmall

## Example Usage

```typescript
import { ForecastSmall } from "hedgewise/models/components";

let value: ForecastSmall = {
  model: "PT Cruiser",
  forecastDate: new Date("2024-03-24T22:59:55.072Z"),
  closePriceTrajectory: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `model`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `forecastDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `closePriceTrajectory`                                                                        | [components.ForecastTickSmall](../../models/components/forecastticksmall.md)[]                | :heavy_check_mark:                                                                            | N/A                                                                                           |