# GetSupplyResponse

## Example Usage

```typescript
import { GetSupplyResponse } from "hedgewise/models/components";

let value: GetSupplyResponse = {
  data: [
    {
      symbol: "<value>",
      commodity: "<value>",
      countryCode: "RW",
      country: "Montenegro",
      date: new Date("2023-08-25T22:10:04.502Z"),
      model: "V90",
      forecastedSupply: 350.48,
      reportedSupply: 435.19,
      reportingAgency: "<value>",
      unit: "siemens",
      featureContributions: [
        {
          category: "<value>",
          contribution: 9775.21,
          drilldown: [
            {
              featureCode: "<value>",
              contribution: 7314.38,
              description: "until in enrich",
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `success`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `data`                                                           | [components.SupplyData](../../models/components/supplydata.md)[] | :heavy_check_mark:                                               | N/A                                                              |