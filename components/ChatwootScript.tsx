"use client";
import React from "react";

const ChatwootScript = () => {
  const BASE_URL = "https://app.chatwoot.com";

  const handleScriptLoad = () => {
    if (typeof window !== "undefined" && "chatwootSDK" in window) {
      (window as Window & { chatwootSDK: any }).chatwootSDK.run({
        websiteToken: "i9kp5xBRL4gF6TjrTwUFXnhn",
        baseUrl: BASE_URL,
      });
    }
  };

  return (
    <script
      src={`${BASE_URL}/packs/js/sdk.js`}
      defer
      async
      onLoad={handleScriptLoad}
    />
  );
};

export default ChatwootScript;
