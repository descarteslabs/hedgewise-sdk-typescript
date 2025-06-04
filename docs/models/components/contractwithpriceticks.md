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
      datetime: new Date("2023-05-27T16:43:28.807Z"),
      volume: 535515,
      openInterest: 780588,
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