import MainLayout from "lib/components/Layouts/MainLayout";
import { HomeIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Page404 = () => {
  const redirecting = true;
  const [count, setCount] = useState(10);
  const router = useRouter();
  useEffect(() => {
    if (!redirecting) return;
    if (count > 0) {
      const timeout = setTimeout(() => {
        setCount((c) => c - 1);
      }, 1000);
      return () => clearTimeout(timeout);
    }
    router.push("/");
  }, [count, router, redirecting]);

  return (
    <MainLayout>
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative flex flex-col max-w-md min-w-[400px] w-[80%] text-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="168"
            height="132"
            viewBox="0 0 168 132"
            className="absolute w-full h-auto fill-primary top-[50%] translate-y-[-50%]"
            preserveAspectRatio=""
          >
            <path
              width="100%"
              d="M109.2 11C117.1 16.4 123.8 23.3 135.6 32.8C147.4 42.2 164.3 54.2 167.4 67.3C170.5 80.5 159.8 94.9 147.5 106.2C135.1 117.5 121.1 125.6 106.1 129.4C91.2 133.1 75.4 132.4 61.5 127.3C47.6 122.3 35.7 112.8 23.5 101.9C11.3 90.9 -1 78.4 0.999998 66.2C3 54 19.3 42.2 30 31.6C40.8 21.1 46 11.8 53.9 6.40002C61.8 1.00002 72.4 -0.599984 82.3 0.500016C92.1 1.70002 101.3 5.50002 109.2 11Z"
            />
          </svg>
          <div className="relative px-16 flex flex-col gap-y-2">
            <h2 className="text-center text-gray-100">Oh no!</h2>
            <p className="text-gray-200">
              Seems as though you are trying to visit a page that does not exist
            </p>
            <Link href="/" passHref>
              <div className="h-[32px] flex flex-row items-center hover:cursor-pointer gap-x-2 mx-auto w-fit mt-2 hover:opacity-80">
                <p className="text-gray-200 font-bold mt-1">Back</p>
                <HomeIcon className="h-full stroke-gray-200" />
              </div>
            </Link>
            {redirecting && (
              <p className="mt-4 text-sm text-gray-200">
                Redirecting in: {count}
              </p>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page404;
