# GetAvailableFeaturesRequest

## Example Usage

```typescript
import { GetAvailableFeaturesRequest } from "hedgewise/models/operations";

let value: GetAvailableFeaturesRequest = {
  symbols: [
    "ZC",
  ],
  datasetKeys: [
    "technical_macro_v1_2025",
  ],
  statisticTypes: [
    "raw_value",
  ],
  variableTypes: [
    "price",
  ],
  sources: [
    "CFTC",
  ],
  countries: [
    "usa",
  ],
  frequencies: [
    "daily",
  ],
  phenologyStages: [
    "harvest",
  ],
  limit: 296936,
  offset: 788309,
  search: "coffee",
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `symbols`                                                        | *string*[]                                                       | :heavy_minus_sign:                                               | Futures contract symbol                                          | ZC                                                               |
| `datasetKeys`                                                    | *string*[]                                                       | :heavy_minus_sign:                                               | Dataset key to which the features                                | technical_macro_v1_2025                                          |
| `featuresStrength`                                               | *boolean*                                                        | :heavy_minus_sign:                                               | Calculate how strongly a feature affects a given commodity       |                                                                  |
| `statisticTypes`                                                 | *string*[]                                                       | :heavy_minus_sign:                                               | Filter by statistic_type                                         | raw_value                                                        |
| `variableTypes`                                                  | *string*[]                                                       | :heavy_minus_sign:                                               | Filter by variable_type                                          | price                                                            |
| `sources`                                                        | *string*[]                                                       | :heavy_minus_sign:                                               | Filter by source                                                 | CFTC                                                             |
| `countries`                                                      | *string*[]                                                       | :heavy_minus_sign:                                               | Filter by country                                                | usa                                                              |
| `frequencies`                                                    | *string*[]                                                       | :heavy_minus_sign:                                               | Filter by frequency                                              | daily                                                            |
| `phenologyStages`                                                | *string*[]                                                       | :heavy_minus_sign:                                               | Filter by phenology_stage or phenology_phase                     | harvest                                                          |
| `limit`                                                          | *number*                                                         | :heavy_check_mark:                                               | Maximum number of results to return (required). Maximum is 1000. |                                                                  |
| `offset`                                                         | *number*                                                         | :heavy_check_mark:                                               | Number of results to skip before returning (required)            |                                                                  |
| `search`                                                         | *string*                                                         | :heavy_minus_sign:                                               | Search string to match against feature fields.                   | coffee                                                           |