# GetStrategyRequest

## Example Usage

```typescript
import { GetStrategyRequest } from "hedgewise/models/operations";

let value: GetStrategyRequest = {
  strategyId: "123e4567-e89b-12d3-a456-426614174000",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `strategyId`                         | *string*                             | :heavy_check_mark:                   | Strategy UUID id                     | 123e4567-e89b-12d3-a456-426614174000 |
| `includeRelationships`               | *boolean*                            | :heavy_minus_sign:                   | N/A                                  |                                      |