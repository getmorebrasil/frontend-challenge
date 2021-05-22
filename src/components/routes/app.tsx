import { Route, Switch } from "react-router-dom";

import { Home, NoMatch } from "../screens";

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

export default AppRoutes;
