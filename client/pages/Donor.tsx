import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Copy, Heart, Mail, Phone, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { getDonorImage } from "@/lib/imageUtils";
import { toast } from "@/hooks/use-toast";
import { useI18n } from "@/lib/i18n";
import { useState } from "react";

export default function Donor() {
  const { t, lang } = useI18n();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const donorsWithPhoto = [
    {
      name: "S V SATHYANARAYANA SHETTY",
      nameKn: "ಎಸ್ ವಿ ಸತ್ಯನಾರಾಯಣ ಶೆಟ್ಟಿ",
      description: "",
      descriptionKn: "",
      photo: "S_V_SATHYANARAYANA_SHETTY.png",
    },
    {
      name: "S L JAYARAM",
      nameKn: "ಎಸ್ ಎಲ್ ಜಯರಾಮ್",
      description: "SIRA",
      descriptionKn: "ಸಿರಾ",
      photo: "S_L_JAYARAM.png",
    },
    {
      name: "SOMASHEKHAR",
      nameKn: "ಸೋಮಶೇಖರ್",
      description: "NANDINI BAKERY, SIRA",
      descriptionKn: "ನಂದಿನಿ ಬೇಕರಿ, ಸಿರಾ",
      photo: "SOMASHEKHAR.png",
    },
    {
      name: "L RANGANATHAPPA",
      nameKn: "ಎಲ್ ರಂಗನಾಥಪ್ಪ",
      description: "RTD. ENGINEER",
      descriptionKn: "ನಿವೃತ್ತ ಎಂಜಿನಿಯರ್",
      photo: "L_RANGANATHAPPA.png",
    },
    {
      name: "G P RAJU",
      nameKn: "ಜಿ ಪಿ ರಾಜು",
      description: "RTD. PRINCIPAL",
      descriptionKn: "ನಿವೃತ್ತ ಪ್ರಾಚಾರ್ಯರು",
      photo: "G_P_RAJU.png",
    },
    {
      name: "JAYARAMU",
      nameKn: "ಜಯರಾಮು",
      description: "EX-MILITARY OFFICER",
      descriptionKn: "ಮಾಜಿ ಮಿಲಿಟರಿ ಅಧಿಕಾರಿ",
      photo: "JAYARAMU.png",
    },
    {
      name: "A HANUMANTHA ACHARYA",
      nameKn: "ಎ ಹನುಮಂತ ಆಚಾರ್ಯ",
      description: "",
      descriptionKn: "",
      photo: "A_HANUMANTHA_ACHARYA.png",
    },
    {
      name: "KUM. SANGAMMA KUBSAD",
      nameKn: "ಕು. ಸಂಗಮ್ಮ ಕುಬಸದ್",
      description: "",
      descriptionKn: "",
      photo: "KUM._SANGAMMA_KUBSAD.png",
    },
  ];

  const donorsWithoutPhoto = [
    { name: "YASHODA JAYARAM", nameKn: "ಯಶೋದಾ ಜಯರಾಮ್" },
    { name: "P THIMMAIAH AYYAPPA SWAMY", nameKn: "ಪಿ ತಿಮ್ಮಯ್ಯ ಅಯ್ಯಪ್ಪ ಸ್ವಾಮಿ" },
    { name: "DR. DEEPAK, SIRA", nameKn: "ಡಾ. ದೀಪಕ್, ಸಿರಾ" },
    { name: "DR. KESHAVA MURTHY, SIRA", nameKn: "ಡಾ. ಕೇಶವ ಮೂರ್ತಿ, ಸಿರಾ" },
    { name: "DR. RAGHU, SIRA", nameKn: "ಡಾ. ರಘು, ಸಿರಾ" },
    { name: "H N SURESH BABU, SIRA", nameKn: "ಎಚ್ ಎನ್ ಸುರೇಶ್ ಬಾಬು, ಸಿರಾ" },
    {
      name: "R RAVINDRANATH AND BROS.",
      nameKn: "ಆರ್ ರವೀಂದ್ರನಾಥ್ ಮತ್ತು ಸಹೋದರರು",
    },
    { name: "PARTHASARATHY AND SONS", nameKn: "ಪಾರ್ಥಸಾರಥಿ ಮತ್ತು ಮಕ್ಕಳು" },
    { name: "SUDARSHAN BABU, BENGALURU", nameKn: "ಸುದರ್ಶನ್ ಬಾಬು, ಬೆಂಗಳೂರು" },
  ];

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast({
        title: t("donor_thank_you"),
        description: "Copied to clipboard!",
      });
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-red-100 rounded-full">
              <Heart className="h-12 w-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t("donor_title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t("donor_subtitle")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Bank Transfer Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  {t("donor_account_details")}
                </CardTitle>
                <CardDescription className="font-bold text-base md:text-lg text-green-800 leading-snug mt-1">
                  {t("donor_note_text")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600">
                        {t("donor_bank_name")}
                      </Label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">
                          {t("donor_bank_name_value")}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(t("donor_bank_name_value"), "bank")
                          }
                        >
                          {copiedField === "bank" ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-600">
                        {t("donor_branch")}
                      </Label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium">
                          {t("donor_branch_value")}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(t("donor_branch_value"), "branch")
                          }
                        >
                          {copiedField === "branch" ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-600">
                      {t("donor_account_holder")}
                    </Label>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="font-medium">
                        {t("donor_account_holder_value")}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(
                            t("donor_account_holder_value"),
                            "holder",
                          )
                        }
                      >
                        {copiedField === "holder" ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <Copy className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-600">
                        {t("donor_account_number")}
                      </Label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-mono text-sm">
                          {t("donor_account_number_value")}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(
                              t("donor_account_number_value"),
                              "account",
                            )
                          }
                        >
                          {copiedField === "account" ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label className="text-sm font-medium text-gray-600">
                        {t("donor_ifsc_code")}
                      </Label>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="font-mono text-sm">
                          {t("donor_ifsc_code_value")}
                        </span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            copyToClipboard(t("donor_ifsc_code_value"), "ifsc")
                          }
                        >
                          {copiedField === "ifsc" ? (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    {t("donor_contact_info")}
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>{t("donor_contact_phone")}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Mail className="h-4 w-4" />
                      <span>{t("donor_contact_email")}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* UPI / QR Card */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>{t("donor_upi_payment")}</CardTitle>
                <CardDescription>{t("donor_upi_description")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <img
                    src="/assets/qr_code.png"
                    alt="UPI QR Code"
                    className="w-48 h-48 object-contain"
                  />
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600">
                    {t("donor_upi_id")}
                  </Label>
                  <div className="mt-2 flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-mono text-sm break-all">
                      {t("donor_upi_id_value")}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        copyToClipboard(t("donor_upi_id_value"), "upi")
                      }
                    >
                      {copiedField === "upi" ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-green-50 border-2 border-green-300">
                  <p className="text-base md:text-lg font-bold text-green-900 leading-snug">
                    {t("donor_tax_note")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-12 text-center">
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t("donor_thank_you")}
            </h3>
            <p className="text-gray-600">{t("donor_thank_you_message")}</p>
          </div>
        </div>

        {/* Donor Count */}
        <div className="mt-8 max-w-2xl mx-auto">
          <Card>
            <CardContent className="py-8 text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-brand-blue" />
              </div>
              <div className="text-sm text-gray-600">
                {t("donor_total_donors")}
              </div>
              <div className="text-4xl font-bold text-brand-blue mt-1">
                300+
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Donors with Photos */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{t("donor_list_title")}</CardTitle>
              <CardDescription>{t("donor_list_desc")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-10">
                {donorsWithPhoto.map((donor, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-brand-blue/20 shadow-md group-hover:border-brand-blue transition-colors mb-3">
                      <img
                        src={getDonorImage(donor.photo)}
                        alt={donor.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="font-bold text-gray-900 text-sm leading-tight">
                      {lang === "kn" ? donor.nameKn : donor.name}
                    </p>
                    {donor.description && (
                      <p className="text-brand-blue text-xs mt-1">
                        {lang === "kn"
                          ? donor.descriptionKn
                          : donor.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Donors without Photos */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  Other Distinguished Donors
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {donorsWithoutPhoto.map((donor, index) => (
                    <div
                      key={index}
                      className="p-3 rounded-lg bg-gray-50 text-sm text-gray-800 flex items-center gap-2"
                    >
                      <Heart className="h-3 w-3 text-brand-orange shrink-0" />
                      {lang === "kn" ? donor.nameKn : donor.name}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
