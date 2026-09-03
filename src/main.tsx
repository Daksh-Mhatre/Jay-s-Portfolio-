import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

/*
 * HashRouter is used deliberately: the production build is a single static
 * HTML file. Path-based routing (BrowserRouter) would 404 on a hard refresh
 * of /about or /contact unless the host provides SPA fallback, which is
 * exactly the "blank page" failure reported. The hash form works on any
 * static host: /#/about, /#/gallery, /#/contact, /#/ always render and
 * refresh correctly. All <Link to="/..."> routes are unchanged.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);
