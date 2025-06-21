import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
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
      "Découvrez les secrets de l'éducation financière et changez votre rapport à l'argent.",
    status: "confirmed",
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
      "Les principes fondamentaux pour développer son efficacité personnelle et professionnelle.",
    status: "confirmed",
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
      "Comment les petites habitudes peuvent transformer votre vie de manière extraordinaire.",
    status: "planning",
  },
];

export function UpcomingEventsSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            Nos rendez-vous
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prochains <span className="text-primary">événements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Rejoignez-nous lors de nos prochaines rencontres pour découvrir et
            partager des idées inspirantes
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6 mb-12 animate-slide-up">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="group">
              <div className="bg-card border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Date & Time */}
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 rounded-xl p-4 text-center min-w-[140px]">
                      <div className="text-2xl font-bold text-primary mb-1">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        {new Date(event.date).toLocaleDateString("fr-FR", {
                          month: "short",
                        })}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {event.time}
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          par {event.author}
                        </p>
                      </div>
                      <Badge
                        variant={
                          event.status === "confirmed" ? "default" : "secondary"
                        }
                        className="ml-4"
                      >
                        {event.status === "confirmed"
                          ? "Confirmé"
                          : "En préparation"}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>
                          {event.location} • {event.venue}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>Présenté par {event.presenter}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="flex-shrink-0">
                    <Button variant="outline" size="sm">
                      Détails
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold mb-4">
              Ne manquez aucun événement !
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Consultez notre calendrier complet et inscrivez-vous aux
              événements qui vous intéressent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/events">Voir tous les événements</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
              >
                <Link href="/auth">S&apos;inscrire aux notifications</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
