interface Props {
  title: string;
  value: string;
}

export default function TabsHomeProfile() {

  const TemplateTeks = ({ title, value}: Props) => {
    return (
      <>
        <span className="col-span-1 font-semibold text-gray-600 text-sm mt-2">{title}</span>
        <span className="col-span-2 text-gray-800 text-sm border-b-2 border-gray-50">{value}</span>
      </>
    );
  }
  return (
    <>
      <div className="border-l-2  border-gray-100 pl-4 py-2">
        <div className="grid grid-cols-3 gap-y-2">
          <TemplateTeks title="Nama" value="Muhammad Hamzah Sya'bani A.J.R.S S.Ag" />
          <TemplateTeks title="Nip" value="12361827381926" />
          <TemplateTeks title="Jabatan" value="Direktur Umum" />
          <TemplateTeks title="Tempat Lahir" value="Bandung" />
          <TemplateTeks title="Tanggal Lahir" value="16 Januari 1996" />
          <TemplateTeks title="Agama" value="Islam" />
          <TemplateTeks title="Email" value="venomous.zach@gmail.com" />
          <TemplateTeks title="Alamat" value="Sekeloa Tengah no. 49/ 152C" />
          <TemplateTeks title="Nomor Hp" value="08187236189" />
          <TemplateTeks title="NPWP" value="123.1231.312312" />
        </div>
      </div>
    </>
  );
}