import { useEffect, useState } from "react";
import { getUserInfo } from "../api/auth";
import { getProfileInfo } from "../api/profile";
import {
  getOnboardingQuestionsForUser,
  type Onboarding,
} from "../api/onboarding";

export default function ProfilePage() {
  const [onboarding, setOnboarding] = useState<null | Onboarding>(null);
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    getUserInfo().then((res) => {
      if (res?.data.user) {
        Promise.all([
          getProfileInfo(res.data.user.id),
          getOnboardingQuestionsForUser(res.data.user.id),
        ]).then(([res1, res2]) => {
          setOnboarding(res2);
          setProfile(res1);
        });
      }
    });
  }, []);
  return (
    <div>
      <h1>Profile</h1>
      <p>Onboarding response</p>
      <pre>{JSON.stringify(onboarding)}</pre>
      <hr />
      <p>Profile response</p>
      <pre>{JSON.stringify(profile)}</pre>
    </div>
  );
}
