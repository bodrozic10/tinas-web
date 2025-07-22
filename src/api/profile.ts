import { supabase } from "./supabase";

export interface Profile {
  id: string;
  permissions?: string;
  fullName?: string;
  age?: number;
  city?: string;
  area?: string; // "Dubai" or "Abu Dhabi"
  address?: string;
  phoneNumber?: string;
  email?: string;
  positionType?: string;
  profile_image_url?: string;
  approved: boolean;
}

export const getProfileInfo = async (userId: string) => {
  const { data } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();
  if (data) {
    return data as Profile;
  }
  return null;
};
