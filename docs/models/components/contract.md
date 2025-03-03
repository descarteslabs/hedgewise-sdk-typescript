# Contract

## Example Usage

```typescript
import { Contract } from "hedgewise/models/components";

let value: Contract = {
  assetSymbol: "<value>",
  symbol: "<value>",
  name: "<value>",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `assetSymbol`                                      | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `symbol`                                           | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `name`                                             | *string*                                           | :heavy_check_mark:                                 | N/A                                                |
| `lastTick`                                         | [components.Tick](../../models/components/tick.md) | :heavy_minus_sign:                                 | N/A                                                |