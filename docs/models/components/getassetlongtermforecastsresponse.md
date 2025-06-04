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
        date: new RFCDate("2024-02-17"),
        contract: "<value>",
        priceIncrease: true,
      },
    ],
    marketDrivers: null,
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `success`                                                                                    | *boolean*                                                                                    | :heavy_check_mark:                                                                           | N/A                                                                                          |
| `data`                                                                                       | [components.AssetLongTermForecastData](../../models/components/assetlongtermforecastdata.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |