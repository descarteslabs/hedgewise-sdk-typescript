# DatasetResponse

Response model for individual dataset with feature count.

## Example Usage

```typescript
import { DatasetResponse } from "hedgewise/models/components";

let value: DatasetResponse = {
  id: "0a1d6681-df2f-455b-a179-e9820a9a88c2",
  createdAt: new Date("2023-09-24T11:51:07.403Z"),
  updatedAt: new Date("2023-02-21T20:50:54.976Z"),
  key: "<key>",
  name: "<value>",
  description: "mmm co-producer guide",
  type: "<value>",
  publisherName: "<value>",
  publisherId: "e685afb9-ac57-47cc-b2ed-309d4afeea99",
  startDate: new Date("2024-01-03T21:09:23.118Z"),
  endDate: new Date("2025-04-16T21:03:20.921Z"),
  frequency: null,
  featureCount: 614850,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `key`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publisherName`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `publisherId`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `frequency`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `featureCount`                                                                                | *number*                                                                                      | :heavy_check_mark:                                                                            | Number of features associated with this dataset                                               |