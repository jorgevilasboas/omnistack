import { createSwitchNavigation, createAppContainer } from "react-navigation";

import Login from "./pages/Login";

const Routes = createAppContainer(
  createSwitchNavigation({
    Login
  })
);

export default Routes;
