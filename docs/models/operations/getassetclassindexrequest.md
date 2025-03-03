# GetAssetClassIndexRequest

## Example Usage

```typescript
import { GetAssetClassIndexRequest } from "hedgewise/models/operations";

let value: GetAssetClassIndexRequest = {
  assetClassSymbol: "ENR",
  methodology: "riskparity",
  startDate: "2025-02-02",
  endDate: "2025-03-02",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `assetClassSymbol`                                                                                                       | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | A list of Asset Class (sector) identifier requested. ALL can be used to query all asset classes indices at the same time | GRN                                                                                                                      |
| `methodology`                                                                                                            | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | The type of indexing methodology requested. Equal weight (equalweight) or risk-parity (riskparity) are supported         | riskparity                                                                                                               |
| `startDate`                                                                                                              | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Start of the index data window (YYYY-MM-DD) - Index will start at 100 on that date                                       | 2025-02-02                                                                                                               |
| `endDate`                                                                                                                | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | End of index data window (YYYY-MM-DD)                                                                                    | 2025-03-02                                                                                                               |