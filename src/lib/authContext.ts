import { ApiError, Session, User } from "@supabase/supabase-js";
import { createContext } from "react";

export type AuthObj = {
  user?: User | null;
  session?: Session | null;
  error?: ApiError | null;
  setObj?: (authObj: AuthObj) => void;
  counter?: number | null;
};

const authContext = createContext<AuthObj>({});

export default authContext;
