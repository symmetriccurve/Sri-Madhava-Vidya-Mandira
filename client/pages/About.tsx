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
import { getDonorImage, getLeadershipImage, getLogo } from "@/lib/imageUtils";

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

export default function About() {
  const { t } = useI18n();

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
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-brand-blue mb-8 whitespace-nowrap">
          {t("about_page_hero_title")}
        </h1>
        <div className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed text-justify md:text-left whitespace-pre-line space-y-4">
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
              <div className="pl-6">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>{t("about_history_intro")}</p>
                  <div>
                    <p className="font-semibold mb-2">
                      {t("about_history_founders_intro")}
                    </p>
                    <ul className="ml-4 space-y-1">
                      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <li key={i}>• {t(`about_history_founder_${i}`)}</li>
                      ))}
                    </ul>
                  </div>
                  <p>{t("about_history_inauguration")}</p>
                  <p>{t("about_history_growth")}</p>
                  <p>{t("about_history_current")}</p>
                </div>
              </div>

              {/* Key Milestones */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-brand-blue mb-4">
                  {t("key_milestones")}
                </h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-brand-orange/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-orange">
                      1983-84
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("milestone_shishu_mandira")}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-brand-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-blue">
                      1989
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("milestone_higher_primary")}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-brand-orange/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-orange">
                      2022-23
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("milestone_lkg_ukg")}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-brand-blue/10 rounded-lg">
                    <div className="text-2xl font-bold text-brand-blue">
                      2023-24
                    </div>
                    <div className="text-sm text-gray-600">
                      {t("milestone_first_grade")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* School President's Message */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-brand-blue mb-6 sm:mb-8">
          {t("principal_message")}
        </h2>
        <Card className="overflow-hidden border-2 border-brand-orange/20 shadow-lg">
          <CardContent className="p-0">
            {/* Mobile: float layout so text wraps around photo. Desktop: flex row */}
            <div className="p-4 overflow-hidden md:p-0 md:flex md:flex-row md:items-center">
              <div className="float-left mr-3 mb-1 w-[110px] h-[130px] overflow-hidden rounded-md md:float-none md:flex-shrink-0 md:w-48 md:h-[200px] md:m-4 md:rounded-lg">
                <img
                  src="/president.png"
                  alt="School President"
                  className="w-full h-full object-contain md:object-cover object-center"
                />
              </div>
              <div className="md:flex-1 md:p-6 md:flex md:flex-col md:justify-center">
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {t("principal_message_body")}
                </p>
                <div className="mt-4 pt-3 border-t border-brand-orange/20">
                  <p className="text-sm text-brand-blue font-semibold whitespace-pre-line">
                    {t("principal_attribution")}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Head Mistress's Message */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-brand-blue mb-6 sm:mb-8">
          {t("head_mistress_message")}
        </h2>
        <Card className="overflow-hidden border-2 border-brand-orange/20 shadow-lg">
          <CardContent className="p-0">
            <div className="p-4 overflow-hidden md:p-0 md:flex md:flex-row md:items-center">
              <div className="float-left mr-3 mb-1 w-[110px] h-[130px] overflow-hidden rounded-md md:float-none md:flex-shrink-0 md:w-48 md:h-[200px] md:m-4 md:rounded-lg">
                <img
                  src={getLeadershipImage("Sangamma.png")}
                  alt="Head Mistress Sangamma"
                  className="w-full h-full object-contain md:object-cover object-center"
                />
              </div>
              <div className="md:flex-1 md:p-6 md:flex md:flex-col md:justify-center">
                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                  {t("head_mistress_message_body")}
                </p>
                <div className="mt-4 pt-3 border-t border-brand-orange/20">
                  <p className="text-sm text-brand-blue font-semibold">
                    {t("sangamma_attribution")}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Leadership Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">
          {t("our_leadership")}
        </h2>
      </section>

      {/* Director - Sri S L Jayaram */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {t("director")}
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
                  {t("sri_sl_jayaram")}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t("sri_sl_jayaram_bio")}
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
              {t("director")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img
                  src="/assets/leadership/sri_raja_ashwathanarayanas_shetty.png"
                  alt="Sri Raja Ashwathanarayana Shetty"
                  className="w-32 h-32 rounded-full object-cover border-4 border-brand-orange/20"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {t("sri_raja_ashwathanarayana_shetty")}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t("sri_raja_ashwathanarayana_shetty_bio")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Honorary President - Sri Somashekharayya */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {t("honorary_president")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img
                  src="/assets/leadership/soma_shakarayya.png"
                  alt="Sri Somashekharayya"
                  className="w-32 h-32 rounded-full object-cover border-4 border-brand-orange/20"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {t("sri_somashekharayya")}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t("sri_somashekharayya_bio")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* School President - Somashekhar */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {t("school_president")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img
                  src={getDonorImage("SOMASHEKHAR.png")}
                  alt="Somashekhar"
                  className="w-32 h-32 rounded-full object-cover border-4 border-brand-orange/20"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {t("sri_somashekhar")}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t("sri_somashekhar_bio")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Secretary - Hemanth Kumar */}
      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {t("secretary")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0">
                <img
                  src="/assets/leadership/hemanth_kumar.jpeg"
                  alt="Sri Hemanth Kumar"
                  className="w-32 h-32 rounded-full object-cover border-4 border-brand-orange/20"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-brand-blue mb-2">
                  {t("sri_hemanth_kumar")}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {t("sri_hemanth_kumar_bio")}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Board Members */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8">
          {t("administrative_board")}
        </h2>
        <Card>
          <CardContent className="p-6">
            <img
              src="/assets/leadership/board_members.jpeg"
              alt="Administrative Board"
              className="w-full rounded-lg object-cover"
            />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
