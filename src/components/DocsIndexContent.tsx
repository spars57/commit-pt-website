import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DocItem {
  href: string;
  label: string;
}

interface DocsIndexContentProps {
  title: string;
  items: DocItem[];
}

export default function DocsIndexContent({ title, items }: DocsIndexContentProps) {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1">
        {items.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            render={<a href={item.href} />}
            className="justify-start h-auto py-3 text-muted-foreground hover:text-foreground border-b border-border last:border-0 rounded-none"
          >
            {item.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
