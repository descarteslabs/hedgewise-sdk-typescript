# SupplyData

## Example Usage

```typescript
import { SupplyData } from "hedgewise/models/components";

let value: SupplyData = {
  symbol: "<value>",
  commodity: "<value>",
  countryCode: "SZ",
  country: "Chile",
  date: new Date("2023-09-03T09:45:25.687Z"),
  model: "A4",
  forecastedSupply: 8703.64,
  reportedSupply: 771.03,
  reportingAgency: "<value>",
  unit: "weber",
  featureContributions: [
    {
      category: "<value>",
      contribution: 620.35,
      drilldown: [],
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `symbol`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `commodity`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `countryCode`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `country`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `date`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `model`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `forecastedSupply`                                                                            | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reportedSupply`                                                                              | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `reportingAgency`                                                                             | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `unit`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `featureContributions`                                                                        | [components.FeatureCategory](../../models/components/featurecategory.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |