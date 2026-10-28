interface TikTokIconProps {
  className?: string;
}

export default function TikTokIcon({ className }: TikTokIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.995-4.405V2h-3.445v13.672a2.896 2.896 0 0 1-2.896 2.896 2.896 2.896 0 1 1 2.896-2.896c0-.184-.02-.364-.05-.538V11.63a6.336 6.336 0 1 0 3.496 5.668V10.31a8.2 8.2 0 0 0 4.807 1.552V8.415a4.831 4.831 0 0 1-.813-.07z" />
    </svg>
  );
}
