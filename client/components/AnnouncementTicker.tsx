import { useI18n } from "@/lib/i18n";

export default function AnnouncementTicker() {
  const { t } = useI18n();
  const items = [t("ticker_1"), t("ticker_2"), t("ticker_3")];
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-brand-blue text-white">
      <div className="py-2">
        <div className="inline-block whitespace-nowrap animate-stock-ticker will-change-transform">
          {doubled.map((item, idx) => (
            <span key={idx} className="inline-flex items-center">
              <span className="text-sm font-medium px-8">{item}</span>
              <span className="text-brand-orange opacity-70">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
