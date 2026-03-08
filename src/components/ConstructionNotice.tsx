import { Card, CardContent } from "@/components/ui/card";

interface ConstructionNoticeProps {
  strong: string;
  rest: string;
}

export default function ConstructionNotice({ strong, rest }: ConstructionNoticeProps) {
  return (
    <Card className="bg-white/60 ring-border">
      <CardContent className="py-3 text-muted-foreground text-[0.9375rem]">
        <strong className="text-foreground">{strong}</strong> {rest}
      </CardContent>
    </Card>
  );
}
