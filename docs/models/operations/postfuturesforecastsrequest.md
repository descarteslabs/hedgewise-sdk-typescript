# PostFuturesForecastsRequest

## Example Usage

```typescript
import { PostFuturesForecastsRequest } from "hedgewise/models/operations";

let value: PostFuturesForecastsRequest = {
  symbol: "ZC",
  postAssetForecastsRequest: {
    strategy: [
      {
        startDate: "2025-04-24",
        endDate: "2025-04-24",
        trajectory: [
          {
            model: "Escalade",
            horizon: "<value>",
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                                     | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Future symbol                                                                                                                | ZC                                                                                                                           |
| `concatenateTrajectories`                                                                                                    | *boolean*                                                                                                                    | :heavy_minus_sign:                                                                                                           | Return a concatenated version of the requested trajectories as if it was coming from a single model. Some restrictions apply |                                                                                                                              |
| `postAssetForecastsRequest`                                                                                                  | [components.PostAssetForecastsRequest](../../models/components/postassetforecastsrequest.md)                                 | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |