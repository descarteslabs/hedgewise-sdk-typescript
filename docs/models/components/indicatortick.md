# IndicatorTick

## Example Usage

```typescript
import { IndicatorTick } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: IndicatorTick = {
  date: new RFCDate("2024-06-21"),
  value: 5550.24,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `date`                            | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `value`                           | *number*                          | :heavy_check_mark:                | N/A                               |