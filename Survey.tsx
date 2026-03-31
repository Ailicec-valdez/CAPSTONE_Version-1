import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface SurveyProps {
  onComplete: (favoriteAnimal: string, fearAnimal: string) => void;
}

export function Survey({ onComplete }: SurveyProps) {
  const [favoriteAnimal, setFavoriteAnimal] = useState("");
  const [fearAnimal, setFearAnimal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (favoriteAnimal.trim() && fearAnimal.trim()) {
      onComplete(favoriteAnimal, fearAnimal);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-primary/90 p-4">
      <Card className="w-full max-w-md shadow-2xl border-8 border-accent animate-pulse-slow">
        <CardHeader className="space-y-2">
          <div className="w-20 h-20 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center shadow-xl border-4 border-primary animate-bounce">
            <span className="text-5xl">🦇</span>
          </div>
          <CardTitle className="text-center text-3xl drop-shadow-lg">🎮 Wildlife Survey</CardTitle>
          <CardDescription className="text-center text-lg">
            Help us understand your connection with wildlife! 🌟
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="favorite" className="text-lg">💚 What's your favorite animal?</Label>
              <Input
                id="favorite"
                type="text"
                placeholder="e.g., Wolf, Eagle, Bat..."
                value={favoriteAnimal}
                onChange={(e) => setFavoriteAnimal(e.target.value)}
                required
                className="bg-white border-2 border-primary focus:border-accent transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fear" className="text-lg">⚠️ What animal do you fear?</Label>
              <Input
                id="fear"
                type="text"
                placeholder="e.g., Spider, Snake, Bear..."
                value={fearAnimal}
                onChange={(e) => setFearAnimal(e.target.value)}
                required
                className="bg-white border-2 border-primary focus:border-accent transition-all"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 transition-all text-lg py-6 border-4 border-primary shadow-xl"
            >
              🚀 Continue to Wildlife Information
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
