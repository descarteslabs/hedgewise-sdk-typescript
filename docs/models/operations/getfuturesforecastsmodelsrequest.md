# GetFuturesForecastsModelsRequest

## Example Usage

```typescript
import { GetFuturesForecastsModelsRequest } from "hedgewise/models/operations";

let value: GetFuturesForecastsModelsRequest = {
  symbol: "ZC",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `symbol`                                             | *string*                                             | :heavy_check_mark:                                   | Future symbol                                        | ZC                                                   |
| `details`                                            | *boolean*                                            | :heavy_minus_sign:                                   | Expose additional details about the models available |                                                      |