import { useI18n } from "@/lib/i18n";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PDF_URL = "https://gurudevakottur.com/staging/pdf/mandatory_disclose/1776082590_blank.pdf";

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
      information: "COMPLETE ADDRESS WITH PIN CODE",
      details: "Sri Madhava Vidya Mandira, Bhavani Nagara, Sira – 572137, Tumakuru District, Karnataka",
    },
    {
      slNo: 3,
      information: "PRINCIPAL NAME",
      details: "The Principal",
    },
    {
      slNo: 4,
      information: "PRINCIPAL QUALIFICATION",
      details: "M.A., B.Ed",
    },
    {
      slNo: 5,
      information: "SCHOOL EMAIL ID",
      details: "smvmsira@gmail.com",
    },
    {
      slNo: 6,
      information: "CONTACT DETAILS (LANDLINE / MOBILE)",
      details: "+91 9449643684, +91 9449424530",
    },
  ];

  const documents = [
    {
      slNo: 1,
      information: "COPIES OF SOCIETIES/TRUST REGISTRATION OR RENEWAL CERT",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 2,
      information: "COPY OF NOC",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 3,
      information: "COPIES OF RECOGNITION CERT",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 4,
      information: "COPY OF VALID BUILDING SAFETY CERTIFICATE",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 5,
      information: "COPY OF VALID FIRE SAFETY CERTIFICATE",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 6,
      information: "SELF CERTIFICATE",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 7,
      information: "COPY OF VALID WATER, HEALTH AND SANITATION",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 8,
      information: "MPD DOCUMENT",
      details: "PDF",
      isLink: true,
    },
  ];

  const resultsAcademics = [
    {
      slNo: 1,
      information: "FEE STRUCTURE OF THE SCHOOL",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 2,
      information: "ANNUAL ACADEMIC CALENDAR",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 3,
      information: "LIST OF SCHOOL MANAGEMENT COMMITTEE",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 4,
      information: "LIST OF PARENT TEACHERS ASSOCIATION MEMBERS",
      details: "PDF",
      isLink: true,
    },
  ];

  const staffTeaching = [
    {
      slNo: 1,
      information: "PRINCIPAL",
      details: "Sangama Mataji, M.A., B.Ed",
    },
    {
      slNo: 2,
      information: "TOTAL NO OF TEACHERS",
      details: "25",
    },
    {
      slNo: "2.1",
      information: "PGT",
      details: "5",
    },
    {
      slNo: "2.2",
      information: "TGT",
      details: "10",
    },
    {
      slNo: "2.3",
      information: "PRT",
      details: "8",
    },
    {
      slNo: "2.4",
      information: "NTT",
      details: "2",
    },
    {
      slNo: 3,
      information: "TEACHERS SECTION RATIO",
      details: "1:1.5",
    },
    {
      slNo: 4,
      information: "STAFF DETAILS",
      details: "PDF",
      isLink: true,
    },
    {
      slNo: 5,
      information: "DETAILS OF SPECIAL EDUCATOR",
      details: "Ms. Priya Sharma, B.Sc Special Education",
    },
    {
      slNo: 6,
      information: "DETAILS OF COUNSELLOR AND WELLNESS TEACHER",
      details: "Ms. Neha Verma, M.Sc Counselling Psychology",
    },
  ];

  const schoolInfrastructure = [
    {
      slNo: 1,
      information: "TOTAL CAMPUS AREA OF THE SCHOOL (SQ FT)",
      details: "269,098 sq.ft",
    },
    {
      slNo: 2,
      information: "NO AND SIZE OF THE CLASS ROOMS (SQ FT)",
      details: "22 classrooms (6,458-8,611 sq.ft each)",
    },
    {
      slNo: 3,
      information: "NO AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (SQ FT)",
      details: "SCIENCE LAB: 6,458 sq.ft\nMATH LAB: 4,305 sq.ft\nCOMPUTER LAB: 5,382 sq.ft",
    },
    {
      slNo: 4,
      information: "INTERNET FACILITY",
      details: "YES - High-speed fiber connectivity",
    },
    {
      slNo: 5,
      information: "NO OF GIRLS TOILETS",
      details: "8",
    },
    {
      slNo: 6,
      information: "NO OF BOYS TOILETS",
      details: "10",
    },
  ];

  const selfAffidavit = [
    {
      slNo: 1,
      information: "SELF AFFIDAVIT",
      details: "PDF",
      isLink: true,
    },
  ];

  const classStrength = [
    {
      slNo: 1,
      information: "CLASSWISE STRENGTH",
      details: "PDF",
      isLink: true,
    },
  ];

  const academicCalendar = [
    {
      slNo: 1,
      information: "ACADEMIC CALENDAR",
      details: "PDF",
      isLink: true,
    },
  ];

  const curriculumDetails = [
    {
      slNo: 1,
      information: "DETAILS OF CURRICULUM",
      details: "PDF",
      isLink: true,
    },
  ];

  const TableRow = ({ item, index }: { item: any; index: number }) => (
    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-medium text-xs md:text-sm">
        {item.slNo}
      </td>
      <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 font-medium text-gray-800 text-xs md:text-sm">
        {item.information}
      </td>
      <td className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm">
        {item.isLink ? (
          <button
            onClick={() => window.open(PDF_URL, '_blank')}
            className="btn-primary text-xs md:text-sm px-2 md:px-3 py-1 md:py-2 inline-block"
          >
            Click Here
          </button>
        ) : (
          <span className="whitespace-pre-line text-gray-700">{item.details}</span>
        )}
      </td>
    </tr>
  );

  return (
    <main className="container mx-auto py-6 md:py-10 px-3 md:px-4">
      {/* Hero Section */}
      <section className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl md:text-4xl font-bold text-brand-blue mb-3 md:mb-4">Mandatory Disclosure</h1>
        <p className="text-base md:text-xl text-gray-600 mb-4 md:mb-6">School Information & Documentation</p>
      </section>

      {/* General Information Section */}
      <Card className="mb-6 md:mb-8">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-3 md:p-6">
          <CardTitle className="text-lg md:text-2xl">A. General Information</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    INFORMATION
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {generalInfo.map((item, index) => (
                  <TableRow key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Documents and Information Section */}
      <Card className="mb-6 md:mb-8">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-3 md:p-6">
          <CardTitle className="text-lg md:text-2xl">B. Documents and Information (All documents are in PDF Format)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    INFORMATION
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-gray-800 text-xs md:text-sm">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {documents.map((item, index) => (
                  <TableRow key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Results and Academic Section */}
      <Card className="mb-6 md:mb-8">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-3 md:p-6">
          <CardTitle className="text-lg md:text-2xl">C. Result and Academics</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    DOCUMENTS / INFORMATION
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-gray-800 text-xs md:text-sm">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {resultsAcademics.map((item, index) => (
                  <TableRow key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Staff (Teaching) Section */}
      <Card className="mb-6 md:mb-8">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-3 md:p-6">
          <CardTitle className="text-lg md:text-2xl">D. Staff (Teaching)</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    DOCUMENTS / INFORMATION
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-gray-800 text-xs md:text-sm">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {staffTeaching.map((item, index) => (
                  <TableRow key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* School Infrastructure Section */}
      <Card className="mb-6 md:mb-8">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-3 md:p-6">
          <CardTitle className="text-lg md:text-2xl">E. School Infrastructure</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    DOCUMENTS / INFORMATION
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-gray-800 text-xs md:text-sm">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {schoolInfrastructure.map((item, index) => (
                  <TableRow key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Self Affidavit Section */}
      <Card className="mb-6 md:mb-8">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-3 md:p-6">
          <CardTitle className="text-lg md:text-2xl">F. Self Affidavit</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    DOCUMENTS / INFORMATION
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-gray-800 text-xs md:text-sm">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {selfAffidavit.map((item, index) => (
                  <TableRow key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Classwise Strength Section */}
      <Card className="mb-6 md:mb-8">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-3 md:p-6">
          <CardTitle className="text-lg md:text-2xl">G. Classwise Strength</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    DOCUMENTS / INFORMATION
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-gray-800 text-xs md:text-sm">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {classStrength.map((item, index) => (
                  <TableRow key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Academic Calendar Section */}
      <Card className="mb-6 md:mb-8">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-3 md:p-6">
          <CardTitle className="text-lg md:text-2xl">H. Academic Calendar</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    DOCUMENTS / INFORMATION
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-gray-800 text-xs md:text-sm">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {academicCalendar.map((item, index) => (
                  <TableRow key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Details of Curriculum Section */}
      <Card className="mb-6 md:mb-8">
        <CardHeader className="bg-brand-blue text-white rounded-t-lg p-3 md:p-6">
          <CardTitle className="text-lg md:text-2xl">I. Details of Curriculum</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs md:text-base min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    SL NO.
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-left font-semibold text-gray-800 text-xs md:text-sm">
                    DOCUMENTS / INFORMATION
                  </th>
                  <th className="border border-gray-300 px-2 md:px-4 py-2 md:py-3 text-center font-semibold text-gray-800 text-xs md:text-sm">
                    DETAILS
                  </th>
                </tr>
              </thead>
              <tbody>
                {curriculumDetails.map((item, index) => (
                  <TableRow key={index} item={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
