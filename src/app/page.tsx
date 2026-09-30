import { HomeAbout } from "@/components/home-about";
import { HomeBook } from "@/components/home-book";
import { HomeCredentials } from "@/components/home-credentials";
import { HomeHero } from "@/components/home-hero";
import { HomePath } from "@/components/home-path";
import { HomeWhy } from "@/components/home-why";
import { InstagramSection } from "@/components/instagram-section";
import { ReviewsSection } from "@/components/reviews-section";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main id="top">
        <HomeHero />
        <HomeCredentials />
        <HomeWhy />
        <InstagramSection />
        <ReviewsSection />
        <HomePath />
        <HomeAbout />
        <HomeBook />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="font-display text-xl text-foreground">Molly Hagman</p>
          <p>Private salsa &amp; bachata lessons · NYC &amp; online</p>
          <a
            href="https://www.instagram.com/molly_hagman/"
            target="_blank"
            rel="noreferrer"
            className="text-champagne hover:text-blush"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}
