# MUI Components

## Introduction

Feel free to use it. Introduction section coming soon.

## Setup

Run the following command:

```bash
cp .env{.example,}
```

Use following to setup the package:

```text
APP_NAME={APP NAME}
VITE_API_ENDPOINT={API ENDPOINT}
LOGIN_TOKEN = {LOGIN TOKEN NAME}
USER_VALUE={USER DATA VALUE}
```

You can access these values by importing

```typescript jsx
import {KEY} from "@an/env";
```

### Example:

```typescript jsx
import {APP_NAME} from "@an/env";

return (
    <>
        App Name: {APP_NAME}
    </>
)
```

### Default Value

```text
APP_NAME = "Application"
VITE_API_ENDPOINT = "https://localhost:8000"
LOGIN_TOKEN = "_an_token"
USER_VALUE = "_an_user"
```


## Initialization

Copy the following code and replace in `main.tsx` file:

```typescript jsx
import ReactDOM from 'react-dom/client'
import store from "@an/env";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import ANRoutes from "@anWrappers/ANRoutes.tsx";
import ANLayout from "@anWrappers/ANLayout.tsx";
import ThemeWrapper from "@anWrappers/ThemeWrapper.tsx";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Provider store={store}>
            <BrowserRouter>
                <ThemeWrapper>
                    <ANLayout>
                        <ANRoutes/>
                    </ANLayout>
                </ThemeWrapper>
            </BrowserRouter>
        </Provider>
    </>
)
```