# MovingAverage

## Example Usage

```typescript
import { MovingAverage } from "hedgewise/models/components";

let value: MovingAverage = {
  horizon: 505204,
  movingAverage: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `horizon`                                                                      | *number*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `movingAverage`                                                                | [components.MovingAverageTick](../../models/components/movingaveragetick.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |