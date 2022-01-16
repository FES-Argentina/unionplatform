import React from "react";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RoutesEnum from "./shared/RoutesEnum";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ForgotPasswordEmailSentPage from "./pages/ForgotPasswordEmailSentPage";
import "./styles/App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import "antd/dist/antd.css";
import NewsArticlePage from "./pages/NewsArticlePage";
import IncidentsPage from "./pages/IncidentsPage";
import NewIncidentPage from "./pages/NewIncidentPage";
import UsefulInformationPage from "./pages/UsefulInformationPage";
import UsefulInfoDetailPage from "./pages/UsefulInfoDetailPage";
import LoggedInRoute from "./components/LoggedInRoute";

function App() {
  return (
    <Router>
      <Route exact path={RoutesEnum.LOGIN} component={LoginPage} />
      <Route exact path={RoutesEnum.SIGNUP} component={SignUpPage} />
      <Route
        exact
        path={RoutesEnum.FORGOT_PASSWORD}
        component={ForgotPasswordPage}
      />
      <Route
        exact
        path={RoutesEnum.FORGOT_PASSWORD_EMAIL_SENT}
        component={ForgotPasswordEmailSentPage}
      />
      <LoggedInRoute exact path={RoutesEnum.HOME} component={HomePage} />
      <LoggedInRoute exact path={RoutesEnum.NEWS} component={NewsPage} />
      <LoggedInRoute
        exact
        path={RoutesEnum.NEWS_ARTICLE}
        component={NewsArticlePage}
      />
      <LoggedInRoute exact path={RoutesEnum.PROFILE} component={ProfilePage} />
      <LoggedInRoute
        exact
        path={RoutesEnum.INCIDENTS}
        component={IncidentsPage}
      />
      <LoggedInRoute
        exact
        path={RoutesEnum.INCIDENTS_NEW}
        component={NewIncidentPage}
      />
      <LoggedInRoute
        exact
        path={RoutesEnum.INCIDENTS_VIEW}
        component={NewIncidentPage}
      />
      <LoggedInRoute
        exact
        path={RoutesEnum.USEFUL_INFORMATION}
        component={UsefulInformationPage}
      />
      <LoggedInRoute
        exact
        path={RoutesEnum.USEFUL_INFORMATION_VIEW}
        component={UsefulInfoDetailPage}
      />
    </Router>
  );
}

export default App;
