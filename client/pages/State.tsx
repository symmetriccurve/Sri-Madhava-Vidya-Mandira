import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getDonorImage, getLeadershipImage } from "@/lib/imageUtils";

import { useI18n } from "@/lib/i18n";
import { useState } from "react";
import { X } from "lucide-react";

export default function State() {
  const { t } = useI18n();
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="container mx-auto py-10">
      {/* Karnataka State Board Curriculum */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-brand-blue mb-6 sm:mb-8">
          {t("state_board_section_title")}
        </h2>
        <Card>
          <CardContent className="pt-6 space-y-4 text-gray-700 leading-relaxed">
            <p>{t("state_board_section_body")}</p>
            <a
              href="https://kseab.karnataka.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-brand-blue font-semibold underline hover:text-brand-orange"
            >
              {t("state_board_official_link")}
            </a>
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

      {/* Principal's Message (Head Mistress) */}
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

      {/* State Board Curriculum */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-brand-blue">
              {t("academics_page_upcoming_cbse_title")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              {t("faq_curriculum_answer")}
            </p>
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
        <h2 className="text-3xl font-bold text-center text-brand-blue mb-8 px-4 sm:px-0">
          {t("administrative_board")}
        </h2>
        <Card className="m-0 sm:m-0 rounded-none sm:rounded-lg">
          <CardContent className="p-0">
            <img
              src="/assets/leadership/board_members.jpeg"
              alt="Administrative Board"
              className="w-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setShowModal(true)}
            />
          </CardContent>
        </Card>
      </section>

      {/* Board Members Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-lg shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="w-full h-[90vh] overflow-auto">
              <img
                src="/assets/leadership/board_members.jpeg"
                alt="Administrative Board"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
