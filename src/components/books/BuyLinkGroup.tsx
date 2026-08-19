import { Button } from "@/components/ui/Button";

export type RetailerLink = {
  label: string;
  url: string;
};

export function BuyLinkGroup({ links }: { links: RetailerLink[] }) {
  if (links.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link, i) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {i === 0 ? (
            <Button variant="primary">Buy on {link.label}</Button>
          ) : (
            <Button variant="secondary">{link.label}</Button>
          )}
        </a>
      ))}
    </div>
  );
}
