import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function AuthPage() {
  return (
    <main className="py-20">
      <div className="container mx-auto px-6 lg:px-20 max-w-md">
        <Card className="animate-fade-in">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Rejoindre la communauté</CardTitle>
            <CardDescription>
              Accédez à tous les résumés et créez votre bibliothèque personnelle
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full" size="lg">
              Se connecter
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Pas encore de compte ?{" "}
              <Link href="#" className="text-primary hover:underline">
                S&apos;inscrire
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
