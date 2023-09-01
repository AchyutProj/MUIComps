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
