# PostAssetForecastsResponse

## Example Usage

```typescript
import { PostAssetForecastsResponse } from "hedgewise/models/components";

let value: PostAssetForecastsResponse = {
  data: [
    {
      asset: {
        symbol: "<value>",
        type: "<value>",
        assetClassSymbol: "<value>",
        name: "<value>",
        sku: "<value>",
        code: "<value>",
        priceFile: "<value>",
      },
      contracts: [
        {
          assetSymbol: "<value>",
          symbol: "<value>",
          name: "<value>",
          forecasts: [
            {
              model: "Civic",
              forecastDate: new Date("2024-09-08T05:11:46.812Z"),
              closePriceTrajectory: [
                {
                  date: new Date("2025-02-01T18:23:42.142Z"),
                  closePrice: 4544.34,
                },
              ],
            },
          ],
          marketDrivers: [
            {
              model: "Jetta",
              forecastDate: new Date("2025-12-29T03:12:59.681Z"),
              horizon: 630060,
              categories: [
                {
                  category: "<value>",
                  contribution: 5159.66,
                  drilldown: [
                    {
                      featureCode: "<value>",
                      contribution: 4822.7,
                      description: "phooey upwardly qua",
                    },
                  ],
                },
              ],
            },
          ],
          movingAverages: [
            {
              horizon: 319203,
              movingAverage: [
                {
                  date: new Date("2025-02-10T15:09:01.396Z"),
                  value: 7616.02,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `success`                                                                      | *boolean*                                                                      | :heavy_check_mark:                                                             | N/A                                                                            |
| `data`                                                                         | [components.AssetForecastData](../../models/components/assetforecastdata.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |