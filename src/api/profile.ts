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

interface UploadResponse {
  id: string;
  path: string;
  fullPath: string;
}
export const uploadProfileImage = async (userId: string, file: any) => {
  const { data, error } = await supabase.storage
    .from("user-images")
    .upload(`public/profileImages/${userId}`, file, {
      upsert: true,
      cacheControl: "0",
    });
  console.log({ data, error });
  if (data) {
    return data as UploadResponse;
  }
  return null;
};

export const getProfileImage = async (userId: string) => {
  const { data } = supabase.storage
    .from("user-images")
    .getPublicUrl(`public/profileImages/${userId}`);
  if (data) {
    return data.publicUrl;
  }
  return "";
};
