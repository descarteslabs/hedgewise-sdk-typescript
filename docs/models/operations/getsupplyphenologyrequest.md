# GetSupplyPhenologyRequest

## Example Usage

```typescript
import { GetSupplyPhenologyRequest } from "hedgewise/models/operations";

let value: GetSupplyPhenologyRequest = {
  symbol: "KC",
  countryRegion: "brazil",
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `symbol`               | *string*               | :heavy_check_mark:     | Asset symbol           | KC                     |
| `countryRegion`        | *string*               | :heavy_minus_sign:     | Country name or region | brazil                 |