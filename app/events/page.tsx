"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, MapPin, Search, Clock, User } from "lucide-react";
import Link from "next/link";

const allEvents = [
  {
    id: "1",
    date: "2025-06-22",
    time: "15:00",
    location: "Djibouti ville",
    venue: "Centre culturel français",
    title: "Résumé de Père riche, père pauvre",
    author: "Robert Kiyosaki",
    presenter: "Ahmed Hassan",
    description:
      "Découvrez les secrets de l'éducation financière et changez votre rapport à l'argent. Ce livre révolutionnaire vous apprendra à penser comme les riches et à construire votre indépendance financière.",
    status: "confirmed",
    category: "Finance",
    capacity: 50,
    registered: 23,
  },
  {
    id: "2",
    date: "2025-06-30",
    time: "16:30",
    location: "Balbala",
    venue: "Maison des jeunes",
    title: "Résumé de Les 7 habitudes de ceux qui réussissent",
    author: "Stephen Covey",
    presenter: "Fatima Mohamed",
    description:
      "Les principes fondamentaux pour développer son efficacité personnelle et professionnelle. Un guide intemporel pour transformer votre approche du leadership et de la réussite.",
    status: "confirmed",
    category: "Leadership",
    capacity: 40,
    registered: 31,
  },
  {
    id: "3",
    date: "2025-07-08",
    time: "14:00",
    location: "Djibouti ville",
    venue: "Université de Djibouti",
    title: "Résumé de Atomic Habits",
    author: "James Clear",
    presenter: "À confirmer",
    description:
      "Comment les petites habitudes peuvent transformer votre vie de manière extraordinaire. Apprenez les mécanismes scientifiques derrière la formation des habitudes.",
    status: "planning",
    category: "Productivité",
    capacity: 80,
    registered: 12,
  },
  {
    id: "4",
    date: "2025-07-15",
    time: "15:30",
    location: "Djibouti ville",
    venue: "Bibliothèque nationale",
    title: "Résumé de Mindset",
    author: "Carol Dweck",
    presenter: "Omar Abdillahi",
    description:
      "La nouvelle psychologie du succès. Découvrez comment votre état d'esprit détermine votre capacité à apprendre, à grandir et à réussir dans tous les domaines de la vie.",
    status: "confirmed",
    category: "Psychologie",
    capacity: 35,
    registered: 18,
  },
  {
    id: "5",
    date: "2025-07-22",
    time: "16:00",
    location: "Balbala",
    venue: "Centre communautaire",
    title: "Résumé de Deep Work",
    author: "Cal Newport",
    presenter: "Amina Said",
    description:
      "Retrouvez votre capacité de concentration dans un monde de distractions. Apprenez à cultiver la concentration profonde pour exceller dans votre travail et votre vie personnelle.",
    status: "planning",
    category: "Productivité",
    capacity: 30,
    registered: 8,
  },
];

const categories = [
  "Tous",
  "Finance",
  "Leadership",
  "Productivité",
  "Psychologie",
];
const locations = ["Tous", "Djibouti ville", "Balbala"];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedLocation, setSelectedLocation] = useState("Tous");

  const filteredEvents = allEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "Tous" || event.category === selectedCategory;
    const matchesLocation =
      selectedLocation === "Tous" || event.location === selectedLocation;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="py-20">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Tous nos événements
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre calendrier complet et rejoignez-nous pour des
            moments d&apos;apprentissage et de partage
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Rechercher un événement..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>

          {/* Category and Location filters */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground self-center">
                Catégorie:
              </span>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "secondary"
                  }
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground self-center">
                Lieu:
              </span>
              {locations.map((location) => (
                <Badge
                  key={location}
                  variant={
                    selectedLocation === location ? "default" : "secondary"
                  }
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => setSelectedLocation(location)}
                >
                  {location}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-8 text-center">
          <p className="text-muted-foreground">
            {filteredEvents.length} événement
            {filteredEvents.length > 1 ? "s" : ""} trouvé
            {filteredEvents.length > 1 ? "s" : ""}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
          {filteredEvents.map((event) => (
            <div key={event.id} className="group">
              <div className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {event.category}
                      </Badge>
                      <Badge
                        variant={
                          event.status === "confirmed" ? "default" : "secondary"
                        }
                        className="text-xs"
                      >
                        {event.status === "confirmed"
                          ? "Confirmé"
                          : "En préparation"}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      par {event.author}
                    </p>
                  </div>
                </div>

                {/* Date & Location */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>
                      {event.location} • {event.venue}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    <span>Présenté par {event.presenter}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {event.description}
                </p>

                {/* Capacity */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>Places disponibles</span>
                    <span>
                      {event.registered}/{event.capacity}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-300"
                      style={{
                        width: `${(event.registered / event.capacity) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    className="flex-1"
                    disabled={event.registered >= event.capacity}
                  >
                    {event.registered >= event.capacity
                      ? "Complet"
                      : "S'inscrire"}
                  </Button>
                  <Button variant="outline" size="sm">
                    Détails
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Calendar className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground text-lg mb-4">
              Aucun événement ne correspond à votre recherche
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("Tous");
                setSelectedLocation("Tous");
              }}
            >
              Effacer les filtres
            </Button>
          </div>
        )}

        {/* Back to home */}
        <div className="mt-16 pt-8 border-t text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/">Retour à l&apos;accueil</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
