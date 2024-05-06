import Verification from "@/Components/Auth/Verification";
import { Metadata } from "next";

export const metadata = {
  title: "verify",
  description: "User verify page",
};

const VerificationPage = () => {
  return (
    <>
      <Verification />
    </>
  );
};

export default VerificationPage;
