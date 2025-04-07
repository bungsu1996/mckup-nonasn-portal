import TableDailyWorkActivity from "./table/TableDailyWorkActivity";

export default function DailyWorkActivity() {
  return (
    <div>
      <h2 className="text-base lg:text-lg font-semibold mb-2">Data Aktivitas Harian Pekerjaan yang Dilakukan oleh SDM Non-ASN</h2>
      <TableDailyWorkActivity />
    </div>
  );
}