import { sendOnboardingData } from "../api/onboarding";
import { getUserInfo } from "../api/auth";

export default function OnboardingPage() {
  const dummyData = {
    user_id: "11111111-2222-3333-4444-555555555555",
    full_name: "Jane Doe",
    date_of_birth: "25/12/1995",
    gender: "Female",
    nationality: "Serbian",
    languages: ["English", "Serbian"],
    city: "Dubai",
    area: "Downtown",
    owns_car: true,
    open_to_other_emirates: true,

    previous_events_experience: {
      has_experience: true,
      description: "Worked as an event coordinator for 3 years in Europe.",
    },
    interested_positions: ["Waitress", "Chef Assistant"],

    employment_type: "Full-time",
    chef_specialties: ["Italian Cuisine", "Desserts"],
    years_of_experience: 5,
    special_training: "First Aid Certification",

    uniform_size: "L",
    owns_tinas_uniform: false,

    social_media_experience: {
      has_experience: true,
      description: "Managed Instagram and TikTok campaigns.",
    },
    it_experience: {
      has_experience: false,
      description: "",
    },

    cv_file_url: "https://example.com/files/jane_doe_cv.pdf",
    profile_photo_url: "https://example.com/photos/jane_doe.jpg",
    referred_by: "John Smith",
  };

  const sendOnboarding = async () => {
    const userInfoResponse = await getUserInfo();
    if (userInfoResponse?.data.user) {
      sendOnboardingData({
        ...dummyData,
        user_id: userInfoResponse.data.user.id,
      });
    }
  };
  return (
    <div>
      <h1>Onboarding page</h1>
      <button onClick={sendOnboarding}>Send Onboarding questions</button>
    </div>
  );
}
