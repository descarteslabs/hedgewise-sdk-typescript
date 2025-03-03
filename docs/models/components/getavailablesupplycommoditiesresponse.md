# GetAvailableSupplyCommoditiesResponse

## Example Usage

```typescript
import { GetAvailableSupplyCommoditiesResponse } from "hedgewise/models/components";

let value: GetAvailableSupplyCommoditiesResponse = {
  data: [
    {
      model: "Challenger",
      symbol: "<value>",
      commodity: "<value>",
      countries: [
        "<value>",
      ],
    },
  ],
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `success`                                                                              | *boolean*                                                                              | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `data`                                                                                 | [components.AvailableSupplyModels](../../models/components/availablesupplymodels.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |