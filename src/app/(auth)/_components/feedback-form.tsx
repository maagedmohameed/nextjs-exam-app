import { CircleX } from "lucide-react";

export default function FeedbackForm({ errorMsg }: { errorMsg: string }) {
  return (
    <div className="relative flex items-center justify-center gap-[0.625rem] border border-red-600 bg-red-50 p-[0.625rem]">
      {/* Text*/}
      <p className="text-sm font-normal text-red-600">
        {errorMsg ? errorMsg : "Something went wrong"}
      </p>
      {/* lucide/circle-x */}
      <span className="absolute -top-[0.5625rem] left-1/2 size-[1.125rem]">
        <CircleX
          className="rounded-full bg-white text-red-600"
          strokeWidth={1.25}
          size={15}
        />
      </span>
    </div>
  );
}
