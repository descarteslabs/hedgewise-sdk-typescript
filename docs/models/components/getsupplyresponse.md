# GetSupplyResponse

## Example Usage

```typescript
import { GetSupplyResponse } from "hedgewise/models/components";

let value: GetSupplyResponse = {
  data: [
    {
      symbol: "<value>",
      commodity: "<value>",
      countryCode: "AQ",
      country: "Uzbekistan",
      date: new Date("2024-01-25T11:37:19.885Z"),
      model: "Cruze",
      forecastedSupply: 163.28,
      reportedSupply: 1852.32,
      reportingAgency: "<value>",
      unit: "joule",
      featureContributions: [
        {
          category: "<value>",
          contribution: 9292.92,
          drilldown: [
            {
              featureCode: "<value>",
              contribution: 996.15,
              description:
                "abaft adrenalin that reluctantly printer innocently hence pish hyphenation trim",
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