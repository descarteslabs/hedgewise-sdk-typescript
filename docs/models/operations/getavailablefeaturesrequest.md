# GetAvailableFeaturesRequest

## Example Usage

```typescript
import { GetAvailableFeaturesRequest } from "hedgewise/models/operations";

let value: GetAvailableFeaturesRequest = {
  symbol: "ZC",
  datasetKey: "technical_macro_v1_2025",
};
```

## Fields

| Field                             | Type                              | Required                          | Description                       | Example                           |
| --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- | --------------------------------- |
| `symbol`                          | *string*                          | :heavy_minus_sign:                | Futures contract symbol           | ZC                                |
| `datasetKey`                      | *string*                          | :heavy_minus_sign:                | Dataset key to which the features | technical_macro_v1_2025           |