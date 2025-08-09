# GetSupplyLlmRequest

## Example Usage

```typescript
import { GetSupplyLlmRequest } from "hedgewise/models/operations";

let value: GetSupplyLlmRequest = {
  symbol: "KC",
  countryCode: "BR",
  startDate: "2024-04-24",
  endDate: "2025-04-25",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `symbol`                                                | *string*                                                | :heavy_check_mark:                                      | Asset symbol                                            | KC                                                      |
| `countryCode`                                           | *string*                                                | :heavy_minus_sign:                                      | Country code (UN/LOCODE). If blank, return global data. | BR                                                      |
| `startDate`                                             | *string*                                                | :heavy_minus_sign:                                      | Start of date range for supply forecasts (YYYY-MM-DD)   | 2024-04-24                                              |
| `endDate`                                               | *string*                                                | :heavy_minus_sign:                                      | End of date range for supply forecasts (YYYY-MM-DD)     | 2025-04-25                                              |
| `getFeatureContributions`                               | *boolean*                                               | :heavy_minus_sign:                                      | Return feature contributions for requested forecasts.   |                                                         |
| `model`                                                 | *string*                                                | :heavy_minus_sign:                                      | Supply model to use for forecasting.                    | v2_wholecountry_92to23_interval10_yesyoy_xgb            |