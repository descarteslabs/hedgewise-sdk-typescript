# ContractWithPriceTicks

## Example Usage

```typescript
import { ContractWithPriceTicks } from "hedgewise/models/components";

let value: ContractWithPriceTicks = {
  assetSymbol: "<value>",
  symbol: "<value>",
  name: "<value>",
  ticks: [
    {
      datetime: new Date("2025-04-26T09:47:46.796Z"),
      volume: 133847,
      openInterest: 535515,
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `assetSymbol`                                        | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `symbol`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `name`                                               | *string*                                             | :heavy_check_mark:                                   | N/A                                                  |
| `lastTick`                                           | [components.Tick](../../models/components/tick.md)   | :heavy_minus_sign:                                   | N/A                                                  |
| `rolloverDate`                                       | [RFCDate](../../types/rfcdate.md)                    | :heavy_minus_sign:                                   | N/A                                                  |
| `ticks`                                              | [components.Tick](../../models/components/tick.md)[] | :heavy_check_mark:                                   | N/A                                                  |