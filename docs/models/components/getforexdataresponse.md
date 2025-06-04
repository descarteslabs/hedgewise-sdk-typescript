# GetForexDataResponse

## Example Usage

```typescript
import { GetForexDataResponse } from "hedgewise/models/components";

let value: GetForexDataResponse = {
  data: {
    code: "<value>",
    name: "<value>",
    marketDate: new Date("2025-01-10T18:45:53.608Z"),
    prices: [],
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `success`                                                    | *boolean*                                                    | :heavy_check_mark:                                           | N/A                                                          |
| `data`                                                       | [components.ForexData](../../models/components/forexdata.md) | :heavy_check_mark:                                           | N/A                                                          |