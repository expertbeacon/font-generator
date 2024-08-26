"use client";
import { appConfig } from "@/config";

export function Footer() {
  return (
    <footer className="container py-4 text-center text-sm text-muted-foreground mt-10">
      <div className="my-3 flex items-center justify-center gap-3">
        <b>Our Products: </b>
        <a href="https://www.redirectchecker.org/" className="text-primary flex items-center">
          <img alt="Redirect Checker" src="https://www.faviconextractor.com/favicon/www.redirectchecker.org" className="h-5 w-5 mr-1 rounded-full bg-secondary" width={20} height={20} />
          <span>Redirect Checker</span>
        </a>
        <a href="https://www.faviconextractor.com/" className="text-primary flex items-center">
          <img alt="Favicon Extractor" src="https://www.faviconextractor.com/favicon/www.faviconextractor.com" className="h-5 w-5 mr-1 rounded-full bg-secondary" width={20} height={20} />
          <span>Favicon Extractor</span>
        </a>
      </div>
      <span>
        © {new Date().getFullYear()} <a href="https://www.fontgenerator.dev/">{appConfig.appName}</a>. All rights reserved.
      </span>
    </footer>
  );
}
