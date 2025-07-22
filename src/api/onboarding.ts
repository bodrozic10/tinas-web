/* eslint-disable @typescript-eslint/no-explicit-any */
import { supabase } from "./supabase";

export interface Onboarding {
  full_name: string;
  date_of_birth: string;
  gender: string;
  nationality: string;
  languages: string[];
  city: string;
  area: string;
  owns_car: boolean;
  open_to_other_emirates: boolean;
  previous_events_experience: any;
  interested_positions: string[];
  employment_type: string;
  chef_specialties?: string[];
  years_of_experience: number;
  special_training?: string;
  uniform_size: string;
  owns_tinas_uniform: boolean;
  social_media_experience: any;
  it_experience: any;
  cv_file_url: string;
  profile_photo_url: string;
  referred_by?: string;
  user_id: string;
}

export const sendOnboardingData = async (data: Onboarding) => {
  const { error } = await supabase.from("onboarding").insert([data]);
  if (error) {
    console.log("failovao je");
  }
};

export const getOnboardingQuestionsForUser = async (userId: string) => {
  const { data } = await supabase
    .from("onboarding")
    .select("*")
    .eq("user_id", userId)
    .single();
  if (data) {
    return data as Onboarding;
  }
  return null;
};
