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
      datetime: new Date("2023-09-11T22:40:46.497Z"),
      volume: 949319,
      openInterest: 941378,
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