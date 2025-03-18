# ContractWithIndicator

## Example Usage

```typescript
import { ContractWithIndicator } from "hedgewise/models/components";

let value: ContractWithIndicator = {
  assetSymbol: "<value>",
  symbol: "<value>",
  name: "<value>",
  indicator: {
    name: "<value>",
    series: [
      {
        date: "2024-03-24",
        value: 9295.3,
      },
    ],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `assetSymbol`                                                | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `symbol`                                                     | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `name`                                                       | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `lastTick`                                                   | [components.Tick](../../models/components/tick.md)           | :heavy_minus_sign:                                           | N/A                                                          |
| `indicator`                                                  | [components.Indicator](../../models/components/indicator.md) | :heavy_check_mark:                                           | N/A                                                          |