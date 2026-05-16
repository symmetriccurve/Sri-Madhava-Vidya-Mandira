import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, MessageCircle, Quote, Star, User, Users } from "lucide-react";

import { useI18n } from "@/lib/i18n";

export default function ParentsMessage() {
  const { t, lang } = useI18n();

  const parentMessages = [
    {
      name: "Madhumati",
      nameKn: "ಮಧುಮತಿ",
      child: "Parent of Vaishnavi, Class 3 & Chinmayi, Class 6",
      childKn: "ವೈಷ್ಣವಿ, 3ನೇ ತರಗತಿ & ಚಿನ್ಮಯಿ, 6ನೇ ತರಗತಿ ಪೋಷಕರು",
      message: t("parent_message_1"),
      rating: 5,
      photo: "/assets/parents/Madhumati.png",
    },
    {
      name: "Pavithra",
      nameKn: "ಪವಿತ್ರಾ",
      child: "Parent of Megha, Class 7",
      childKn: "ಮೇಘಾ, 7ನೇ ತರಗತಿ ಪೋಷಕರು",
      message: t("parent_message_2"),
      rating: 5,
      photo: "/assets/parents/Pavithra.png",
    },
    {
      name: "Vijayalakshmi",
      nameKn: "ವಿಜಯಲಕ್ಷ್ಮಿ",
      child: "Parent of Sharandeep, Class 2",
      childKn: "ಶರಣದೀಪ್, 2ನೇ ತರಗತಿ ಪೋಷಕರು",
      message: t("parent_message_3"),
      rating: 5,
      photo: "/assets/parents/vijaya_lakshmi.jpeg",
    },
    {
      name: "Nagamani",
      nameKn: "ನಾಗಮಣಿ",
      child: "Parent of Aishwarya, Class 10",
      childKn: "ಐಶ್ವರ್ಯ, 10ನೇ ತರಗತಿ ಪೋಷಕರು",
      message: t("parent_message_4"),
      rating: 5,
      photo: "/assets/parents/Nagamani.png",
    },
    {
      name: "Thimmaraju",
      nameKn: "ತಿಮ್ಮರಾಜು",
      child: "Parent of Tulasi, Class 9 & Shashank, Class 8",
      childKn: "ತುಳಸಿ, 9ನೇ ತರಗತಿ & ಶಶಾಂಕ್, 8ನೇ ತರಗತಿ ಪೋಷಕರು",
      message: t("parent_message_5"),
      rating: 5,
      photo: "/assets/parents/Thimmaraju.png",
    },
    {
      name: "Vatsala",
      nameKn: "ವತ್ಸಲಾ",
      child: "Parent of Padmavati, Class 5",
      childKn: "ಪದ್ಮಾವತಿ, 5ನೇ ತರಗತಿ ಪೋಷಕರು",
      message: t("parent_message_6"),
      rating: 5,
      photo: "/assets/parents/Vatsala.png",
    },
    {
      name: "Mangala",
      nameKn: "ಮಂಗಳಾ",
      child: "Parent of Rashmi, Class 7",
      childKn: "ರಶ್ಮಿ, 7ನೇ ತರಗತಿ ಪೋಷಕರು",
      message: t("parent_testimonial_1"),
      rating: 5,
      photo: "/assets/parents/Mangala.png",
    },
    {
      name: "Geetha",
      nameKn: "ಗೀತಾ",
      child: "Parent of Kumuda, Class 4 & Lathish, Class 6",
      childKn: "ಕುಮುದ, 4ನೇ ತರಗತಿ & ಲಾತೀಶ್, 6ನೇ ತರಗತಿ ಪೋಷಕರು",
      message: t("parent_testimonial_2"),
      rating: 5,
      photo: "/assets/parents/Geetha.png",
    },
    {
      name: "Nalina",
      nameKn: "ನಳಿನಾ",
      child: "Parent of Harsha, Class 1 & Indrajit, Class 5",
      childKn: "ಹರ್ಷ, 1ನೇ ತರಗತಿ & ಇಂದ್ರಜಿತ್, 5ನೇ ತರಗತಿ ಪೋಷಕರು",
      message: t("parent_testimonial_3"),
      rating: 5,
      photo: "/assets/parents/Nalina.png",
    },
  ];

  const statistics = [
    {
      icon: Users,
      number: "400+",
      label: t("parent_stat_1"),
    },
    {
      icon: Heart,
      number: "98%",
      label: t("parent_stat_3"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("parents_message_title")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {t("parents_message_subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Heart className="h-4 w-4" />
                <span>{t("parent_community")}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <MessageCircle className="h-4 w-4" />
                <span>{t("parent_voices")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("parent_community_stats")}
              </h2>
              <p className="text-gray-600">
                {t("parent_community_stats_desc")}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {statistics.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-brand-blue" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parent Messages */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("parent_messages")}
              </h2>
              <p className="text-gray-600">{t("parent_messages_desc")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {parentMessages.map((message, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-brand-blue/10 flex items-center justify-center">
                          {message.photo ? (
                            <img
                              src={message.photo}
                              alt={message.name}
                              className="w-12 h-12 object-cover"
                            />
                          ) : (
                            <User className="h-6 w-6 text-brand-blue" />
                          )}
                        </div>
                        <div>
                          <CardTitle className="text-lg font-bold text-brand-blue">
                            {lang === "kn" ? message.nameKn : message.name}
                          </CardTitle>
                          <CardDescription className="text-xs pt-1">
                            <span className="bg-brand-blue/5 text-brand-blue px-2 py-0.5 rounded-md inline-block font-medium">
                              {lang === "kn"
                                ? message.childKn
                                : message.child.replace(
                                    /Class\s(\d+)/g,
                                    "Class\u00A0$1",
                                  )}
                            </span>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(message.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="relative mb-4">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-brand-blue/30" />
                      <p className="text-gray-700 italic leading-relaxed pl-4">
                        "{message.message}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
