import { Link } from "react-router";
import { MessageCircle, Camera, Bird, Mail } from "lucide-react";

export default function FooterParent() {
  return (
    <footer className="bg-[#17163c] text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-10">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <Link to="#" className="hover:text-blue-400 transition">
              <MessageCircle size={20} />
            </Link>
            <Link to="#" className="hover:text-pink-400 transition">
              <Camera size={20} />
            </Link>
            <Link to="#" className="hover:text-blue-300 transition">
              <Bird size={20} />
            </Link>
            <Link to="mailto:support@example.com" className="hover:text-yellow-300 transition">
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Alamat</h3>
          <p className="text-sm">
            Jl. Mana Saja No. 123<br />
            Kecamatan Inovasi, Kota Digital<br />
            Provinsi Kemajuan, 12345
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">© {new Date().getFullYear()} JAGRITA</h3>
          <p className="text-sm">All rights reserved. Developed with hmzX for SDM Non-ASN.</p>
        </div>
      </div>
    </footer>
  );
}
