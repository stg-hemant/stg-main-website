import React from "react";

import CustomInput from "../components/UI/CustomInput";
import Button from "../components/UI/Buttons";
import { useChangePassword } from "../hooks/useAuth";

const ChangePassword = () => {
  const {
    oldPassword,
    setOldPassword,
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isLoading,
    handleSubmit,
  } = useChangePassword();

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Change Password</h2>
      <form
        className="max-w-md mt-10 p-6 bg-white shadow-md"
        onSubmit={handleSubmit}
      >
        <CustomInput
          title="Old Password:"
          name="old-password"
          type="password"
          value={oldPassword}
          onChange={(event) => setOldPassword(event.target.value)}
        />
        <CustomInput
          title="New Password:"
          name="new-password"
          type="password"
          value={newPassword}
          onChange={(event) => setNewPassword(event.target.value)}
        />
        <CustomInput
          title="Confirm New Password:"
          name="confirm-new-password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Changing Password..." : "Change Password"}
        </Button>
      </form>
    </>
  );
};

export default ChangePassword;
