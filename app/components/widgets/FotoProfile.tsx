import { LogOut, Pencil, Settings, User } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import noImage from '~/assets/images/no_image.jpg';

const AvatarFotoProfile = () => {
  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [avatarImage, setAvatarImage] = useState<string | null>(null);

  const handleCoverUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleAvatarUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAvatarImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full md:max-w-[200px] lg:max-w-sm">
      <div className="relative -mt-3 lg:-mt-3 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* THUMBNAIL/ FOTO SAMPUL */}
        <div className="w-full h-28 md:h-24 lg:h-36 bg-gray-300 relative">
          {coverImage ? (
            <img src={coverImage} alt="Sampul Foto" className="w-full h-full object-cover" />
          ) : (
            <img src={noImage} alt="Sampul Kosong" className="w-full h-full object-cover" />
          )}

          <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer" onClick={() => document.getElementById("coverUpload")?.click()}>
            <Pencil size={16} className="text-gray-600 size-3 lg:size-4" />
          </button>
          <input id="coverUpload" type="file" accept="image/*" className="hidden" onChange={handleCoverUpload} />
        </div>
        
        {/* AVATAR/FOTO PROFILE */}
        <div className="absolute top-20 md:top-12 lg:top-24 left-1/2 transform -translate-x-1/2">
          <div className="relative">
            <img src={avatarImage || noImage} alt="Profile Image" className="w-20 h-20 sm:w-24 sm:h-24 md:w-24 lg:w-28 md:h-24 lg:h-28 rounded-full object-cover border-4 border-white shadow-md" />

            <button className="absolute bottom-1 lg:bottom-2 right-1 lg:right-2 bg-white p-1 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer" onClick={() => document.getElementById("avatarUpload")?.click()}>
              <Pencil size={14} className="text-gray-600" />
            </button>
            <input id="avatarUpload" type="file" accept="image/*" className="hidden" onChange={handleAvatarUpload} />
          </div>
        </div>

        {/* KONTEN PROFILE */}
        <div className="pt-16 lg:pt-20 pb-6 px-6 flex flex-col items-center text-center">
          <p className="text-gray-600 text-xs lg:text-sm font-semibold">Muhammad Hamzah Sya'bani A.J.R.S S.Ag</p>
          <p className="text-gray-600 text-[11px] lg:text-xs font-semibold">Direktur Umum</p>

          <p className="text-gray-500 mt-2 text-[11px] lg:text-xs italic">
            Muslim yang bekerja keras, bukan sekadar mencari nafkah, tapi juga mengukir keberkahan
          </p>
        </div>
      </div>
      {/* <div className="bg-white shadow-lg rounded-lg p-6 relative -mt-3 flex flex-col items-center">

        <img  src={noImage}  alt="Profile Image" className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full object-cover border-2 border-gray-300 mb-5" />
        <p className="text-gray-600 mt-1 text-sm text-center">Muhammad Hamzah Sya'bani A.J.R.S S.Ag</p>
        <p className="text-gray-600 mt-1 text-xs text-center font-semibold">Direktur Umum</p>
        <p className="text-gray-600 mt-3 text-xs text-center italic">
          Muslim yang bekerja keras, bukan sekadar mencari nafkah, tapi juga mengukir keberkahan
        </p>
      </div> */}
    </div>
  );
};

export default AvatarFotoProfile;