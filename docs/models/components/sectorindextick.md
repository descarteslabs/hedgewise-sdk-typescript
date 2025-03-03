# SectorIndexTick

## Example Usage

```typescript
import { SectorIndexTick } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: SectorIndexTick = {
  date: new RFCDate("2025-09-20"),
  value: 7740.48,
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `date`                            | [RFCDate](../../types/rfcdate.md) | :heavy_check_mark:                | N/A                               |
| `value`                           | *number*                          | :heavy_check_mark:                | N/A                               |