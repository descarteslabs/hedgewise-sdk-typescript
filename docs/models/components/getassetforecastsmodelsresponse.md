# GetAssetForecastsModelsResponse

## Example Usage

```typescript
import { GetAssetForecastsModelsResponse } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: GetAssetForecastsModelsResponse = {
  data: [
    {
      modelName: "<value>",
      startDate: new RFCDate("2023-04-13"),
      endDate: new RFCDate("2025-06-10"),
      horizons: [
        60620,
      ],
    },
  ],
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `success`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `data`                                                                                   | [components.AssetForecastModelData](../../models/components/assetforecastmodeldata.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |