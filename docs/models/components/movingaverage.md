# MovingAverage

## Example Usage

```typescript
import { MovingAverage } from "hedgewise/models/components";

let value: MovingAverage = {
  horizon: 998848,
  movingAverage: [
    {
      date: new Date("2023-06-13T19:05:17.540Z"),
      value: 8681.26,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `horizon`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `movingAverage`                                                                | [components.MovingAverageTick](../../models/components/movingaveragetick.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |