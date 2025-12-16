import { BookOpenCheck, Brain, RectangleEllipsis } from "lucide-react";

const itemsList = [
  {
    title: "Tailored Diplomas",
    paragraph:
      "Choose from specialized tracks like Frontend, Backend, and Mobile Development.",
    Icon: Brain,
  },
  {
    title: "Focused Exams",
    paragraph:
      "Access topic-specific tests including HTML, CSS, JavaScript, and more.",
    Icon: BookOpenCheck,
  },
  {
    title: "Smart Multi-Step Forms",
    paragraph:
      "Choose from specialized tracks like Frontend, Backend, and Mobile Development.",
    Icon: RectangleEllipsis,
  },
];

export default function Overlay() {
  return (
    <section className="relative h-screen">
      {/* Overlay */}
      <div className="relative h-screen overflow-hidden">
        {/* Ellipse 11 */}
        <span className="absolute left-[24.0625rem] top-[6.875rem] size-[25.125rem] rounded-full bg-blue-400"></span>
        {/* Ellipse 12 */}
        <span className="absolute left-[0.875rem] top-[45.4375rem] size-[25.125rem] rounded-full bg-blue-400"></span>
      </div>
      {/* Panel */}
      <div className="absolute top-0 flex h-screen w-full flex-col items-center gap-[0.625rem] bg-[#EFF6FFBF]/75 py-[7.25rem] backdrop-blur-[50px]">
        {/* Info */}
        <div className="flex h-full w-[28.625rem] flex-col">
          {/* Logo */}
          <span className="flex items-center gap-[0.625rem] p-[0.375rem]">
            {/* lucide/folder-code */}
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
            {/* Text */}
            <p className="text-xl font-semibold text-blue-600">Exam App</p>
          </span>
          {/* Details */}
          <div className="flex h-full flex-col justify-center gap-[3.75rem]">
            {/* Text */}
            <p className="font-inter text-[1.875rem] font-bold text-gray-800">
              Empower your learning journey with our smart exam platform.
            </p>
            {/* List */}
            <ul className="flex flex-col gap-[2.25rem]">
              {/* Items */}
              {itemsList.map(({ title, paragraph, Icon }, idx) => (
                <li className="flex gap-[1.25rem]" key={idx}>
                  {/* Icon */}
                  <span className="flex size-[2.25rem] items-center justify-center border-[0.09375rem] border-blue-600">
                    {/* lucide/icon  */}
                    <Icon className="size-6 text-blue-600" strokeWidth={1.5} />
                  </span>
                  {/* Head Text  */}
                  <div className="flex flex-col">
                    <p className="text-xl font-semibold text-blue-600">
                      {title}
                    </p>
                    {/* Body Text */}
                    <p className="font-normal text-gray-700">{paragraph}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
