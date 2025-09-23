import Script from 'next/script';

export default function ThemeScript() {
  const themeScript = `
    (function() {
      try {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } catch (e) {
        // Ловимо помилки, якщо localStorage недоступний
      }
    })();
  `;

  return (
    <Script
      id="theme-switcher-script"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: themeScript,
      }}
    />
  );
}
