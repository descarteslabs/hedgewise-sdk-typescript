# GetForexPricesRequest

## Example Usage

```typescript
import { GetForexPricesRequest } from "hedgewise/models/operations";

let value: GetForexPricesRequest = {
  code: "EUR",
  startDate: "2025-03-11",
  endDate: "2025-03-18",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Forex code                                                                                                | EUR                                                                                                       |
| `startDate`                                                                                               | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Start of forex data window (YYYY-MM-DD)                                                                   | 2025-03-11                                                                                                |
| `endDate`                                                                                                 | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | End of forex data window (YYYY-MM-DD)                                                                     | 2025-03-18                                                                                                |
| `foreignPerUsd`                                                                                           | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Return prices as foreign currency per USD. If false, prices will be returned as USD per foreign currency. |                                                                                                           |