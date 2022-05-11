import Link from "next/link";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";
import { UserActions } from "./UserActions";
import { useRouter } from "next/router";
import { MenuIcon } from "@heroicons/react/solid";

const Navbar: FC = (): ReactElement => {
  const router = useRouter();

  const pages = [
    {
      name: "Home",
      href: "/",
      active: false,
    },
    {
      name: "Keys",
      href: "/keys",
      active: false,
    },
  ];

  // useEffect(() => {

  // }, router.asPath)

  return (
    // <div className="flex flex-row justify-around items-center h-20 bg-slate-300 dark:bg-slate-900">
    //   <Link href="/" passHref>
    //     <p className="text-xl text-bold text-slate-500 dark:slate-600">Logo</p>
    //   </Link>

    //   {/* {pages.map(({ name, href }) => {
    //     return (
    //       <Link key={name} href={href} passHref>
    //         <p className="bold text-slate-300 hover:cursor-pointer">{name}</p>
    //       </Link>
    //     );
    //   })} */}
    //   <UserActions />
    // </div>
    <nav className="px-4 py-2 bg-neutral-200">
      <div className="container flex flex-row rounded-b-md mx-auto justify-between items-center h-[64px]">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex flex-row gap-x-4 items-center hover:cursor-pointer fill-black hover:opacity-70">
            <svg
              version="1.1"
              id="Design"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              height="64px"
              viewBox="0 200 1200 800"
            >
              <g>
                <path d="M891.682,296.413c-2.058,0-4.098,0.084-6.149,0.123c-132.021,2.69-221.952,91.425-275.547,169.134    l59.762,114.947c31.478-60.396,104.203-170.459,217.099-173.57c1.614-0.029,3.21-0.129,4.842-0.129    c37.872,0,84.874,27.671,115.571,76.652c12.556-41.888,22.91-84.76,34.98-127.086    C997.384,317.986,944.077,296.413,891.682,296.413z" />
                <path d="M1069.121,382.637c-8.525-9.448-17.529-18.141-26.882-26.164c-8.483,18.066-14.422,41.09-20.091,62.326    c-5.669,21.243-12.868,40.509-14.89,64.76c19.347,30.874,32.251,70.177,32.251,116.441c0,131.715-88.198,193.085-147.822,193.085    C762.277,793.085,684.553,652.3,660.155,600l-34.254-68.029c-46.03-81.037-44.11-78.881-58.929-97.363    c-55.929-69.775-140.814-138.194-258.66-138.194C186.142,296.413,50,421.085,50,600c0,63.338,17.121,119.843,44.603,166.473    c13.563-15.597,26.468-34.944,38.826-53.211c8.225-12.166,21.392-29.671,34.5-54.567c-4.722-18.051-7.433-37.649-7.433-58.694    c0-119.642,86.098-193.088,147.815-193.088c129.483,0,207.213,140.902,231.581,193.136l60.05,119.261    c52.852,81.971,147.654,184.278,291.733,184.278c124.239,0,258.324-116.069,258.324-303.581    C1150.006,517.615,1121.282,440.41,1069.121,382.637z" />
                <path d="M308.312,903.587c1.746,0,3.486-0.06,5.226-0.096c105.247-1.836,199.636-59.15,274.396-166.317    l-58.7-115.674c-5.657,10.727-12.688,23.181-21.117,36.354c-39.455,61.688-106.141,135.23-199.804,135.23    c-0.186,0-0.39-0.013-0.575-0.013c-50.794-0.39-117.726-50.229-139.808-134.378c-27.974,33.858-51.874,70.339-73.332,107.767    C144.713,851.503,229.401,903.587,308.312,903.587z" />
              </g>
            </svg>
            <p className="logo hidden md:block">Keys</p>
          </div>
        </Link>
        {/* Pages */}
        <div className="hidden md:flex flex-row items-center gap-x-4">
          {pages.map(({ name, href }, index) => {
            const active = router.asPath === href;

            return (
              <Link href={href} key={index} passHref>
                <p
                  className={`font-bold hover:opacity-50 hover:cursor-pointer ${
                    active && "opacity-50"
                  }`}
                >
                  {name}
                </p>
              </Link>
            );
          })}
        </div>
        {/* right section: (user or login) and burger */}
        {/* burger */}
        <Menu>
          <div className="md:hidden h-[80%] relative">
            <Menu.Button className="h-full">
              <MenuIcon className="h-full" />
            </Menu.Button>

            <Menu.Items>
              <div className="absolute right-0 my-2 p-2 flex flex-col rounded-md bg-slate-300">
                {pages.map(({ name, href }, index) => {
                  const active = router.asPath === href;

                  return (
                    <Menu.Item key={index}>
                      <Link href={href} passHref>
                        <p
                          className={`font-bold hover:opacity-50 hover:cursor-pointer ${
                            active && "opacity-50"
                          }`}
                        >
                          {name}
                        </p>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </div>
            </Menu.Items>
          </div>
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;
