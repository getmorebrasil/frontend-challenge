import { Route, Switch } from "react-router-dom";

import { Home, NoMatch, MovieDetail } from "../screens";

const AppRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/detail" component={MovieDetail} />
      <Route path="*" component={NoMatch} />
    </Switch>
  );
};

export default AppRoutes;
