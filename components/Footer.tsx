export default function Footer() {
  return (
    <footer className="w-full border-t border-foreground/10 bg-background/50 py-8 text-center text-sm text-foreground/60">
      <p>&copy; {new Date().getFullYear()} TravelAI. All rights reserved.</p>
    </footer>
  );
}
