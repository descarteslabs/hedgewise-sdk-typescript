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
          date: new RFCDate("2023-04-18"),
          value: 8621.92,
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