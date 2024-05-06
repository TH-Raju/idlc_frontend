import ConfirmPassword from "@/Components/Auth/ConfirmPassword";
import { Metadata } from "next";

export const metadata = {
  title: "Confirm Password",
  description: "Confirm Password page",
};

const ConfirmPasswordPage = () => {
  return (
    <>
      <ConfirmPassword />
    </>
  );
};

export default ConfirmPasswordPage;
