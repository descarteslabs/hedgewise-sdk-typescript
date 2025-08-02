# GetForexDataLlmCodeLlmGetRequest

## Example Usage

```typescript
import { GetForexDataLlmCodeLlmGetRequest } from "hedgewise/models/operations";
import { RFCDate } from "hedgewise/types";

let value: GetForexDataLlmCodeLlmGetRequest = {
  code: "EUR",
  startDate: new RFCDate("2025-04-17"),
  endDate: new RFCDate("2025-04-25"),
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `code`                                                                                                    | *string*                                                                                                  | :heavy_check_mark:                                                                                        | Three-letter currency code                                                                                | EUR                                                                                                       |
| `startDate`                                                                                               | [RFCDate](../../types/rfcdate.md)                                                                         | :heavy_minus_sign:                                                                                        | Start of forex data window (YYYY-MM-DD)                                                                   | 2025-04-17                                                                                                |
| `endDate`                                                                                                 | [RFCDate](../../types/rfcdate.md)                                                                         | :heavy_minus_sign:                                                                                        | End of forex data window (YYYY-MM-DD)                                                                     | 2025-04-25                                                                                                |
| `foreignPerUsd`                                                                                           | *boolean*                                                                                                 | :heavy_minus_sign:                                                                                        | Return prices as foreign currency per USD. If false, prices will be returned as USD per foreign currency. |                                                                                                           |