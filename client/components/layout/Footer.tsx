import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { getLogo } from "@/lib/imageUtils";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("🔍 Footer: Attempting to load counter...");
    const container = document.getElementById("ucounter-container");

    if (!container) {
      console.error("❌ Counter container not found!");
      return;
    }

    console.log("✅ Counter container found");

    // Create an iframe to load counter scripts safely
    const iframe = document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "auto";
    iframe.style.height = "20px";
    iframe.style.overflow = "hidden";
    iframe.sandbox.add("allow-scripts");
    iframe.sandbox.add("allow-same-origin");

    container.appendChild(iframe);
    console.log("📝 iframe appended");

    // Write the counter HTML to the iframe
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    const counterHTML = `
      <html>
        <head></head>
        <body style="margin:0; padding:0; text-align:center; overflow:hidden;">
          <script language="javascript" src="https://yo.ucounter.com/26/pjzs/05/s/2/"><\/script>
          <script language="javascript" src="https://ucounter.com/stat.js"><\/script>
        </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(counterHTML);
    iframeDoc.close();
    console.log("✅ Counter HTML written to iframe");

    return () => {
      console.log("🧹 Cleaning up counter");
      container.removeChild(iframe);
    };
  }, []);

  return (
    <footer className="mt-16 border-t bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        {/* School Info */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={getLogo()}
              alt="Logo"
              className="h-12 w-12 rounded-full ring-2 ring-brand-orange/20"
            />
            <div className="font-bold text-lg text-brand-blue tracking-tight">
              {t("school_name")}
            </div>
          </div>
          <p className="text-sm text-brand-orange font-semibold tracking-wide uppercase italic mb-2">
            {t("footer_motto")}
          </p>
          <p className="text-xs text-gray-500 leading-relaxed">
            © {year} {t("school_name")}. {t("copyright")}
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Quick Links Column 1 */}
          <div>
            <h3 className="font-semibold text-sm text-gray-700 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/about"
                >
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/academics"
                >
                  {t("academics")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/admissions"
                >
                  {t("admissions")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/facilities"
                >
                  {t("facilities")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/gallery"
                >
                  {t("gallery")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div>
            <h3 className="font-semibold text-sm text-gray-700 mb-4">More</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/news"
                >
                  {t("news")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/achievements"
                >
                  {t("achievements")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/results"
                >
                  {t("results")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/alumni"
                >
                  {t("alumni")}
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 hover:text-brand-orange transition-colors"
                  to="/faqs"
                >
                  {t("faqs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Hidden on mobile, visible on sm+ */}
          <div className="hidden sm:block" />
        </div>
      </div>

      {/* uCounter.com Code */}
      <div className="py-3 border-t text-center">
        <p className="text-xs text-gray-500 mb-2">Visitor Count</p>
        <div
          id="ucounter-container"
          style={{
            minHeight: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            zIndex: 10,
          }}
        />
      </div>
      <div className="border-t py-3 flex flex-col items-center gap-1.5">
        <div className="text-center text-xs text-gray-400">
          A digital initiative by{" "}
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-500 font-medium hover:text-blue-600 underline underline-offset-2 transition-colors"
          >
            Rainbow Shiksha Foundation
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-xl shadow-2xl max-w-sm w-full p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                Rainbow Shiksha Foundation
              </span>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              This website is part of Rainbow Shiksha Foundation's Digital
              Initiative Programme — built to support schools and charitable
              organisations with a meaningful online presence.
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Do you have a similar need? We'd love to help.
            </p>
            <a
              href="https://www.rainbowshiksha.org"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs font-medium text-blue-600 hover:text-blue-800 underline underline-offset-2 transition-colors"
            >
              Reach out at rainbowshiksha.org →
            </a>
          </div>
        </div>
      )}
    </footer>
  );
}
