import { Session, User, ApiError } from "@supabase/supabase-js";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../../styles/globals.css";
import Layout from "../components/Layout";
import authContext, { AuthObj } from "../lib/authContext";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  const authObj: AuthObj = { user: null, session: null, error: null };
  const setAuthObj = (user?: User, session?: Session, error?: ApiError) => {
    if (user) authObj.user = user;
    if (session) authObj.session = session;
    if (error) authObj.error = error;
  };
  authObj.setObj = setAuthObj;
  return (
    <authContext.Provider value={authObj}>
      {getLayout(<Component {...pageProps} />)}
    </authContext.Provider>
  );
};

export default App;
