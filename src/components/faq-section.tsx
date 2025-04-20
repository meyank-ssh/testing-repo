"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import Link from "next/link";

const faqs = [
  {
    question: "What is Paycrypt?",
    answer:
      "Paycrypt is a global crypto payment platform that enables businesses to accept cryptocurrency payments with instant settlements, zero technical complexity, and worldwide accessibility.",
  },
  {
    question: "Which cryptocurrencies do you support?",
    answer:
      "We currently support Ethereum (ETH) and Solana (SOL), with plans to add more cryptocurrencies based on market demand and security considerations.",
  },
  {
    question: "How fast are the settlements?",
    answer:
      "Settlements are instant and occur as soon as the blockchain transaction is confirmed. For Ethereum, this typically takes 15-30 seconds, and for Solana, it's even faster at 400ms.",
  },
  {
    question: "What are the transaction fees?",
    answer:
      "We maintain competitive and transparent pricing with minimal transaction fees. The exact fee structure depends on your business volume and specific requirements. Contact us for detailed pricing information.",
  },
  {
    question: "Is Paycrypt secure?",
    answer:
      "Yes, security is our top priority. We employ industry-leading security measures including multi-signature wallets, cold storage, and real-time fraud detection to ensure your transactions are safe and secure.",
  },
  {
    question: "How do I integrate Paycrypt?",
    answer:
      "Integration is simple and requires minimal technical knowledge. We provide comprehensive documentation, SDKs, and APIs. Join our waitlist to get early access and integration support.",
  },
];

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function FAQSection() {
  return (
    <section id="faq" className="dark:bg-muted/25">
      <div className="mx-auto max-w-6xl px-6 md:px-14">
        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.25,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mx-auto w-full text-start"
        >
          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Frequently Asked Questions
          </TextEffect>
        </AnimatedGroup>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            },
            ...transitionVariants,
          }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-muted px-2"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="text-base font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-[15px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedGroup>
      </div>
    </section>
  );
}
