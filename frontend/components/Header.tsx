export default function Header() {
  return (
    <div className="">
      {/* Text */}
      <div className="relative z-10 mx-auto max-w-xl">
        <h1 className="text-white text-4xl font-semibold tracking-tight">
          Clean messy CSVs fast.
        </h1>

        <p className="mt-4 text-white/70">
          Upload a file, preview fixes, export a scrubbed clean version.
        </p>
      </div>
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <svg
          className="w-[140%] h-[140%] opacity-60"
          viewBox="0 0 600 420"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="spotlight" cx="50%" cy="45%" r="65%">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.6" />
              <stop offset="55%" stopColor="#7C3AED" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#1E1B4B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Clean oval spotlight */}
          <ellipse cx="300" cy="210" rx="250" ry="160" fill="url(#spotlight)" />
        </svg>
      </div>
    </div>
  );
}
