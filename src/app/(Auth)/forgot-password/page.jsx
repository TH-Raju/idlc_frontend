import ForgotPassword from "@/Components/Auth/ForgotPassword";
import { Metadata } from "next";

export const metadata = {
  title: "Forgot Password",
  description: "Forgot Password page",
};

export default function ForgotPasswordPage() {
  return (
    <div>
      <ForgotPassword />
    </div>
  );
}
