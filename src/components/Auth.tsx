import { SupabaseClient } from "@supabase/supabase-js";

type AuthProps = {
  client: SupabaseClient;
  view: "sign-in" | "sign-up" | "forgot-pass";
};
const Auth = ({ client, view }: AuthProps) => {
  /* const
   * if (view === "sign-in") return () */
};
