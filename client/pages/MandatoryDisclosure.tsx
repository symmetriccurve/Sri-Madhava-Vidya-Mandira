import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function MandatoryDisclosure() {
  const { t } = useI18n();

  const generalInfo = [
    {
      slNo: 1,
      information: "NAME OF THE SCHOOL",
      details: "Sri Madhava Vidya Mandira",
    },
    {
      slNo: 2,
      information: "AFFILIATION NUMBER",
      details: "--",
    },
    {
      slNo: 3,
      information: "SCHOOL CODE",
      details: "-",
    },
    {
      slNo: 4,
      information: "COMPLETE ADDRESS WITH PIN CODE",
      details: "Sri Madhava Vidya Mandira, Bhavani Nagara, Sira – 572137, Tumakuru District, Karnataka",
    },
    {
      slNo: 5,
      information: "PRINCIPAL NAME & QUALIFICATION",
      details: "The Principal",
    },
    {
      slNo: 6,
      information: "SCHOOL EMAIL ID",
      details: "smvmsira@gmail.com",
    },
    {
      slNo: 7,
      information: "CONTACT DETAILS (LANDLINE/MOBILE)",
      details: "+91 9449643684, +91 9449424530",
    },
  ];

  const documents = [
    {
      slNo: 1,
      information: "COPIES OF AFFILIATION",
      link: "Click here",
    },
    {
      slNo: 2,
      information: "COPY OF SOCIETIES/TRUST REGISTRATION",
      link: "Click here",
    },
    {
      slNo: 3,
      information: "COPY OF NOC",
      link: "Click here",
    },
    {
      slNo: 4,
      information: "COPIES OF RECOGNITION UNDER RTE",
      link: "Click here",
    },
    {
      slNo: 5,
      information: "COPY OF VALID BUILDING SAFETY CERTIFICATE",
      link: "Click here",
    },
    {
      slNo: 6,
      information: "COPY OF VALID FIRE SAFETY CERTIFICATE",
      link: "Click here",
    },
    {
      slNo: 7,
      information: "COPY OF VALID WATER, HEALTH AND SANITATION CERTIFICATE",
      link: "Click here",
    },
    {
      slNo: 8,
      information: "MANDATORY PUBLIC DISCLOSURE",
      link: "Click here",
    },
  ];

  const resultsAcademics = [
    {
      slNo: 1,
      information: "FEE STRUCTURE",
      link: "Click here",
    },
    {
      slNo: 2,
      information: "ANNUAL ACADEMIC CALENDAR",
      link: "Click here",
    },
    {
      slNo: 3,
      information: "LIST OF SCHOOL MANAGEMENT COMMITTEE",
      link: "Click here",
    },
    {
      slNo: 4,
      information: "LIST OF PARENT TEACHERS ASSOCIATION MEMBERS",
      link: "Click here",
    },
  ];

  const staffTeaching = [
    {
      slNo: 1,
      information: "PRINCIPAL",
      link: "Click here",
    },
    {
      slNo: 2,
      information: "TOTAL NO OF TEACHERS",
      link: "Click here",
    },
  ];

  return (
    <main className="container mx-auto py-10">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">Mandatory Disclosure</h1>
        <p className="text-xl text-gray-600 mb-6">School Information & Documentation</p>
      </section>

      {/* Tabs Section */}
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto mb-8">
          <TabsTrigger value="general">General Information</TabsTrigger>
          <TabsTrigger value="documents">Documents & Information</TabsTrigger>
          <TabsTrigger value="results">Results & Academic</TabsTrigger>
          <TabsTrigger value="staff">Staff (Teaching)</TabsTrigger>
        </TabsList>

        {/* General Information Tab */}
        <TabsContent value="general">
          <Card>
            <CardHeader className="bg-brand-blue text-white rounded-t-lg">
              <CardTitle className="text-2xl">General Information</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">SL NO.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">INFORMATION</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {generalInfo.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-3 text-center font-medium">{item.slNo}</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">{item.information}</td>
                        <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Documents and Information Tab */}
        <TabsContent value="documents">
          <Card>
            <CardHeader className="bg-brand-blue text-white rounded-t-lg">
              <CardTitle className="text-2xl">Documents and Information</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">SL NO.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">INFORMATION</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-3 text-center font-medium">{item.slNo}</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">{item.information}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <Button variant="outline" className="bg-brand-teal text-white hover:bg-brand-teal/90 border-none">
                            {item.link}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Results and Academic Tab */}
        <TabsContent value="results">
          <Card>
            <CardHeader className="bg-brand-blue text-white rounded-t-lg">
              <CardTitle className="text-2xl">Result and Academics</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">SL NO.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">INFORMATION</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {resultsAcademics.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-3 text-center font-medium">{item.slNo}</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">{item.information}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <Button variant="outline" className="bg-brand-teal text-white hover:bg-brand-teal/90 border-none">
                            {item.link}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Staff (Teaching) Tab */}
        <TabsContent value="staff">
          <Card>
            <CardHeader className="bg-brand-blue text-white rounded-t-lg">
              <CardTitle className="text-2xl">Staff (Teaching)</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">SL NO.</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-800">INFORMATION</th>
                      <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-gray-800">DETAILS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffTeaching.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="border border-gray-300 px-4 py-3 text-center font-medium">{item.slNo}</td>
                        <td className="border border-gray-300 px-4 py-3 font-medium text-gray-800">{item.information}</td>
                        <td className="border border-gray-300 px-4 py-3 text-center">
                          <Button variant="outline" className="bg-brand-teal text-white hover:bg-brand-teal/90 border-none">
                            {item.link}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
