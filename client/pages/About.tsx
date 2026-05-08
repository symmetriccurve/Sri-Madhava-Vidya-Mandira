import {
  Award,
  BookOpen,
  Brain,
  Eye,
  Hand,
  Heart,
  Shield,
  Sparkles,
  Target,
  UserCheck,
  Users,
  Users2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAssetImage, getDonorImage, getLogo } from "@/lib/imageUtils";

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t, lang } = useI18n();

  const stats = [
    { icon: Users, label: t("about_stat_students"), value: "400+" },
    { icon: BookOpen, label: t("about_stat_teachers"), value: "20+" },
    { icon: Award, label: t("about_stat_academic_service"), value: "40+" },
    { icon: Heart, label: t("about_stat_families"), value: "500+" },
  ];

  const values = [
    {
      icon: Sparkles,
      title: t("samskara"),
      description: t("samskara_desc"),
    },
    {
      icon: Hand,
      title: t("seva_bhavana"),
      description: t("seva_bhavana_desc"),
    },
    {
      icon: Shield,
      title: t("shrama_swachata"),
      description: t("shrama_swachata_desc"),
    },
    {
      icon: Users2,
      title: t("ekata_sahabhava"),
      description: t("ekata_sahabhava_desc"),
    },
    {
      icon: Brain,
      title: t("adhyatma_atmavikasa"),
      description: t("adhyatma_atmavikasa_desc"),
    },
    {
      icon: UserCheck,
      title: t("svavalambane"),
      description: t("svavalambane_desc"),
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img
            src={getLogo()}
            alt="School Logo"
            className="h-20 w-20 rounded-full ring-4 ring-brand-orange/20"
          />
        </div>
        <h1 className="text-4xl font-bold text-brand-blue mb-8">
          {t("about_page_hero_title")}
        </h1>
        <div className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-left whitespace-pre-line space-y-4">
          {t("about_snippet")}
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-brand-blue" />
                <div className="text-2xl font-bold text-brand-blue">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">
          {t("our_core_values")}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex justify-center mb-3">
                  <div className="p-3 rounded-full bg-brand-blue/10">
                    <value.icon className="h-6 w-6 text-brand-blue" />
                  </div>
                </div>
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                <Target className="h-5 w-5" />
                {t("our_mission")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {t("our_mission_desc")}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-brand-blue flex items-center gap-2">
                <Eye className="h-5 w-5" />
                {t("our_vision")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {t("our_vision_desc")}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Journey */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {t("our_journey")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Language-specific content based on global toggle */}
              {lang === "kn" ? (
                <div className="pl-6">
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      ಶ್ರೀ ಮಾಧವ ವಿದ್ಯಾ ಮಂದಿರವು, ಹಿಂದೂ ಸೇವಾ ಪ್ರತಿಷ್ಠಾನ, ವಿಶ್ವ
                      ಹಿಂದೂ ಪರಿಷತ್ನ ಪ್ರೇರಣೆಯಿಂದ ಸಾಧನ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಯ
                      ಮಾರ್ಗದರ್ಶನದೊಡನೆ ಸ್ವರ್ಗೀಯ ಶ್ರೀಯುತ ಅಜಿತ್ ಕುಮಾರ್ ಅವರ ಅಮೃತ
                      ಹಸ್ತದ ಮೂಲಕ ನಗರದ ಹಿರಿಯರ ಆಶೀರ್ವಾದದಿಂದ 1983- 84ರ ಏಪ್ರಿಲ್
                      11ರಂದು ಶಿಶುಮಂದಿರವನ್ನು ಪ್ರಾರಂಭಿಸಲಾಯಿತು.
                    </p>
                    <p>
                      1988ರ ವರೆಗೆ ಶಿಶುಮಂದಿರದಿಂದ 4 ನೇ ತರಗತಿಯವರೆಗೂ ಬೆಳೆದು ಬೆಳೆದ
                      ಶಾಲೆಯಲ್ಲಿ 1989ರಲ್ಲಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆಯನ್ನು
                      ಪ್ರಾರಂಭಿಸಲಾಯಿತು.
                    </p>
                    <p>
                      ಇದೀಗ ನಮ್ಮ ಶಾಲೆಯಲ್ಲಿ 1ರಿಂದ 7ನೇ ತರಗತಿವರೆಗೆ(ಕನ್ನಡ ಮಾಧ್ಯಮ)
                      ಅನುದಾನಿತ ಪ್ರಾಥಮಿಕ ವಿಭಾಗ, 8ರಿಂದ 10ನೇ ತರಗತಿವರೆಗೆ ಪ್ರೌಢಶಾಲೆ
                      ಆಂಗ್ಲ ಮಾಧ್ಯಮದಲ್ಲಿ ನಡೆಯುತ್ತಿದ್ದು, 2022-23ರಲ್ಲಿ ಎಲ್. ಕೆ .ಜಿ
                      , ಯು .ಕೆ .ಜಿ. (ಆಂಗ್ಲ ಮಾಧ್ಯಮ) ಪ್ರಾರಂಭವಾಯಿತು
                    </p>
                    <p>
                      2023-24ರಲ್ಲಿ ಒಂದನೇ ತರಗತಿಯನ್ನು ಆಂಗ್ಲ ಮಾಧ್ಯಮದಲ್ಲಿ
                      ಪ್ರಾರಂಭಿಸಲಾಯಿತು.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="pl-6">
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      Sri Madhava Vidya Mandira was established with the
                      inspiration from Rashtriya Swayamsevak Sangh, Hindu Seva
                      Pratishthana, and Vishwa Hindu Parishad, under the
                      guidance of Sadhana Shikshana Samsthe. With the blessed
                      hands of the late Sri Ajit Kumar and the blessings of the
                      city's elders, the Shishu Mandira (Children's Play Home)
                      was inaugurated on April 11, 1983-84.
                    </p>
                    <p>
                      The school grew from the Shishu Mandira up to 4th grade
                      until 1988, and in 1989, the Higher Primary School was
                      established.
                    </p>
                    <p>
                      Currently, our school operates with an aided primary
                      section from 1st to 7th grade (Kannada medium), and high
                      school from 8th to 10th grade (English medium). In
                      2022-23, LKG and UKG (English medium) were introduced.
                    </p>
                    <p>In 2023-24, 1st grade was started in English medium.</p>
                  </div>
                </div>
              )}

              {/* Key Milestones */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-brand-blue mb-4">
                  {lang === "kn" ? "ಮುಖ್ಯ ಮೈಲಿಗಲ್ಲುಗಳು" : "Key Milestones"}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-brand-orange/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-orange">
                      1983-84
                    </div>
                    <div className="text-sm text-gray-600">
                      {lang === "kn"
                        ? "ಶಿಶುಮಂದಿರ ಪ್ರಾರಂಭ"
                        : "Shishu Mandira Inaugurated"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-brand-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-blue">
                      1989
                    </div>
                    <div className="text-sm text-gray-600">
                      {lang === "kn"
                        ? "ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ"
                        : "Higher Primary School"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-brand-orange/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-orange">
                      2022-23
                    </div>
                    <div className="text-sm text-gray-600">
                      {lang === "kn"
                        ? "ಎಲ್.ಕೆ.ಜಿ & ಯು.ಕೆ.ಜಿ (ಆಂಗ್ಲ)"
                        : "LKG & UKG (English)"}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-brand-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-blue">
                      2023-24
                    </div>
                    <div className="text-sm text-gray-600">
                      {lang === "kn"
                        ? "1ನೇ ತರಗತಿ (ಆಂಗ್ಲ)"
                        : "1st Grade (English)"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Leadership Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">
          {lang === "kn" ? "ನಮ್ಮ ನಾಯಕತ್ವ" : "Our Leadership"}
        </h2>
      </section>

      {/* Principal's Message */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {t("principal_message")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img
                  src={getAssetImage("president.png")}
                  alt="School President"
                  className="w-32 h-32 rounded-full object-cover border-4 border-brand-orange/20"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {t("principal_note_subtitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t("principal_message_body")}
                </p>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line mt-4">
                  {lang === "kn"
                    ? "ಶ್ರೀ ಸೋಮಶೇಖರ್ ಅವರು ಸಿರಾದಲ್ಲಿ ಯಶಸ್ವಿ ಉದ್ಯಮಿಯಾಗಿದ್ದು, ಅಕಸ್ಮಾತಾಗಿ ಶ್ರೀ ಮಾಧವ ವಿದ್ಯಾ ಮಂದಿರ ಸಂಸ್ಥೆಯೊಂದಿಗೆ ಸೇರಿಕೊಂಡಿದ್ದಾರೆ. ಅವರು ಭಾರತೀಯ ಸಂಸ್ಕೃತಿಯೊಂದಿಗೆ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ನೀಡುವ ಮಹತ್ವದ ದೃಷ್ಟಿಯನ್ನು ಹೊಂದಿದ್ದಾರೆ. ಅವರು ತಮ್ಮ ಆಲೋಚನೆಗಳು ಮತ್ತು ಸಮಯವನ್ನು ಶಾಲೆಯ ಅಭಿವೃದ್ಧಿಗಾಗಿ ನೀಡಿದ್ದಾರೆ. ಹಸಿರು ಉಪಕ್ರಮ ಎಂಬುದು ಅವರ ದೂರದೃಷ್ಟಿಯ ಒಂದು ಭಾಗವಾಗಿದ್ದು, ಶ್ರೀ ಮಾಧವ ವಿದ್ಯಾ ಮಂದಿರ ಸಂಸ್ಥೆಯನ್ನು ಸ್ವಾವಲಂಬಿಯಾಗಿ ರೂಪಿಸುವ ಉದ್ದೇಶವನ್ನು ಹೊಂದಿದೆ. ಇದಲ್ಲದೆ ಅವರು ಶಾಲೆಯ ಸಮಗ್ರ ಅಭಿವೃದ್ಧಿಗಾಗಿ ನವೀನ ಯೋಜನೆಗಳನ್ನು ರೂಪಿಸುವಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸುತ್ತಿದ್ದಾರೆ. ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ನಾಯಕತ್ವ ಗುಣಗಳು ಮತ್ತು ನೈತಿಕ ಮೌಲ್ಯಗಳನ್ನು ಬೆಳೆಸಲು ಪ್ರೇರಣೆ ನೀಡುತ್ತಿದ್ದಾರೆ. ಅವರು ಸಮುದಾಯದ ಸಹಭಾಗಿತ್ವವನ್ನು ಹೆಚ್ಚಿಸಲು ಪ್ರಯತ್ನಿಸುತ್ತಿದ್ದು ಶಾಲೆಯ ಬೆಳವಣಿಗೆಯಲ್ಲಿ ಸ್ಥಳೀಯರ ಸಹಕಾರ ಕೂಡ ಒಗ್ಗೂಡಿಸುತ್ತಿದ್ದಾರೆ. ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ಶಾಲೆಯನ್ನು ಒಂದು ಆದರ್ಶ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಯಾಗಿ ರೂಪಿಸುವ ಕನಸನ್ನು ಹೊಂದಿದ್ದಾರೆ."
                    : "Sri Somashekhar is a successful entrepreneur in Sira who came to be associated with Sri Madhava Vidya Mandira. He holds a significant vision of providing quality education rooted in Indian culture. He has contributed his ideas and time to the school's development. The Green Initiative is a part of his vision, aimed at making Sri Madhava Vidya Mandira self-reliant. He plays a key role in shaping innovative plans for the school's all-round growth, inspiring students to develop leadership qualities and moral values. He strives to increase community participation and brings together local support for the school's progress. He dreams of transforming the school into an ideal educational institution in the years ahead."}
                </p>
                <p className="text-sm text-gray-600 mt-4 font-medium whitespace-pre-line">
                  {t("principal_attribution")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Director - Sri S L Jayaram */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {lang === "kn" ? "ನಿರ್ದೇಶಕರು" : "Director"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img
                  src={getDonorImage("S_L_JAYARAM.png")}
                  alt="Sri S L Jayaram"
                  className="w-32 h-32 rounded-full object-cover border-4 border-brand-orange/20"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {lang === "kn" ? "ಶ್ರೀ ಎಸ್ ಎಲ್ ಜಯರಾಮ್" : "Sri S L Jayaram"}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {lang === "kn"
                    ? "ಶ್ರೀ ಎಸ್ ಎಲ್ ಜಯರಾಮ್ ಅವರು ಶ್ರೀ ಮಾಧವ ವಿದ್ಯಾ ಮಂದಿರ ಸಂಸ್ಥೆಯ ಪ್ರಮುಖ ಸ್ತಂಭಗಳಲ್ಲಿ ಒಬ್ಬರಾಗಿದ್ದಾರೆ. ಅವರು ಶಿರಾ ತಾಲೂಕಿನ ಮಕ್ಕಳಿಗೆ ಸಂಸ್ಕಾರಗಳೊಂದಿಗೆ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ನೀಡಲು ನಿರಂತರವಾಗಿ ಶ್ರಮಿಸುತ್ತಿದ್ದಾರೆ. ಅವರು ಈ ಶಾಲೆಗೆ ತಮ್ಮ ಸೇವೆಯನ್ನು ಕೇವಲ ದೈಹಿಕವಾಗಿ ಮಾತ್ರವಲ್ಲದೆ ಆರ್ಥಿಕವಾಗಿ ಕೂಡ ಅರ್ಪಿಸಿದ್ದಾರೆ. ಅವರು ಅನೇಕ ದೇಣಿಗೆಗಳನ್ನು ವ್ಯವಸ್ಥೆ ಮಾಡಿದ್ದು ಸ್ವತಃ ತಮ್ಮಿಂದಲೂ ಸಾಕಷ್ಟು ಮೊತ್ತವನ್ನು ದೇಣಿಗೆ ಆಗಿ ನೀಡಿ ಶಾಲೆಯ ಅಭಿವೃದ್ಧಿಗೆ ಮಹತ್ವದ ಕೊಡುಗೆ ನೀಡಿದ್ದಾರೆ. ತಮ್ಮ ಹೆಚ್ಚು ಸಮಯವನ್ನು ಶಾಲೆಯ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಮೀಸಲಿಟ್ಟಿದ್ದಾರೆ. ಶಾಲೆಯ ಕಟ್ಟಡ ನಿರ್ಮಾಣದಲ್ಲೂ, ಶೈಕ್ಷಣಿಕವಾಗಿಯೂ, ಎಲ್ಲಾ ರೀತಿಯಲ್ಲೂ ತಮ್ಮ ಸೇವೆಯನ್ನು ನೀಡುತ್ತಿದ್ದಾರೆ."
                    : "Sri S L Jayaram is one of the key pillars of Sri Madhava Vidya Mandira. He has been continuously striving to provide quality education with cultural values to the children of Shira Taluk. He has dedicated his service to this school not only physically but also financially — arranging numerous donations and personally contributing significant amounts toward the school's development. He has devoted much of his time to the school's growth, serving in every way — from building construction to academic progress."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Director's Message */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {lang === "kn" ? "ನಿರ್ದೇಶಕರು" : "Director"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-32 h-32 rounded-full bg-brand-blue/10 flex items-center justify-center border-4 border-brand-blue/20">
                <Users className="h-12 w-12 text-brand-blue/40" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {lang === "kn"
                    ? "ಶ್ರೀ ರಾಜ ಅಶ್ವಥನಾರಾಯಣ ಶೆಟ್ಟಿ"
                    : "Sri Raja Ashwathanarayana Shetty"}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {lang === "kn"
                    ? "ಶ್ರೀ ರಾಜ ಅಶ್ವಥನಾರಾಯಣ ಶೆಟ್ಟಿ ರವರು ಶ್ರೀ ಎಸ್ ಎಲ್ ಜಯರಾಮ್ ಅವರೊಂದಿಗೆ ಸೇರಿ ಶ್ರೀ ಮಾಧವ ವಿದ್ಯಾ ಮಂದಿರ ಸಂಸ್ಥೆಯನ್ನು ಸ್ಥಾಪಿಸುವಲ್ಲಿ ಮಹತ್ವದ ಪಾತ್ರವಹಿಸಿದ್ದಾರೆ. ಅವರು ತಮ್ಮ ಸಮಯ ಮತ್ತು ಆಲೋಚನೆಗಳನ್ನು ಸಂಸ್ಕಾರ, ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಸಮರ್ಪಿಸಿದ್ದು ಇಂದಿನ ಪೀಳಿಗೆಗೆ ಅದು ಅತ್ಯಂತ ಅಗತ್ಯವಾದ ಅಂಶವಾಗಿದೆ. ಸರಳ ವ್ಯಕ್ತಿತ್ವ ಹೊಂದಿದ್ದರೂ ಶಾಲೆಯ ಅಭಿವೃದ್ಧಿಗಾಗಿ ದೊಡ್ಡ ದೃಷ್ಟಿಕೋನ ಹೊಂದಿದ್ದಾರೆ. ಸಂಸ್ಥೆಯ ಆರಂಭಿಕ ಹಂತಗಳಲ್ಲಿ ತಮ್ಮ ಸಹೋದ್ಯೋಗಿಗಳೊಂದಿಗೆ ನೀಡಿದ ಬೆಂಬಲ ಮರೆಯಲಾಗದಂತದ್ದು. ಇದಲ್ಲದೆ ಅವರು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ದೇಶಭಕ್ತಿ, ಶಿಸ್ತು ಮತ್ತು ನೈತಿಕ ಮೌಲ್ಯಗಳನ್ನು ಬೆಳೆಸುವ ಕಡೆಗೂ ಗಮನ ಹರಿಸುತ್ತಿದ್ದಾರೆ. ಶಾಲೆಯನ್ನು ಶ್ರೇಷ್ಠ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆಯಾಗಿ ರೂಪಿಸಲ್ಲಿ ಅವರ ಪಾತ್ರ ಅತ್ಯಂತ ಮಹತ್ವದ್ದಾಗಿದೆ."
                    : "Sri Raja Ashwathanarayana Shetty played a significant role in founding Sri Madhava Vidya Mandira along with Sri S L Jayaram. He has dedicated his time and thoughts to culture and education — an essential aspect for the current generation. Though a person of simple character, he holds a grand vision for the school's development. The support he provided alongside his colleagues in the institution's early stages is unforgettable. He also focuses on nurturing patriotism, discipline, and moral values in students. His role in shaping the school into an excellent educational institution is of great significance."}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Head Mistress Message */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {lang === "kn"
                ? "ಮುಖ್ಯ ಶಿಕ್ಷಕಿಯವರ ಸಂದೇಶ"
                : "Head Mistress's Message"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img
                  src={getDonorImage("KUM._SANGAMMA_KUBSAD.png")}
                  alt="Head Mistress Sangamma"
                  className="w-32 h-32 rounded-full object-cover border-4 border-brand-orange/20"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {lang === "kn"
                    ? "ಸಂಗಮ್ಮ — ಮುಖ್ಯ ಶಿಕ್ಷಕಿ, ಪ್ರಾಥಮಿಕ ವಿಭಾಗ"
                    : "Sangamma — Head Mistress, Primary Section"}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {lang === "kn"
                    ? "ನಮ್ಮ ಶಾಲೆಯ ಮಕ್ಕಳು ಸಂಸ್ಕಾರ ಮತ್ತು ರಾಷ್ಟ್ರಭಕ್ತಿಯನ್ನು ಮೈಗೂಡಿಸಿಕೊಂಡು ಶಾರೀರಿಕ, ಯೋಗಿಕ, ಮಾನಸಿಕ, ಬೌದ್ಧಿಕ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ದೃಷ್ಟಿಯಿಂದ ಪೂರ್ಣವಾಗಿ ವಿಕಸಗೊಂಡ ಯುವ ಪೀಳಿಗೆಯ ನಿರ್ಮಾಣ ಮಾಡುವುದಾಗಿದೆ. ಹೀಗೆ ನಿರ್ಮಾಣಗೊಂಡ ಯುವ ಪೀಳಿಗೆಯು ಜೀವನದ ಪ್ರಸಕ್ತ ಸವಾಲುಗಳನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಎದುರಿಸುವಂತವರಾಗಬೇಕು. ಅವರ ಜೀವನವು ನಗರ, ಗ್ರಾಮ, ವನ ಪ್ರದೇಶ, ಗಿರಿ ಕಂದರಗಳಲ್ಲಿ ವಾಸಿಸುತ್ತಿರುವ ವಂಚಿತ ಅಭಾವ ಪಡಿತರಾದ ನಮ್ಮ ಬಂಧುಗಳನ್ನು ರಾಷ್ಟ್ರೀಯ ಜೀವನದ ಸವಾಲುಗಳಾದ ಸಾಮಾಜಿಕ ದುರಾಚಾರಗಳು ಮತ್ತು ಅನ್ಯಾಯಗಳಿಂದ ಮುಕ್ತಗೊಳಿಸುವಂತಾಗಬೇಕು. ಹಾಗೆ ನಮ್ಮ ರಾಷ್ಟ್ರ ಜೀವನವನ್ನು ಸಂಸ್ಕೃತ ಸಾಮರಸ್ಯ ಪೂರ್ಣ ಮತ್ತು ಸುಸಂಪನ್ನರಾಗಿ ಮಾಡುವ ವಸುದೈವ ಕುಟುಂಬ ಎಂಬ ಭಾವನೆಯಿಂದ ಪ್ರೇರಿತರಾಗಿ ವಿಶ್ವಕಲ್ಯಾಣ ಮಾಡುವುದಾಗಿದೆ."
                    : 'The goal of our school is to nurture children with culture and patriotism, and who develop fully in physical, yogic, mental, intellectual, and spiritual dimensions. Such a generation of youth should be capable of successfully facing the challenges of life. Their lives should contribute to uplifting our underprivileged brothers and sisters living in cities, villages, forests, and hilly regions, helping free them from social evils and injustices that challenge our national life. In this way, they should work toward making our national life culturally harmonious and prosperous, inspired by the ideal of "Vasudhaiva Kutumbakam" (the world is one family), and contribute to the welfare of the entire world.'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
