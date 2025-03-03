# SupplyData

## Example Usage

```typescript
import { SupplyData } from "hedgewise/models/components";

let value: SupplyData = {
  symbol: "<value>",
  commodity: "<value>",
  countryCode: "UZ",
  country: "Saint Helena",
  date: new Date("2025-02-05T17:37:20.583Z"),
  model: "XC90",
  forecastedSupply: 9944.01,
  reportedSupply: 4518.22,
  reportingAgency: "<value>",
  unit: "mole",
  featureContributions: [
    {
      category: "<value>",
      contribution: 2927.94,
      drilldown: [
        {
          featureCode: "<value>",
          contribution: 1523.54,
          description: "egg keenly grave incidentally righteously gastropod",
        },
      ],
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