# GetSectorIndexHistoricalResponse

## Example Usage

```typescript
import { GetSectorIndexHistoricalResponse } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: GetSectorIndexHistoricalResponse = {
  data: [
    {
      assetClass: "<value>",
      data: [
        {
          date: new RFCDate("2024-03-30"),
          value: 2388.39,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `success`                                                                                      | *boolean*                                                                                      | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `data`                                                                                         | [components.SectorIndexHistoricalData](../../models/components/sectorindexhistoricaldata.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |