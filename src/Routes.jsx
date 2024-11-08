import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/pages/Dashboard";
import ForgotPassowrd from "./pages/Auth/ForgotPassword";

const route = [
  {
    path: "/",
    component: <Register />,
    public: true,
  },
  {
    path: "/login",
    component: <Login />,
    public: true,
  },
  {
    path: "/forgotPassword",
    component: <ForgotPassowrd />,
    public: true,
  },
  {
    path: "/dashboard",
    component: <Dashboard />,
    public: false,
    children: [
      {
        path: "",
        component: <Dashboard />,
      },
    ],
  },
];

const Main = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        {route.map((data, i) => {
          return (
            <React.Fragment key={i}>
              {data.public ? (
                <Route
                  path={data.path}
                  element={data.component}
                  id={data.path}
                />
              ) : null}
            </React.Fragment>
          );
        })}
        {/* {route.map((data, i) => {
          return (
            <React.Fragment key={i}>
              {data.public ? (
                <Route
                  path={data.path}
                  element={data.component}
                  id={data.path}
                />
              )
               :  
    
               (
                <React.Fragment>
                  {data.path.includes("/dashboard") ? (
                    <Route
                      path="/dashboard"
                      element={
                        <ProtectedRoute>
                          <Dashboard />
                        </ProtectedRoute>
                      }
                    >
                      {data.children.map((route, i) => {
                        const id = String(i + 1);
                        return (
                          <Route
                            key={id}
                            id={i}
                            path={route.path}
                            element={route.component}
                            index={!route.path ? true : false}
                          />
                        );
                      })}
                    </Route>
                  ) : null}
                </React.Fragment>
              )}
            </React.Fragment>
          );
        })} */}
      </Route>
    )
  );
  return <RouterProvider router={routes} />;
};

export default Main;
