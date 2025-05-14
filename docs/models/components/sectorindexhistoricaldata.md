# SectorIndexHistoricalData

## Example Usage

```typescript
import { SectorIndexHistoricalData } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: SectorIndexHistoricalData = {
  assetClass: "<value>",
  data: [
    {
      date: new RFCDate("2025-06-18"),
      value: 3473.16,
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `assetClass`                                                               | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `data`                                                                     | [components.SectorIndexTick](../../models/components/sectorindextick.md)[] | :heavy_check_mark:                                                         | N/A                                                                        |