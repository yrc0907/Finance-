import { Metadata } from "next";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import Link from "next/link";
import { Plus, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export const metadata: Metadata = {
  title: "Finance Dashboard",
  description: "Your financial overview",
};

export default async function DashboardPage() {
  const session = await auth();

  // If not authenticated, redirect to login
  if (!session) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 from-50% to-white to-50%">
      {/* Header */}
      <header className="flex items-center px-8 py-4">
        <div className="flex items-center gap-2 mr-12">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" fill="#1E40AF" />
              <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-white text-2xl font-bold">Finance</span>
        </div>
        <nav className="flex gap-6">
          <Link href="/dashboard" className="text-white/90 hover:text-white px-2 py-1">
            Overview
          </Link>
          <Link href="/transactions" className="text-white/90 hover:text-white px-2 py-1">
            Transactions
          </Link>
          <Link href="/accounts" className="text-white/90 hover:text-white px-2 py-1">
            Accounts
          </Link>
          <Link href="/categories" className="text-white/90 hover:text-white px-2 py-1">
            Categories
          </Link>
          <Link href="/settings" className="text-white/90 hover:text-white px-2 py-1">
            Settings
          </Link>
        </nav>
        <div className="ml-auto">
          <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white">
            P
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <section className="px-8 pt-8 pb-4">
        <h1 className="text-white text-4xl font-bold mb-2">
          Welcome Back, PLeaseNo <span className="inline-block">👋</span>
        </h1>
        <p className="text-white/80">This is your Financial Overview Report</p>
      </section>

      {/* Accounts Section */}
      <section className="px-8 pt-12">
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Accounts page</h2>
            <Button className="bg-blue-950 hover:bg-blue-900 text-white flex items-center gap-1">
              <Plus size={18} />
              <span>Add new</span>
            </Button>
          </div>

          {/* Search filter */}
          <div className="mb-6">
            <Input placeholder="Filter email..." className="max-w-md" />
          </div>

          {/* Table */}
          <div className="border rounded-md">
            {/* Table Header */}
            <div className="flex items-center p-4 border-b">
              <div className="w-10">
                <Checkbox />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1 font-medium">
                  Name
                  <ArrowUpDown size={16} />
                </div>
              </div>
            </div>

            {/* No results */}
            <div className="flex justify-center items-center py-12 text-gray-500">
              No results.
            </div>

            {/* Table Footer */}
            <div className="flex justify-between items-center p-4 border-t text-sm text-gray-500">
              <div>0 of 0 row(s) selected.</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 