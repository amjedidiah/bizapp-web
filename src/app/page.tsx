import Link from "next/link";
import Button from "@/components/shared/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple/5 via-white to-purple/10">
      <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto text-center">
        {/* Hero Section */}
        <div className="max-w-2xl space-y-6">
          <h1 className="bg-black text-5xl font-bold tracking-tight text-transparent bg-clip-text from-purple-600 to-purple-400 font-mansalva">
            BizApp CS
          </h1>

          <p className="text-xl text-gray-600">
            Customer Support Dashboard for Modern Teams
          </p>

          <div className="flex flex-col gap-4 mt-8 sm:flex-row sm:justify-center">
            <Link href="/agent" className="sm:w-48">
              <Button
                variant="yellow"
                className="w-full text-lg border-2 h-10 flex items-center justify-center border-slate-400 rounded-lg"
              >
                Agent Portal
              </Button>
            </Link>

            <Link href="/supervisor" className="sm:w-48">
              <Button
                variant="yellow-outline"
                className="w-full text-lg border-2 h-10 flex items-center justify-center border-slate-400 rounded-lg"
              >
                Supervisor View
              </Button>
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <footer className="absolute bottom-8">
          <p className="text-sm text-gray-500">
            MIT Licensed • Built with Next.js 14
          </p>
        </footer>
      </div>
    </div>
  );
}
