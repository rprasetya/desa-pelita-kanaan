'use client'
import React, { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  { id: "m5gr84i9", Nama: "Apotik Mandiri II", Kategori: "", Alamat: "RT 07", Jenis: "Kefarmasian", },
  { id: "3u1reuv4", Nama: "Anugrah", Kategori: "", Alamat: "RT 07", Jenis: "Sembako", },
  { id: "derv1ws0", Nama: "Apotik Malinau", Kategori: "", Alamat: "RT 07", Jenis: "Kefarmasian",  },
];

const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "no",
    header: "No",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "Nama",
    header: "Nama",
    cell: ({ row }) => <div className="capitalize">{row.getValue("Nama")}</div>,
  },
  {
    accessorKey: "Kategori",
    header: "Kategori",
    cell: ({ row }) => <div className="capitalize">{row.getValue("Kategori")}</div>,
  },
  {
    accessorKey: "Alamat",
    header: ({ column }) => (
      <button className="flex justify-center items-center gap-2 cursor-pointer hover:border-b border-black" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Alamat <ArrowUpDown size={15}/>
      </button>
    ),
    cell: ({ row }) => <div className="">{row.getValue("Alamat")}</div>,
  },
  {
    accessorKey: "Jenis",
    header: () => <div className="text-right">Jenis</div>,
    cell: ({ row }) => <div className="text-right">{row.getValue("Jenis")}</div>,
  },
];

export const TableUMKM = () => {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter Nama..."
          value={(table.getColumn("Nama")?.getFilterValue() || "")}
          onChange={(event) => table.getColumn("Nama")?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">No results.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}