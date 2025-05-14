# GetAssetLongTermForecastsResponse

## Example Usage

```typescript
import { GetAssetLongTermForecastsResponse } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: GetAssetLongTermForecastsResponse = {
  data: {
    asset: {
      symbol: "<value>",
      type: "<value>",
      assetClassSymbol: "<value>",
      name: "<value>",
      sku: "<value>",
      code: "<value>",
      priceFile: "<value>",
    },
    longTermForecast: [
      {
        date: new RFCDate("2024-10-31"),
        contract: "<value>",
        priceIncrease: false,
      },
    ],
    marketDrivers: [
      {
        model: "Durango",
        forecastDate: new Date("2023-05-03T16:17:38.192Z"),
        horizon: 65654,
        categories: [
          {
            category: "<value>",
            contribution: 4810.88,
            drilldown: [
              {
                featureCode: "<value>",
                contribution: 2636.8,
                description:
                  "slink between digestive tapioca department newsprint seldom",
              },
            ],
          },
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `success`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.AssetLongTermForecastData](../../models/components/assetlongtermforecastdata.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |