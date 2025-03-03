<!-- Start SDK Example Usage [usage] -->
```typescript
import { Hedgewise } from "hedgewise";

const hedgewise = new Hedgewise({
  serverURL: "https://api.example.com",
});

async function run() {
  const result = await hedgewise.system.ping();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->