import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "~/components/ui/alertdialog";
import { Trash2 } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function AlertDialogDeleteV1() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="sm" variant="destructive" className="text-xs">
          Hapus
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            <Trash2 className="text-red-500 w-6 h-6" />
            <div>
              <AlertDialogTitle className="text-sm">Hapus Data</AlertDialogTitle>
              <AlertDialogDescription className="text-xs">
                Apakah kamu yakin ingin menghapus data <b>Fulan</b>? Tindakan ini tidak dapat dibatalkan.
              </AlertDialogDescription>
            </div>
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-xs">Batal</AlertDialogCancel>
          <AlertDialogAction
            className="bg-red-600 hover:bg-red-700 text-xs"
            onClick={() => {
              // Ganti dengan logic hapus asli
              console.log("Deleted:", 'Fulan');
            }}
          >
            Ya, Hapus
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}