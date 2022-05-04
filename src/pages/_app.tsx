import { Auth } from "@supabase/ui";
import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import "../../styles/globals.css";
import Layout from "../components/Layout";
import { anonSupabaseClient } from "../lib/initSupabase";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);
  return (
    <Auth.UserContextProvider supabaseClient={anonSupabaseClient}>
      {getLayout(<Component {...pageProps} />)}
    </Auth.UserContextProvider>
  );
};

export default App;
