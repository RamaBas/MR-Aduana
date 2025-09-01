import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5492213195299"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 ws-color text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition duration-300 z-50"
    >
      <svg
        className="w-10 h-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.4 3.6C18.2 1.3 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.5 6L0 24l6.2-1.5c1.8.9 3.8 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.6-8.4zM12 22.1c-1.8 0-3.6-.5-5.2-1.4l-.4-.2-3.8.9.9-3.8-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10-10 10zm5.5-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.2-.8.9-1 1.1-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.4.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.7-1-2.3-.3-.6-.6-.5-.8-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.3-.3.2-1 .9-1 2.3s1 2.7 1.2 2.9c.2.2 2.1 3.3 5.2 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.2-.1-.3-.4-.4z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
