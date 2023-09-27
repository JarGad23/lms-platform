import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-3xl">Hello World</p>
      <Button variant="destructive">Click</Button>
    </div>
  );
}
