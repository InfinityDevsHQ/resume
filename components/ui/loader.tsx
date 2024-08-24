import { Loader2 } from "lucide-react";

export default function Loader() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Loader2
        className="animate-spin text-blue-800"
        width={100}
        height={100}
      />
    </div>
  );
}
