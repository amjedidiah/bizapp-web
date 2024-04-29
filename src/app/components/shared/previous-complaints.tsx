import SearchForm from "@/components/shared/search-form";
import Complaints from "@/components/shared/complaints";

export default function PreviousComplaints() {
  return (
    <div className="flex flex-col gap-8 lg:gap-[83px]">
      <div className="flex max-mobile:flex-col-reverse mobile:items-center justify-between border-b border-primary border-opacity-10 py-[10px] gap-4 mobile:gap-10">
        <p className="min-w-fit text-primary text-opacity-80 font-inter text-sm font-medium leading-6 tracking-[0.4px] capitalize relative after:absolute after:h-[2px] after:-bottom-[10px] mobile:after:-bottom-5 after:left-0 after:w-[133px] after:bg-yellow-100">
          Previous Complaints
        </p>
        <SearchForm
          className="py-2 px-3 mobile:px-5"
          placeholder="Search by date or department"
        />
      </div>

      <Complaints />
    </div>
  );
}
