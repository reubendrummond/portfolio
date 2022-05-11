import { useAuth } from "@auth/AuthContext";
import Image from "next/image";
import { LightDarkModeToggle } from "@components/LightDarkModeToggle";
import React, { FC } from "react";
import Link from "next/link";

export const UserActions: FC = () => {
  const { user, logout } = useAuth();
  return (
    <>
      {user ? (
        <>
          <div className="flex flex-row h-full p-3 gap-3">
            <div className="relative aspect-square ">
              <Image
                src={user.photoURL ? user.photoURL : ""}
                className="rounded-full"
                alt="user photo"
                layout="fill"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-bold text-slate-400">{user.displayName}</p>
              <p className="font-sm text-slate-500">{user.email}</p>
            </div>
          </div>
          <button className="text-slate-400" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <Link href="/login" passHref>
          <p className="text-slate-400">Login</p>
        </Link>
      )}
      <LightDarkModeToggle />
    </>
  );
};

export default UserActions;
