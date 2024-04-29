import Table from "@/components/shared/table";
import customersTableButton from "@/components/action-buttons/customers-table-button";
import SearchForm from "@/components/shared/search-form";
import Filter from "@/components/shared/filter";
import { Fragment } from "react";

const testCustomer = {
  id: "1",
  username: "M_dee_uzee",
  fullName: "Micheal Adeyemi",
  location: "Kumbotso, Kano",
  gender: "M",
  phone: "+23480472849572",
  email: "cartermatter@xyz.com",
  status: "",
};

const customers = Array(7)
  .fill(testCustomer)
  .map((item, i) => ({ ...item, id: (Number(i) + 1).toString() }));

const columnNames = [
  "Username",
  "Customer's full name",
  "Location",
  "Gender",
  "PHONE NUMBER",
  "Email",
  "StaTus",
];

export default function CustomersTable() {
  return (
    <Fragment>
      <div className="flex max-mobile:flex-col mobile:items-center justify-end gap-2">
        <SearchForm />
        <Filter
          className="min-w-fit"
          states={["date", "ascending", "descending", "location"]}
        />
      </div>
      <Table
        columnNames={columnNames}
        data={customers}
        ActionComponent={customersTableButton}
        containerClassName="laptop:bg-gray-20 rounded-[10px] laptop:grid-cols-[1fr,auto,1fr,1fr,auto,auto,125px] [&_p]:border-gray-5 max-laptop:[&_p:not(:nth-child(7n))]:border-b-0 max-laptop:[&_p:nth-child(7n)]:text-right max-laptop:[&_p:nth-child(7n)]:mb-3"
        headerClassName="rounded-t-[10px] h-16 px-5 max-laptop:hidden max border-b border-gray-5 bg-gray-20 text-base leading-4"
        cellClassName="bg-slate-100 text-black-200 text-sm leading-5 tracking-[0.28px] p-4 laptop:py-8 laptop:px-5 max-laptop:shadow-md"
        cellLabelClassName="max-laptop:block"
        firstCellClassName="text-black underline leading-4"
        pagination
        paginationClassName="rounded-b-[10px] leading-4"
        paginationPrevNextClassName="mobile:text-base"
        paginationActiveClassName="bg-black text-yellow-100"
        excludedKeys={["status"]}
      />
    </Fragment>
  );
}
