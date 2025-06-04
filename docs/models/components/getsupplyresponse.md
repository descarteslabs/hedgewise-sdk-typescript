# GetSupplyResponse

## Example Usage

```typescript
import { GetSupplyResponse } from "hedgewise/models/components";

let value: GetSupplyResponse = {
  data: [
    {
      symbol: "<value>",
      commodity: "<value>",
      countryCode: "MP",
      country: "Cote d'Ivoire",
      date: new Date("2025-10-18T11:13:40.747Z"),
      model: "911",
      forecastedSupply: 435.19,
      reportedSupply: 8426.17,
      reportingAgency: "<value>",
      unit: "katal",
      featureContributions: [],
    },
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `success`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              |
| `data`                                                           | [components.SupplyData](../../models/components/supplydata.md)[] | :heavy_check_mark:                                               | N/A                                                              |