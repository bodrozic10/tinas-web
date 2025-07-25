import { useEffect, useState } from "react";
import { getUserInfo } from "../api/auth";
import {
  getProfileInfo,
  uploadProfileImage,
  getProfileImage,
} from "../api/profile";
import {
  getOnboardingQuestionsForUser,
  type Onboarding,
} from "../api/onboarding";

export default function ProfilePage() {
  const [onboarding, setOnboarding] = useState<null | Onboarding>(null);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  const [profile, setProfile] = useState(null);
  useEffect(() => {
    getUserInfo().then((res) => {
      console.log({ res });
      if (res?.data.user) {
        Promise.all([
          getProfileInfo(res.data.user.id),
          getOnboardingQuestionsForUser(res.data.user.id),
          getProfileImage(res.data.user.id),
        ]).then(([res1, res2, res3]) => {
          setOnboarding(res2);
          setProfile(res1);
          setProfileImageUrl(res3);
        });
      }
    });
  }, []);

  const [profileImage, setProfileImage] = useState<File | undefined>(undefined);
  const insertProfileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    console.log(file);
    setProfileImage(file);
  };

  const submitProfileImage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    uploadProfileImage(profile.id, profileImage);
  };
  return (
    <div>
      <h1>Profile</h1>
      <p>Onboarding response</p>
      <img src={profileImageUrl} alt="" />
      <pre>{JSON.stringify(onboarding)}</pre>
      <hr />
      <p>Profile response</p>
      <pre>{JSON.stringify(profile)}</pre>
      <form onSubmit={submitProfileImage}>
        <input type="file" onChange={insertProfileImage} />
        <button type="submit">Upload photo</button>
      </form>
    </div>
  );
}
