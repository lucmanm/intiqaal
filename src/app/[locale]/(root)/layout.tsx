import { cn } from "@/lib/utils";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <main className={cn("h-screen w-full flex flex-col justify-between")}>{children}</main>;
}
