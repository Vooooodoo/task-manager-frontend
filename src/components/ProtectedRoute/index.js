import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

// этот HOC принимает другой компонент в качестве пропса
// он также может взять неограниченное число пропсов и передать их новому компоненту
function CustomRoute({ component: Component, ...props }) {
  const isAuthRoute = props.path === "/sign-up" || props.path === "/sign-in";
  const privateComponent = props.isLoggedIn ? (
    <Component />
  ) : (
    <Redirect to="/sign-in" />
  );

  const createRoute = () => {
    return isAuthRoute ? <Component /> : privateComponent;
  };

  return <Route {...props} render={createRoute} />;
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
});

export default connect(mapStateToProps)(CustomRoute);
