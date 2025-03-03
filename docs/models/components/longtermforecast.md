# LongTermForecast

## Example Usage

```typescript
import { LongTermForecast } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: LongTermForecast = {
  date: new RFCDate("2024-10-02"),
  contract: "<value>",
  priceIncrease: false,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `date`                            | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `contract`                        | *string*                          | :heavy_check_mark:                | N/A                               |
| `priceIncrease`                   | *boolean*                         | :heavy_check_mark:                | N/A                               |