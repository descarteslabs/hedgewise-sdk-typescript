# Indicator

## Example Usage

```typescript
import { Indicator } from "hedgewise/models/components";
import { RFCDate } from "hedgewise/types";

let value: Indicator = {
  name: "<value>",
  series: [
    {
      date: new RFCDate("2023-11-11"),
      value: 9266.2,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `series`                                                               | [components.IndicatorTick](../../models/components/indicatortick.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |