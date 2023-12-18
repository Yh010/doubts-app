import Image from "next/image";
import { CreateDoubt } from "@/app/ui/dashboard/buttons";

export default function Home() {
  return (
    <div>
      <div
        className="center"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CreateDoubt />
      </div>

      <div>
        <h1>srgr</h1>
      </div>
    </div>
  );
}
