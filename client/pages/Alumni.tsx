import { Award, Camera, Globe, MapPin, Users, X } from "lucide-react";
import { getAlumniImage, getAssetImage } from "@/lib/imageUtils";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export default function Alumni() {
  const { t, lang } = useI18n();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const alumniData = [
    {
      name: "DR. VINAY SINGH",
      nameKn: "ಡಾ. ವಿನಯ ಸಿಂಗ್",
      profession: "Doctor",
      professionKn: "ವೈದ್ಯ",
      location: "SIRA, TUMKUR DIST.",
      locationKn: "ಸೀರಾ, ತುಮ್ಕೂರ್ ಜಿಲ್ಲೆ",
      photo: "DR_VINAY_SINGH.png",
    },
    {
      name: "RAKESH PADIKAR",
      nameKn: "ರಾಕೇಶ ಪಾದಿಕರ",
      profession: "SOFTWARE ENGINEER",
      professionKn: "ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್",
      location: "BANGALORE",
      locationKn: "ಬೆಂಗಳೂರು",
      photo: "RAKESH_PADIKAR.png",
    },
    {
      name: "SHWETA G",
      nameKn: "ಶ್ವೇತಾ ಜಿ",
      profession: "SOFTWARE ENGINEER",
      professionKn: "ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್",
      location: "USA",
      locationKn: "ಯುಎಸ್‌ಎ",
      photo: "SHWETA_GOPALRAO.png",
    },
    {
      name: "REKHA MANJUNATH",
      nameKn: "ರೇಖಾ ಮಂಜುನಾಥ",
      profession: "ENGINEER",
      professionKn: "ಇಂಜಿನಿಯರ್",
      location: "GERMANY",
      locationKn: "ಜರ್ಮನಿ",
      photo: "REKHA_MANJUNATH.png",
    },
    {
      name: "MADHUMALA",
      nameKn: "ಮಧುಮಾಲಾ",
      profession: "SCIENTIST",
      professionKn: "ವಿಜ್ಞಾನಿ",
      location: "USA",
      locationKn: "ಯುಎಸ್‌ಎ",
      photo: "MADHUMALA.png",
    },
    {
      name: "DR. ASHWINI",
      nameKn: "ಡಾ. ಅಶ್ವಿನಿ",
      profession: "MBBS, MD - ASSISTANT PROFESSOR",
      professionKn: "ಎಂಬಿಬಿಎಸ್, ಎಮ್‌ಡಿ - ಸಹಾಯಕ ಪ್ರಾಧ್ಯಾಪಕ",
      location: "TUMKUR",
      locationKn: "ತುಮ್ಕೂರ್",
      photo: "DR_ASHWINI.png",
    },
    {
      name: "RASHMI GOPALRAO",
      nameKn: "ರಶ್ಮಿ ಗೋಪಾಲರಾವ್",
      profession: "ENGINEER",
      professionKn: "ಇಂಜಿನಿಯರ್",
      location: "BANGALORE",
      locationKn: "ಬೆಂಗಳೂರು",
      photo: "RASHMI_GOPALRAO.png",
    },
    {
      name: "DR. REKHA GOPALRAO",
      nameKn: "ಡಾ. ರೇಖಾ ಗೋಪಾಲರಾವ್",
      profession: "GYNECOLOGIST",
      professionKn: "ಸ್ತ್ರೀ ರೋಗ ವಿಶೇಷಜ್ಞ",
      location: "MYSORE",
      locationKn: "ಮೈಸೂರು",
      photo: "DR_REKHA_GOPALRAO.png",
    },
    {
      name: "DR. ANNAPOORNA",
      nameKn: "ಡಾ. ಅನ್ನಪೂರ್ಣಾ",
      profession: "Doctor",
      professionKn: "ವೈದ್ಯ",
      location: "MANIPAL",
      locationKn: "ಮಣಿಪಾಲ್",
    },
    {
      name: "DR. SUNIL N P",
      nameKn: "ಡಾ. ಸುನಿಲ್ ಎನ್ ಪಿ",
      profession: "Doctor",
      professionKn: "ವೈದ್ಯ",
      location: "LUCKNOW",
      locationKn: "ಲಕ್ನೌ",
    },
    {
      name: "CHAYA",
      nameKn: "ಚಯಾ",
      profession: "MSc.",
      professionKn: "ಎಂಎಸ್‌ಸಿ.",
      location: "BANGALORE",
      locationKn: "ಬೆಂಗಳೂರು",
    },
    {
      name: "CHANDRALA",
      nameKn: "ಚಂದ್ರಾಲಾ",
      profession: "SOFTWARE ENGINEER",
      professionKn: "ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್",
      location: "SPAIN",
      locationKn: "ಸ್ಪೇನ್",
    },
    {
      name: "SRIDEVI",
      nameKn: "ಶ್ರೀದೇವಿ",
      profession: "SOFTWARE ENGINEER",
      professionKn: "ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್",
      location: "AUSTRALIA",
      locationKn: "ಆಸ್ಟ್ರೇಲಿಯಾ",
    },
    {
      name: "SAGAR",
      nameKn: "ಸಾಗರ",
      profession: "SOFTWARE ENGINEER",
      professionKn: "ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್",
      location: "AUSTRALIA",
      locationKn: "ಆಸ್ಟ್ರೇಲಿಯಾ",
    },
    {
      name: "ASHWINI",
      nameKn: "ಅಶ್ವಿನಿ",
      profession: "SOFTWARE ENGINEER",
      professionKn: "ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್",
      location: "USA",
      locationKn: "ಯುಎಸ್‌ಎ",
    },
    {
      name: "ASHWINI S N",
      nameKn: "ಅಶ್ವಿನಿ ಎಸ್ ಎನ್",
      profession: "SOFTWARE ENGINEER",
      professionKn: "ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್",
      location: "AUSTRALIA",
      locationKn: "ಆಸ್ಟ್ರೇಲಿಯಾ",
    },
    {
      name: "REKHA",
      nameKn: "ರೇಖಾ",
      profession: "SOFTWARE ENGINEER",
      professionKn: "ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್",
      location: "USA",
      locationKn: "ಯುಎಸ್‌ಎ",
    },
    {
      name: "NAVEEN PONNAMPETE",
      nameKn: "ನವೀನ್ ಪೊನ್ನಂಪೆಟೆ",
      profession: "FOREST OFFICER",
      professionKn: "ಅರಣ್ಯ ಅಧಿಕಾರಿ",
      location: "PONNAMPETE",
      locationKn: "ಪೊನ್ನಂಪೆಟೆ",
    },
    {
      name: "SREENIDHI GOWDA",
      nameKn: "ಶ್ರೀನಿಧಿ ಗೌಡ",
      profession: "SOFTWARE ENGINEER",
      professionKn: "ಸಾಫ್ಟ್‌ವೇರ್ ಇಂಜಿನಿಯರ್",
      location: "UK",
      locationKn: "ಯುಕೆ",
    },
    {
      name: "SHILPA SHREE K",
      nameKn: "ಶಿಲ್ಪಾ ಶ್ರೀ ಕೆ",
      profession: "MARKETING OFFICER",
      professionKn: "ಮಾರ್ಕೆಟಿಂಗ್ ಅಧಿಕಾರಿ",
      location: "APMC, HARIHARA",
      locationKn: "ಎಪಿಎಂಸಿ, ಹರಿಹರ",
      photo: "SHILPA_SRI_K.jpeg",
    },
    {
      name: "DR. RAVISH",
      nameKn: "ಡಾ. ರವಿಶ",
      profession: "Doctor",
      professionKn: "ವೈದ್ಯ",
      location: "GOVERNMENT HOSPITAL, MADHUGIRI",
      locationKn: "ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ, ಮಧುಗಿರಿ",
    },
  ];

  const alumniWithPhoto = alumniData.filter((a) => a.photo);
  const alumniWithoutPhoto = alumniData.filter((a) => !a.photo);

  const galleryImages = [
    "36.jpeg",
    "37.jpeg",
    "38.jpeg",
    "39.jpeg",
    "39(1).jpeg",
    "39(2).jpeg",
    "39(3).jpeg",
    "39(4).jpeg",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-brand-blue to-brand-blue/90 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("alumni_title")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              {t("alumni_subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Users className="h-4 w-4" />
                <span>{t("alumni_count")}: 300+</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
                <Globe className="h-4 w-4" />
                <span>{t("alumni_global")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni with Photos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("alumni_spotlight")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("alumni_spotlight_desc")}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
              {alumniWithPhoto.map((alumni, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-blue/20 shadow-md group-hover:border-brand-blue transition-colors mb-3">
                    <img
                      src={getAlumniImage(alumni.photo!)}
                      alt={alumni.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-bold text-gray-900 text-sm leading-tight">
                    {lang === "kn" ? alumni.nameKn : alumni.name}
                  </p>
                  <p className="text-brand-blue text-xs mt-1">
                    {lang === "kn" ? alumni.professionKn : alumni.profession}
                  </p>
                  {alumni.location && (
                    <p className="text-gray-500 text-xs flex items-center gap-1 mt-1">
                      <MapPin className="h-3 w-3 shrink-0" />
                      {lang === "kn" ? alumni.locationKn : alumni.location}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Alumni without photos — list */}
            <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50 border-b border-gray-200 font-bold text-brand-blue uppercase text-sm tracking-wider hidden md:grid">
                <div className="px-6 py-4">
                  {t("alumni_name_label") || "Name"}
                </div>
                <div className="px-6 py-4 border-l border-gray-200">
                  {t("alumni_profession_label") || "Profession"}
                </div>
                <div className="px-6 py-4 border-l border-gray-200">
                  {t("alumni_location_label") || "Location"}
                </div>
              </div>

              <div className="divide-y-0 md:divide-y divide-gray-200">
                {alumniWithoutPhoto.map((alumni, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-1 md:grid-cols-3 hover:bg-brand-blue/5 transition-colors group mb-6 md:mb-0 border border-gray-100 md:border-0 rounded-lg md:rounded-none overflow-hidden"
                  >
                    <div className="px-6 py-4 flex items-center md:block bg-brand-blue/5 md:bg-transparent">
                      <span className="text-xs font-bold uppercase text-brand-blue md:hidden mr-4 w-20 shrink-0">
                        Name:
                      </span>
                      <span className="text-lg font-bold text-brand-blue md:text-gray-900 group-hover:text-brand-blue transition-colors">
                        {lang === "kn" ? alumni.nameKn : alumni.name}
                      </span>
                    </div>

                    <div className="px-6 py-4 border-t md:border-t-0 md:border-l border-gray-200 flex items-center md:block">
                      <span className="text-xs font-bold uppercase text-brand-blue/60 md:hidden mr-4 w-20 shrink-0">
                        Profession:
                      </span>
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-brand-orange shrink-0 hidden lg:inline" />
                        <span className="text-gray-700 font-medium">
                          {lang === "kn" ? alumni.professionKn : alumni.profession}
                        </span>
                      </div>
                    </div>

                    <div className="px-6 py-4 border-t md:border-t-0 md:border-l border-gray-200 flex items-center md:block">
                      <span className="text-xs font-bold uppercase text-brand-blue/60 md:hidden mr-4 w-20 shrink-0">
                        Location:
                      </span>
                      {alumni.location ? (
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-brand-blue shrink-0 hidden lg:inline" />
                          <span className="text-gray-600">
                            {lang === "kn" ? alumni.locationKn : alumni.location}
                          </span>
                        </div>
                      ) : (
                        <span className="text-gray-400 italic text-sm">
                          Not specified
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
              <Camera className="h-8 w-8 text-brand-blue" />
              Alumni Memories
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galleryImages.map((imgName, idx) => (
              <div
                key={idx}
                className="aspect-video rounded-xl overflow-hidden shadow-md group cursor-pointer"
                onClick={() => setSelectedImage(imgName)}
              >
                <img
                  src={getAssetImage(imgName)}
                  alt={`Alumni moment ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-brand-orange transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={getAssetImage(selectedImage)}
            alt="Fullscreen Preview"
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
