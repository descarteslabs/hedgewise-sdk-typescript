# GetSupplyRequest

## Example Usage

```typescript
import { GetSupplyRequest } from "hedgewise/models/operations";

let value: GetSupplyRequest = {
  symbol: "KC",
  countryCode: "BR",
  startDate: "2024-03-02",
  endDate: "2025-03-02",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `symbol`                                                | *string*                                                | :heavy_check_mark:                                      | Asset symbol                                            | KC                                                      |
| `countryCode`                                           | *string*                                                | :heavy_minus_sign:                                      | Country code (UN/LOCODE). If blank, return global data. | BR                                                      |
| `startDate`                                             | *string*                                                | :heavy_minus_sign:                                      | Start of date range for supply forecasts (YYYY-MM-DD)   | 2024-03-02                                              |
| `endDate`                                               | *string*                                                | :heavy_minus_sign:                                      | End of date range for supply forecasts (YYYY-MM-DD)     | 2025-03-02                                              |
| `getFeatureContributions`                               | *boolean*                                               | :heavy_minus_sign:                                      | Return feature contributions for requested forecasts.   |                                                         |
| `model`                                                 | *string*                                                | :heavy_minus_sign:                                      | Supply model to use for forecasting.                    | v2_wholecountry_92to23_interval10_yesyoy_xgb            |