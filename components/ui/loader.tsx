import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Loader2
        className="animate-spin text-aquamarine-100"
        width={100}
        height={100}
      />
    </div>
  );
}
