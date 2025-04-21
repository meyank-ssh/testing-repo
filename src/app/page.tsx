import FAQSection from "@/components/faq-section";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import NoticeBar from "@/components/notice-bar";

const members = [
  {
    name: "Meyank Singh",
    github: "https://github.com/meyank-ssh",
    twitter: "https://x.com/meyanksingh",
    avatar: "https://avatars.githubusercontent.com/u/111943685?v=4",
  },
  {
    name: "Tanmay Singh",
    github: "https://github.com/babyo77",
    twitter: "https://x.com/tanmay7_",
    avatar:
      "https://i.pinimg.com/736x/90/57/d0/9057d0064f4ec3dac77811a2efe983ef.jpg",
  },
  {
    name: "Siddhi Patil",
    github: "https://github.com/Siddhi-Patil06",
    twitter: "https://x.com/siddhipatill",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4D03AQH9lIFQaCnkMg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698239917842?e=1750896000&v=beta&t=JlSTQChYz3LNY6WJn_al9qnv2etnpptgTMiOG1E9vgU",
  },
];

const features = [
  {
    title: "Real-Time Payments ",
    description:
      "Accept payments from customers anywhere in the world without currency conversion fees. Expand your business globally without the traditional barriers.",
    image:
      "https://i.pinimg.com/736x/4d/4b/32/4d4b32ba28663f0aaea58034f7ed7557.jpg",
  },
  {
    title: "Secure Transactions",
    description:
      "Leverage blockchain technology for secure, tamper-proof transactions with minimal fraud risk. Our platform ensures your customers' data remains protected.",
    image:
      "https://i.pinimg.com/736x/e5/6f/77/e56f77e7e02cfaf25c39df005ce16482.jpg",
  },
  {
    title: "Payment Links",
    description:
      "Create payment links for your customers to pay you easily. No need to share your wallet address. Also track your payments.",
    image:
      "https://i.pinimg.com/originals/5a/55/62/5a5562885a6dda32d867667524f6440b.gif",
  },
  {
    title: "Developer-Friendly API",
    description:
      "Easily integrate cryptocurrency payments into your existing applications with our comprehensive API. Simple documentation and SDK support for all major frameworks.",
    image:
      "https://i.pinimg.com/736x/f5/e9/c6/f5e9c6c32d7612d28ddda8a44307b836.jpg",
  },
];

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 font-semibold leading-tight tracking-tight">
      <NoticeBar />

      <header className="flex sm:flex-row items-center justify-between p-4 gap-4 px-0">
        <div className="flex items-center gap-4">
          <Logo />
          <nav className="flex items-center gap-4 group">
            <Link
              href="#solutions"
              className="text-black group-hover:text-gray-500 hover:!text-black transition-colors duration-200"
            >
              Solutions
            </Link>
            <Link
              href="#faqs"
              className="text-black group-hover:text-gray-500 hover:!text-black transition-colors duration-200"
            >
              FAQs
            </Link>
            <Link
              href="#team"
              className="text-black group-hover:text-gray-500 hover:!text-black transition-colors duration-200"
            >
              Team
            </Link>
          </nav>
        </div>
        <nav className="flex items-center gap-2">
          <Link href="https://discord.gg/7A87VRZn6U" target="_blank">
            <Button className="font-semibold">Talk to us</Button>
          </Link>
          <Link href="/account">
            <Button className="font-semibold">Try V0</Button>
          </Link>
        </nav>
      </header>
      <div className="relative border rounded-xl flex items-center gap-4 flex-col justify-center bg-[url('https://i.pinimg.com/originals/f6/f7/df/f6f7df3c009dc34db262b6e23fcb0c41.gif')] text-white bg-cover bg-center min-h-[610px] overflow-hidden p-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60  "></div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl z-10 text-center">
          Sell more with Crypto
        </h1>
        <p className="font-medium max-w-xl break-words text-sm text-center z-10 px-4">
          Accept crypto payments globally and expand your business reach. Fast,
          secure, and borderless transactions for modern commerce.
        </p>
        <div className="flex sm:flex-row items-center gap-2 z-10">
          <Link href="/x/pay">
            <Button className="font-medium w-full sm:w-auto">View demo</Button>
          </Link>
          <Link href="https://discord.gg/7A87VRZn6U" target="_blank">
            <Button className="font-medium w-full sm:w-auto">
              Join waitlist
            </Button>
          </Link>
        </div>
      </div>

      <section id="solutions" className=" mt-12 text-start space-y-1">
        <h2 className="text-3xl text-blue-700 tracking-tighter sm:text-4xl md:text-5xl">
          What we offer
        </h2>
        <p className="text-muted-foreground text-sm font-medium">
          Paycrypt offers a range of features to help businesses accept crypto
          payments.
        </p>
        <div className="flex flex-col gap-8 py-8">
          {features.map((feature, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col md:flex-row gap-6">
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-1/2 flex items-start justify-start">
                      <div className="h-80 w-full relative overflow-hidden rounded-md">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                          width={256}
                          height={256}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-start">
                      <h3 className="text-xl mb-2 text-blue-700">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {feature.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 flex flex-col justify-start order-2 md:order-1">
                      <h3 className="text-xl mb-2 text-blue-700">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-medium">
                        {feature.description}
                      </p>
                    </div>
                    <div className="md:w-1/2 flex items-start justify-end order-1 md:order-2">
                      <div className="h-80 w-full relative overflow-hidden rounded-md">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-cover"
                          width={256}
                          height={256}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="solutions" className="mt-12 text-start space-y-1">
        <h2 className="text-3xl text-blue-700 tracking-tighter sm:text-4xl md:text-5xl">
          Who It's For
        </h2>
        <p className="text-muted-foreground text-sm font-medium">
          Paycrypt is designed for crypto enthusiasts who want to accept crypto
          payments.
        </p>
        <div className="flex flex-col gap-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Creators & Professionals",
                image:
                  "https://i.pinimg.com/736x/96/5a/85/965a85db23198e87638ba8e9f194441d.jpg",
                description:
                  "Artists, content creators, freelancers and consultants accepting global payments without borders.",
              },
              {
                title: "Businesses & Startups",
                image:
                  "https://i.pinimg.com/736x/7a/0c/61/7a0c61cdcb7870c4246180b4831e5abe.jpg",
                description:
                  "E-commerce stores, SaaS products, and online services expanding payment options.",
              },
              {
                title: "Others",
                image:
                  "https://i.pinimg.com/736x/99/2b/da/992bda09902534bf1eb16e98578a083a.jpg",
                description:
                  "Individuals looking to receive crypto payments from friends, family, and customers without complexity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border rounded-xl overflow-hidden hover:shadow-lg transition-all h-full flex flex-col relative group"
              >
                <div className="h-full w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-5">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="mt-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 rounded-xl -z-10"></div>

        <div className="p-10 md:p-16 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 tracking-tight">
            Our Vision
          </h2>

          <div className="max-w-3xl">
            <p className="text-2xl md:text-3xl mb-6 leading-tight">
              "We're building the Stripe of crypto – without borders."
            </p>

            <p className="text-lg opacity-90 font-medium mb-8">
              In a world where financial systems have boundaries, we're creating
              a payment infrastructure that knows no limits. PayCrypt is
              eliminating the complexity of accepting crypto payments, so
              businesses can focus on what they do best – growing globally.
            </p>

            <Link href="https://discord.gg/7A87VRZn6U" target="_blank">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 font-semibold text-base"
              >
                Join the waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="team" className=" mt-12 text-start space-y-1">
        <h3 className="text-3xl text-blue-700 tracking-tighter sm:text-4xl md:text-5xl">
          Who we are
        </h3>
        <p className="text-muted-foreground text-sm font-medium">
          PayCrypt is a team of forward-thinking innovators passionate about
          reshaping the future of finance through secure and seamless crypto
          payment solutions.
        </p>
        <div className="grid grid-cols-2 py-6 md:grid-cols-6">
          {members.map((member, index) => (
            <div key={index}>
              <div className="bg-background size-44 rounded-sm overflow-hidden">
                <img
                  className="aspect-square object-cover"
                  src={member.avatar}
                  alt={member.name}
                  height="460"
                  width="460"
                  loading="lazy"
                />
              </div>
              <span className="mt-2 block text-sm font-medium">
                {member.name}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <Link href={member.twitter}>
                  <FaXTwitter className="size-3.5 text-muted-foreground/80 hover:text-foreground" />
                </Link>
                <Link href={member.github}>
                  <FaGithub className="size-3.5 text-muted-foreground/80 hover:text-foreground" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FAQSection />
      <FooterSection />
    </div>
  );
}
