# GetAssetCalendarRequest

## Example Usage

```typescript
import { GetAssetCalendarRequest } from "hedgewise/models/operations";

let value: GetAssetCalendarRequest = {
  symbol: "ZC",
  startDate: "2025-04-17",
  endDate: "2025-04-25",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `symbol`                                      | *string*                                      | :heavy_check_mark:                            | Future symbol                                 | ZC                                            |
| `startDate`                                   | *string*                                      | :heavy_minus_sign:                            | Start of trading calendar window (YYYY-MM-DD) | 2025-04-17                                    |
| `endDate`                                     | *string*                                      | :heavy_minus_sign:                            | End of trading calendar window (YYYY-MM-DD)   | 2025-04-25                                    |