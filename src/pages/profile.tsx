import { useUser } from "@auth0/nextjs-auth0";

const ProfilePage = () => {
  const { user } = useUser();
  return <>Hello {user?.name}</>;
};

export default ProfilePage;
