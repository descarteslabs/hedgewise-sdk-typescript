# MarketDriver

## Example Usage

```typescript
import { MarketDriver } from "hedgewise/models/components";

let value: MarketDriver = {
  model: "Alpine",
  forecastDate: new Date("2025-07-18T10:00:30.471Z"),
  horizon: 807319,
  categories: [
    {
      category: "<value>",
      contribution: 5691.01,
      drilldown: [
        {
          featureCode: "<value>",
          contribution: 4071.83,
          description: "advanced afterwards coliseum",
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