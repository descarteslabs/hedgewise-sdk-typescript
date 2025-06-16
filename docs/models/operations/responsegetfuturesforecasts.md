# ResponseGetFuturesForecasts

Successful Response


## Supported Types

### `components.GetAssetForecastsResponse`

```typescript
const value: components.GetAssetForecastsResponse = {
  data: {
    asset: {
      symbol: "<value>",
      type: "<value>",
      assetClassSymbol: "<value>",
      name: "<value>",
      sku: "<value>",
      code: "<value>",
      priceFile: "<value>",
    },
    contracts: [],
  },
};
```

### `components.GetAssetForecastsSmallResponse`

```typescript
const value: components.GetAssetForecastsSmallResponse = {
  data: {
    asset: {
      symbol: "<value>",
      type: "<value>",
      assetClassSymbol: "<value>",
      name: "<value>",
      sku: "<value>",
      code: "<value>",
      priceFile: "<value>",
    },
    contracts: [
      {
        assetSymbol: "<value>",
        symbol: "<value>",
        name: "<value>",
        forecasts: [
          {
            model: "Countach",
            forecastDate: new Date("2023-04-27T15:15:22.866Z"),
            closePriceTrajectory: [],
          },
        ],
        marketDrivers: [
          {
            model: "Element",
            forecastDate: new Date("2025-03-19T14:21:02.391Z"),
            targetDateContract: "<value>",
            horizon: 74116,
            categories: [],
          },
        ],
        movingAverages: [
          {
            horizon: 650817,
            movingAverage: [
              {
                date: new Date("2025-05-04T12:02:08.109Z"),
                value: 322.66,
              },
            ],
          },
        ],
      },
    ],
  },
};
```

