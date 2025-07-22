import { supabase } from "./supabase";

interface UserCredentials {
  email: string;
  password: string;
}

export const loginWithEmailAndPassword = ({
  email,
  password,
}: UserCredentials) => {
  return supabase.auth.signInWithPassword({ email, password });
};

export const signupWithEmailAndPassword = async ({
  email,
  password,
}: UserCredentials) => {
  await supabase.auth.signUp({
    email,
    password,
  });
};

export const getUserInfo = async () => {
  const { data: sessionResponse } = await supabase.auth.getSession();
  if (sessionResponse.session?.access_token) {
    return supabase.auth.getUser(sessionResponse.session.access_token);
  }
  return null;
};
