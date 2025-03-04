import SupportEmailLink from "@/Components/SupportEmailLink";
import A from "@/Components/Typography/A";
import { Tooltip } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";

export default function Footer({ className = "" }: { className?: string }) {
  const { t } = useTranslation();
  return (
    // {/* <hr className="mt-24 border-gray-300" /> */}

    <div className="print:hidden">
      {/* <hr className="mt24 border-gray-300" /> */}
      <div className="pb-20"></div>
      <div className="absolute bottom-0 w-full">
        <footer
          className={
            "my-2 flex min-h-full w-full flex-wrap-reverse justify-center px-6 py-4 sm:items-center sm:justify-between " +
            className
          }
        >
          {/* <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left">
            Contact us&nbsp;
            <SupportEmailLink />
          </div> */}

          <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:ml-0 sm:text-right">
            &copy; {new Date().getFullYear()} {" "}{t( "Laptop POS, All Rights Reserved." )}
          </div>
          <div className="text-sm ">
            <Tooltip content="Contact us">
              <span className="!font-light text-gray-500">
                <SupportEmailLink />
              </span>
            </Tooltip>
            {" · "}
            <A
              className="text-gray-500 hover:text-gray-700"
              href={route("termsAndConditions")}
            >
              { t( "Terms" ) }
            </A>{" "}
            {" · "}
            <A
              className="text-gray-500 hover:text-gray-700"
              href={route("privacyPolicy")}
            >
              { t( "Privacy Policy" ) }
            </A>
          </div>
        </footer>
      </div>
    </div>
  );
}
