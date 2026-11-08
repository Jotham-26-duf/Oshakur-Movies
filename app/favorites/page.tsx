import Navbar from "@/app/components/Navbar";
import SiteBottom from "@/app/components/SiteBottom";
import FavoritesPageContent from "@/app/components/FavoritesPageContent";

export default function FavoritesPage() {
  return <main className="cinema-page min-h-screen text-white"><Navbar /><FavoritesPageContent /><SiteBottom /></main>;
}
