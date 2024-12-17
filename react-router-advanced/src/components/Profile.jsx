// Profile.jsx
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const Profile = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <h2>Profile</h2>
      <Routes />
      <Switch>
        <Route exact path={path} component={ProfileDetails} />
        <Route path={`${path}/settings`} component={ProfileSettings} />
      </Switch>
    </div>
  );
};

export default Profile;