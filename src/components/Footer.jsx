import React from "react";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
} from "flowbite-react";

export default function FooterSection() {
  return (
    <Footer container className="bg-white text-gray-800">
      <div className="w-full flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        {/* Left side — Logo */}
        <FooterBrand
          href="#"
          src="VoiceLink.png"
          alt="VoiceLink Logo"
          name="VoiceLink"
        />

        <FooterCopyright
          href="#"
          by="VoiceLink™"
          year={new Date().getFullYear()}
          className="text-sm text-gray-600 sm:text-right mt-4 sm:mt-0"
        />
      </div>
    </Footer>
  );
}
