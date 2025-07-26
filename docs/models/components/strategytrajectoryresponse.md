# StrategyTrajectoryResponse

## Example Usage

```typescript
import { StrategyTrajectoryResponse } from "hedgewise/models/components";

let value: StrategyTrajectoryResponse = {
  id: "<id>",
  createdAt: "1718522202663",
  updatedAt: "1735669232650",
  startDate: null,
  endDate: "<value>",
  priceCollarSigma: 175405,
  estimateUncertainty: true,
  interpolate: true,
  getMarketDrivers: true,
  getMovingAverages: true,
  strategyId: "<id>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `createdAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `updatedAt`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `startDate`                                                                                                    | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `endDate`                                                                                                      | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `priceCollarSigma`                                                                                             | *number*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `estimateUncertainty`                                                                                          | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `interpolate`                                                                                                  | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `getMarketDrivers`                                                                                             | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `getMovingAverages`                                                                                            | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `strategyId`                                                                                                   | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `horizons`                                                                                                     | [components.StrategyTrajectoryHorizonResponse](../../models/components/strategytrajectoryhorizonresponse.md)[] | :heavy_minus_sign:                                                                                             | N/A                                                                                                            |