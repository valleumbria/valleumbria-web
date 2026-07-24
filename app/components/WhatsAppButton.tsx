"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-8 w-8 fill-current"
      >
        <path d="M19.11 17.39c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.81 1.19 3 .15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.71.23 1.36.2 1.87.12.57-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34zM16.03 3C8.84 3 3 8.84 3 16.03c0 2.3.6 4.55 1.75 6.54L3 29l6.61-1.72a13 13 0 0 0 6.42 1.68H16.03C23.22 28.96 29 23.12 29 15.93 29 8.84 23.22 3 16.03 3z" />
      </svg>
    </a>
  );
}