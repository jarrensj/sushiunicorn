'use client';

export default function Background() {
  const size = 20;
  const spacing = 0;
  const specialIndex = 69;

  return (
    <div
      className="absolute inset-0 grid pointer-events-none"
      style={{
        gridTemplateColumns: `repeat(auto-fill, ${size}px)`,
        gridTemplateRows: `repeat(auto-fill, ${size}px)`,
        gap: `${spacing}px`,
        backgroundColor: "#FFFBE6",
      }}
    >
      {Array.from({ length: 20000 }).map((_, i) => {
        const isSpecial = i === specialIndex;
        return (
          <div
            key={i}
            className="flex items-center justify-center"
            style={{
              fontSize: `${size * 0.8}px`,
              cursor: isSpecial ? 'pointer' : 'default',
              pointerEvents: isSpecial ? 'auto' : 'none',
            }}
          >
            {isSpecial ? (
              <a
                href="https://jarrensj.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                💛
              </a>
            ) : (
              i % 2 === 0 ? "🍣" : "🦄"
            )}
          </div>
        );
      })}
    </div>
  );
}
