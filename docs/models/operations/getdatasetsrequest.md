# GetDatasetsRequest

## Example Usage

```typescript
import { GetDatasetsRequest } from "hedgewise/models/operations";

let value: GetDatasetsRequest = {
  symbols: [
    "KC",
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
  limit: 549582,
  offset: 452827,
  search: "coffee",
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `symbols`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | List of futures contract symbols                                                     | KC                                                                                   |
| `datasetKeys`                                                                        | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Dataset key to which the features belong                                             | technical_macro_v1_2025                                                              |
| `statisticTypes`                                                                     | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Filter by statistic_type on all features attached to the dataset                     | raw_value                                                                            |
| `variableTypes`                                                                      | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Filter by variable_type on all features attached to the dataset                      | price                                                                                |
| `sources`                                                                            | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Filter by source on all features attached to the dataset                             | CFTC                                                                                 |
| `countries`                                                                          | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Filter by country on all features attached to the dataset                            | usa                                                                                  |
| `frequencies`                                                                        | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Filter by frequency on all features attached to the dataset                          | daily                                                                                |
| `phenologyStages`                                                                    | *string*[]                                                                           | :heavy_minus_sign:                                                                   | Filter by phenology_stage or phenology_phase on all features attached to the dataset | harvest                                                                              |
| `limit`                                                                              | *number*                                                                             | :heavy_check_mark:                                                                   | Maximum number of results to return (required). Maximum is 1000.                     |                                                                                      |
| `offset`                                                                             | *number*                                                                             | :heavy_check_mark:                                                                   | Number of results to skip before returning (required)                                |                                                                                      |
| `search`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Search string to match against feature fields.                                       | coffee                                                                               |