# GetAssetCalendarRequest

## Example Usage

```typescript
import { GetAssetCalendarRequest } from "hedgewise/models/operations";

let value: GetAssetCalendarRequest = {
  symbol: "ZC",
  startDate: "2025-02-24",
  endDate: "2025-03-03",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `symbol`                                      | *string*                                      | :heavy_check_mark:                            | Future symbol                                 | ZC                                            |
| `startDate`                                   | *string*                                      | :heavy_minus_sign:                            | Start of trading calendar window (YYYY-MM-DD) | 2025-02-24                                    |
| `endDate`                                     | *string*                                      | :heavy_minus_sign:                            | End of trading calendar window (YYYY-MM-DD)   | 2025-03-03                                    |