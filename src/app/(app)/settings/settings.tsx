"use client";
import React, { useState, useEffect } from "react";
import { useUser } from "@/app/provider/user-provider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function SettingsPage() {
  const { userData } = useUser();
  const [formData, setFormData] = useState({
    full_name: userData?.full_name || "",
    email: userData?.email || "",
    btc_address: userData?.btc_address || "",
    sol_address: userData?.sol_address || "",
    eth_address: userData?.eth_address || "",
  });

  const [copied, setCopied] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);

    setTimeout(() => {
      setCopied(null);
    }, 2000);

    toast.success(`${label} copied`, {
      position: "bottom-right",
      duration: 2000,
    });
  };

  return (
    <div className="flex flex-1 flex-col bg-gradient-to-b from-white to-gray-50">
      <div className="flex flex-1 flex-col gap-8 w-full">
        {/* Profile Section */}
        <div className="space-y-5 px-8 pt-6">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Profile Information
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Manage your personal information and account settings
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex flex-col items-center gap-3">
                <Avatar className="h-20 w-20 rounded-full border-2 bg-gradient-to-br from-blue-50 to-indigo-100">
                  <AvatarImage
                    src={`https://avatar.tobi.sh/${userData?.full_name.slice(
                      0,
                      1
                    )}.svg?text=${userData?.full_name.slice(0, 1)}&size=512`}
                    alt={userData?.full_name}
                  />
                  <AvatarFallback className="rounded-full text-xl font-medium bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                    {userData?.full_name.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </div>

              <div className="flex-1 space-y-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2 group">
                    <Label
                      htmlFor="full_name"
                      className="text-gray-700 font-medium group-focus-within:text-primary"
                    >
                      Full Name
                    </Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="border-gray-100 focus:border-primary/50 focus:ring-primary/10 h-10 transition-all rounded-xl"
                    />
                  </div>
                  <div className="space-y-2 group">
                    <Label
                      htmlFor="email"
                      className="text-gray-700 font-medium group-focus-within:text-primary"
                    >
                      Email Address
                    </Label>
                    <Input
                      disabled
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gray-100 focus:border-primary/50 focus:ring-primary/10 h-10 transition-all rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* API Key Section */}
        <div className="space-y-5 px-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">API Key</h2>
            <p className="text-gray-500 text-sm mt-1">
              Your API key for accessing the platform programmatically
            </p>
          </div>

          <div className=" ">
            <div className="relative">
              <Input
                readOnly
                value={userData?.api_key || "••••••••••••••••••••••••••••••••"}
                className="pr-20 font-mono text-sm bg-gray-50/70 border-gray-100 h-10 rounded-xl"
              />
              <button
                className={`absolute right-1 top-1 inline-flex items-center justify-center gap-1.5 text-sm h-8 px-3 rounded-lg ${
                  copied === "API Key"
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() =>
                  userData?.api_key &&
                  copyToClipboard(userData.api_key, "API Key")
                }
              >
                {copied === "API Key" ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied === "API Key" ? "Copied" : "Copy"}
              </button>
            </div>
            <p className="text-gray-500 text-xs ml- mt-3 flex items-center">
              Keep your API key secure and never share it publicly
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
