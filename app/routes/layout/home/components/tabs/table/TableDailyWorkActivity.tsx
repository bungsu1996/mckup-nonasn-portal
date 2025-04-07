import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import type { SortingState } from "@tanstack/react-table";
import { Button } from "~/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import AlertDialogDeleteV1 from "../widgets/AlertDialogDelete";
import { dataAktifitasHarianPekerjaan } from "~/assets/templates/data_pekerjaan_harian.dummy";

const rawData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  nama: `User ${i + 1}`,
  status: i % 2 === 0 ? "Aktif" : "Nonaktif",
  alamat: `Alamat ${i + 1}`,
}));

export default function TableDailyWorkActivity() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });

  const filteredData = useMemo(() => {
    if (statusFilter === "all" || !statusFilter) return dataAktifitasHarianPekerjaan;
    return dataAktifitasHarianPekerjaan.filter((row) => row.isDeleted.toString() === statusFilter);
  }, [statusFilter]);

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: "hariPekerjaan",
        header: "Hari",
      },
      {
        accessorKey: "jamMulaiPekerjaan",
        header: "Waktu Mulai",
      },
      {
        accessorKey: "jamAkhirPekerjaan",
        header: "Waktu Akhir",
      },
      {
        accessorKey: "tempatPekerjaan",
        header: "Tempat Kerja",
      },
      {
        accessorKey: "uraianAktifitas",
        header: "Uraian Aktivitas",
      },
      {
        accessorKey: "statusKehadiran",
        header: "Status Kehadiran",
      },
      {
        accessorKey: "dibuatOleh",
        header: "Pembuat",
      },
      {
        id: "actions",
        header: "Aksi",
        cell: ({ row }) => (
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => alert(`Detail ${row.original.id}`)} className="text-xs">
              Detail
            </Button>
            <Button size="sm" variant="secondary" onClick={() => alert(`Edit ${row.original.id}`)} className="text-xs">
              Edit
            </Button>
            <AlertDialogDeleteV1 />
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      sorting,
      pagination,
    },
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
    pageCount: Math.ceil(filteredData.length / pagination.pageSize),
  });

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
        <div className="flex flex-col gap-1 mt-3">
          <span className="text-xs font-light text-gray-700">Filter Deleted</span>
          <Select onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[150px] text-xs">
              <SelectValue placeholder="Pilih Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem className="text-xs" value="all">Semua</SelectItem>
              <SelectItem className="text-xs" value="0">Aktif</SelectItem>
              <SelectItem className="text-xs" value="1">Nonaktif</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="rounded-md border overflow-x-auto">
        <table className="w-full text-xs">
          <thead className="bg-[#17163c] text-white">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getCanSort() ? header.column.getToggleSortingHandler() : undefined}
                    className="cursor-pointer px-4 py-2 text-left whitespace-nowrap"
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{
                      asc: " 🔼",
                      desc: " 🔽",
                    }[header.column.getIsSorted() as string] ?? ""}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="border-b hover:bg-gray-100">
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2 whitespace-nowrap">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="text-center py-4 text-xs">
                  Tidak ada data.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-xs">
        <p className="text-gray-600">
          Halaman {table.getState().pagination.pageIndex + 1} dari {table.getPageCount()}
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} className="text-xs">
            Sebelumnya
          </Button>
          <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} className="text-xs">
            Selanjutnya
          </Button>
        </div>
      </div>
    </div>
  );
}
