# PhenologyData

## Example Usage

```typescript
import { PhenologyData } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: PhenologyData = {
  location: "<value>",
  crop: "<value>",
  phenologyPhase: "<value>",
  start: new RFCDate("2023-03-03"),
  end: new RFCDate("2025-09-13"),
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `location`                        | *string*                          | :heavy_check_mark:                | N/A                               |
| `crop`                            | *string*                          | :heavy_check_mark:                | N/A                               |
| `phenologyPhase`                  | *string*                          | :heavy_check_mark:                | N/A                               |
| `start`                           | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `end`                             | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |