import React from "react";
import { ParallaxBanner as Banner, Parallax } from "react-scroll-parallax";

export default function ParallaxBannerSection({
  bg,
  height = "h-[100vh]",
  overlay = true,
  title,
  subtitle,
  speedBg = -20,
  speedContent = -5,
  children,
}) {
  return (
    <Banner
      layers={[{ image: bg, speed: speedBg }]}
      className={`relative w-full ${height} flex items-center justify-center`}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      )}

      <Parallax speed={speedContent}>
        <div className="relative z-10 text-center px-6 max-w-3xl">
          {children ? (
            children
          ) : (
            <>
              {title && (
                <h1 className="text-white text-4xl md:text-6xl font-semibold drop-shadow">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="mt-4 text-white/90 text-lg md:text-xl">
                  {subtitle}
                </p>
              )}
            </>
          )}
        </div>
      </Parallax>
    </Banner>
  );
}
