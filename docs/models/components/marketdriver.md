# MarketDriver

## Example Usage

```typescript
import { MarketDriver } from "hedgewise/models/components";

let value: MarketDriver = {
  model: "1",
  forecastDate: new Date("2024-10-06T04:38:41.451Z"),
  horizon: 640545,
  categories: [
    {
      category: "<value>",
      contribution: 4333.94,
      drilldown: [
        {
          featureCode: "<value>",
          contribution: 694.97,
          description:
            "briefly pneumonia beneath mortar wetly hence netsuke likewise but",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `model`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `forecastDate`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `horizon`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `categories`                                                                                  | [components.FeatureCategory](../../models/components/featurecategory.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |