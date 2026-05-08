import { BookOpen, Camera, Music, Palette, Trophy, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAssetImage, getSchoolImage } from "@/lib/imageUtils";

import { useI18n } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useI18n();

  const galleryCategories = [
    {
      id: "campus",
      title: t("gallery_page_category_campus_title"),
      icon: Camera,
      images: [
        getAssetImage("campus.png"),
        getSchoolImage(1),
        getSchoolImage(2),
        getAssetImage("digital_board.jpeg"),
        getAssetImage("sports.png"),
        getAssetImage("library.png"),
        getAssetImage("playing_area.jpeg"),
      ],
      description: t("gallery_page_category_campus_desc"),
    },
    {
      id: "students",
      title: t("gallery_page_category_students_title"),
      icon: Users,
      images: [
        getSchoolImage(4),
        getAssetImage("9.png"),
        getAssetImage("10.png"),
        getAssetImage("11.png"),
        getAssetImage("11(1).jpeg"),
        getAssetImage("11(2).jpeg"),
        getAssetImage("11(3).jpeg"),
        getAssetImage("11(4).jpeg"),
      ],
      description: t("gallery_page_category_students_desc"),
    },
    {
      id: "sports",
      title: t("gallery_page_category_sports_title"),
      icon: Trophy,
      images: [
        getAssetImage("13.jpg"),
        getAssetImage("14.png"),
        getAssetImage("14(1).JPG"),
        getAssetImage("14(2).JPG"),
        getAssetImage("14(3).JPG"),
      ],
      description: t("gallery_page_category_sports_desc"),
    },
    {
      id: "cultural",
      title: t("gallery_page_category_cultural_title"),
      icon: Music,
      images: [
        getAssetImage("15.jpg"),
        getAssetImage("16.jpg"),
        getAssetImage("17.jpg"),
      ],
      description: t("gallery_page_category_cultural_desc"),
    },
    {
      id: "arts",
      title: t("gallery_page_category_arts_title"),
      icon: Palette,
      images: [getAssetImage("18.jpeg"), getAssetImage("20.png")],
      description: t("gallery_page_category_arts_desc"),
    },
    {
      id: "academics",
      title: t("gallery_page_category_academics_title"),
      icon: BookOpen,
      images: [getAssetImage("21.png")],
      description: t("gallery_page_category_academics_desc"),
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">
          {t("gallery_page_title")}
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          {t("gallery_page_subtitle")}
        </p>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          {t("gallery_page_intro")}
        </p>
      </section>

      {/* Gallery Categories */}
      <section className="mb-12">
        <Tabs defaultValue="campus" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
            {galleryCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {galleryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                    <category.icon className="h-5 w-5" />
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-600">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.images.map((image, index) => (
                      <div key={index} className="flex flex-col">
                        <div className="relative group cursor-pointer">
                          <img
                            src={image}
                            alt={`${category.title} ${t("gallery_page_photo_label")} ${index + 1}`}
                            className="w-full h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg" />
                        </div>
                        {import.meta.env.DEV && (
                          <p
                            className="mt-1 text-[10px] text-gray-400 font-mono truncate px-1"
                            title={image}
                          >
                            {image.split("/").pop()}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  );
}
