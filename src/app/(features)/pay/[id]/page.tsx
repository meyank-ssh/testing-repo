import { api } from "@/lib/utils";
import Link from "next/link";
import PaymentPage from "../components/payment-link-card";

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export interface PaymentLinkResponse {
  api_key: string;
  payment_link: {
    id: string;
    merchant_id: string;
    title: string;
    amount: number;
    description: string;
    expires: string;
    image?: string;
    redirect_url: string;
    webhook: string;
    api_key: string;
  };
  status: string;
}

async function page({ params }: PageProps) {
  const { id } = await params;
  const link = await api.get<PaymentLinkResponse>(`/links/${id}`);

  if (link.error || !link.data) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <div className="mb-8 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#111111"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-sm"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <div className="absolute inset-0 bg-gray-50 rounded-full blur-2xl opacity-40 -z-10"></div>
        </div>

        <h1 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 text-center tracking-tight">
          Payment Link Not Found
        </h1>

        <p className="text-xs md:text-sm text-gray-500 text-center max-w-xs mb-8 tracking-tight leading-relaxed">
          The payment link you're looking for doesn't exist or may have expired.
        </p>

        <div className="relative">
          <Link href="/">
            <span className="px-5 py-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-xs font-medium rounded-lg transition-all duration-300 inline-flex items-center gap-1.5 shadow-md tracking-tight">
              Return to Homepage
            </span>
            <div className="absolute inset-0 bg-gray-900 rounded-lg blur-md opacity-20 -z-10 translate-y-1 scale-90"></div>
          </Link>
        </div>
      </div>
    );
  }

  console.log("link", link.data);

  return (
    <PaymentPage
      paymentDetails={{
        ...link.data.payment_link,
        api_key: link.data.api_key,
      }}
    />
  );
}

export default page;
