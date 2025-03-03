# GetAvailableIndicatorsResponse

## Example Usage

```typescript
import { GetAvailableIndicatorsResponse } from "hedgewise/models/components";

let value: GetAvailableIndicatorsResponse = {
  data: [
    {
      name: "<value>",
      assets: [
        {
          symbol: "<value>",
          type: "<value>",
          assetClassSymbol: "<value>",
          name: "<value>",
          sku: "<value>",
          code: "<value>",
          priceFile: "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `success`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              |
| `data`                                                                           | [components.AvailableIndicator](../../models/components/availableindicator.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |