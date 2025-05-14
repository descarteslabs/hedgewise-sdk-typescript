# MovingAverage

## Example Usage

```typescript
import { MovingAverage } from "hedgewise/models/components";

let value: MovingAverage = {
  horizon: 505204,
  movingAverage: [
    {
      date: new Date("2024-06-19T14:24:51.674Z"),
      value: 619.05,
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `horizon`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `movingAverage`                                                                | [components.MovingAverageTick](../../models/components/movingaveragetick.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |