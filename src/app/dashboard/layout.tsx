import Image from "next/image";

import elevateLogo from "/public/assets/images/elevate-logo.png";
import folderCode from "/public/assets/icons/folder-code.png";
import NavLinks from "./_components/nav-links";
import { ChevronDown, EllipsisVertical } from "lucide-react";
import { Breadcrumbs } from "./_components/breadcrumb";
import Header from "./_components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen text-white">
      {/* Sidebar  */}
      <aside className="flex h-auto w-[22.625rem] flex-col gap-[3.75rem] border-r bg-blue-50 p-10">
        {/* Logo  */}
        <div className="flex flex-col gap-[0.625rem]">
          {/* Elevate logo  */}
          <Image src={elevateLogo} alt="elevate-logo" />
          {/* Exam app logo  */}
          <div className="flex w-fit items-center gap-[0.625rem]">
            {/* lucide/folder-code */}
            <span className="flex h-[2.5rem] w-[2.5rem] justify-center gap-3 p-2">
              <svg
                width="30"
                height="26"
                viewBox="0 0 30 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.95 11.25L9.15 14.75L11.95 18.25" fill="#155DFC" />
                <path d="M17.55 11.25L20.35 14.75L17.55 18.25" fill="#155DFC" />
                <path
                  d="M25.95 24.55C26.6926 24.55 27.4048 24.255 27.9299 23.7299C28.455 23.2048 28.75 22.4926 28.75 21.75V7.75C28.75 7.00739 28.455 6.2952 27.9299 5.7701C27.4048 5.245 26.6926 4.95 25.95 4.95H14.89C14.4217 4.95459 13.9598 4.84166 13.5464 4.62153C13.1331 4.40141 12.7815 4.08113 12.524 3.69L11.39 2.01C11.135 1.62286 10.788 1.30507 10.3799 1.08515C9.97183 0.865239 9.51555 0.750076 9.052 0.75H3.55C2.80739 0.75 2.0952 1.045 1.5701 1.5701C1.045 2.0952 0.75 2.80739 0.75 3.55V21.75C0.75 22.4926 1.045 23.2048 1.5701 23.7299C2.0952 24.255 2.80739 24.55 3.55 24.55H25.95Z"
                  fill="#155DFC"
                />
                <path
                  d="M11.95 11.25L9.15 14.75L11.95 18.25M17.55 11.25L20.35 14.75L17.55 18.25M25.95 24.55C26.6926 24.55 27.4048 24.255 27.9299 23.7299C28.455 23.2048 28.75 22.4926 28.75 21.75V7.75C28.75 7.00739 28.455 6.2952 27.9299 5.7701C27.4048 5.245 26.6926 4.95 25.95 4.95H14.89C14.4217 4.95459 13.9598 4.84166 13.5464 4.62153C13.1331 4.40141 12.7815 4.08113 12.524 3.69L11.39 2.01C11.135 1.62286 10.788 1.30507 10.3799 1.08515C9.97183 0.865239 9.51555 0.750076 9.052 0.75H3.55C2.80739 0.75 2.0952 1.045 1.5701 1.5701C1.045 2.0952 0.75 2.80739 0.75 3.55V21.75C0.75 22.4926 1.045 23.2048 1.5701 23.7299C2.0952 24.255 2.80739 24.55 3.55 24.55H25.95Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {/* Text */}
            <p className="align-middle text-xl font-semibold text-blue-600">
              Exam App
            </p>
          </div>
        </div>
        {/* Navigation  */}
        <div className="flex h-screen flex-col justify-between">
          {/* Links  */}
          <ul className="flex h-auto flex-col gap-[0.625rem]">
            {/* Items  */}
            <NavLinks />
          </ul>

          {/* User  */}
          <div className="flex items-center justify-between">
            {/* User info  */}
            <div className="flex gap-[0.625rem]">
              {/* Avatar  */}
              <Image
                src="/assets/images/avatar.png"
                alt="avatar"
                width={54}
                height={54}
                className="border border-blue-600"
              />
              {/* info  */}
              <div className="flex flex-col justify-center">
                {/* Name  */}
                <p className="text-base font-medium text-blue-600">FirstName</p>
                {/* Email  */}
                <p className="text-sm font-normal text-gray-500">
                  user-email@example.com
                </p>
              </div>
            </div>
            {/* Menu  */}
            <div className="flex h-7 w-7 items-center justify-center gap-[0.625rem]">
              {/* lucide/ellipsis-vertical icon  */}
              <EllipsisVertical
                className="h-[1.125rem] w-[1.125rem] text-gray-500"
                strokeWidth={0.94}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Main content  */}
      <section className="flex flex-1 flex-col text-gray-50">
        {/* Breadcrumbs  */}
        <Breadcrumbs />
        {/* Main Content  */}
        <div className="flex h-screen flex-col gap-6 p-6">
          {/* Heading  */}
          <Header />
          {/* Children content */}
          <div className="flex items-center gap-[0.625rem]">{children}</div>
          {/* Footer  */}
          <footer className="flex flex-col items-center justify-center gap-1 p-[0.625rem]">
            {/* Text */}
            <p className="text-center text-base font-normal text-gray-600">
              Scroll to view more
            </p>
            {/* lucide/chevron-down icon  */}
            <ChevronDown
              className="h-[1.125rem] w-[1.125rem] text-gray-400"
              strokeWidth={0.94}
            />
          </footer>
        </div>
      </section>
    </div>
  );
}
