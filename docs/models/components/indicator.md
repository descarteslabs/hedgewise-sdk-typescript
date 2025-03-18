# Indicator

## Example Usage

```typescript
import { Indicator } from "hedgewise/models/components";

let value: Indicator = {
  name: "<value>",
  series: [
    {
      date: "2024-11-18",
      value: 7851.53,
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `name`                                                                 | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `series`                                                               | [components.IndicatorTick](../../models/components/indicatortick.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |