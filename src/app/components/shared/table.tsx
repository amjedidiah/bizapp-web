import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";
import ShouldRender from "@/components/shared/should-render";
import { ClassValue } from "clsx";
import Button from "@/components/shared/button";
import Status from "@/components/shared/status";
import Link from "next/link";
import TablePagination from "@/components/table-pagination";

type TableProps = PropsWithChildren<{
  columnNames: string[];
  data: Array<Record<string, string>>;
  containerClassName: ClassValue;
  headerClassName: ClassValue;
  cellClassName: ClassValue;
  noBoldCell?: boolean;
  colCount: number;
  firstCellClassName?: ClassValue;
  ActionComponent?: ActionComponentType;
  moreLink?: string;
  pagination?: boolean;
  paginationClassName?: string;
  paginationActiveClassName?: string;
}>;
type ActionComponentType = FC<Record<string, string>>;
type CellItem = ActionComponentType | string;

export default function Table({
  columnNames,
  data,
  containerClassName,
  headerClassName,
  cellClassName,
  noBoldCell = false,
  colCount,
  firstCellClassName,
  ActionComponent,
  moreLink,
  pagination,
  paginationClassName,
  paginationActiveClassName = "bg-yellow",
}: TableProps) {
  return (
    <div className="text-xs">
      <div
        className={cn(
          "grid max-md:grid-cols-1 capitalize text-start items-stretch",
          containerClassName
        )}
      >
        <Table.Columns
          headerClassName={headerClassName}
          columnNames={columnNames}
        />
        <Table.Rows
          cellClassName={cellClassName}
          data={data}
          ActionComponent={ActionComponent}
          firstCellClassName={firstCellClassName}
          noBoldCell={noBoldCell}
          colCount={colCount}
        />
      </div>
      <ShouldRender condition={Boolean(pagination)}>
        <Table.Pagination
          className={paginationClassName}
          activeClassName={paginationActiveClassName}
        />
      </ShouldRender>
      <ShouldRender condition={Boolean(moreLink)}>
        <div className="flex justify-center bg-slate-100 pt-[10px]">
          <Link href={moreLink as string}>
            <Button variant="yellow-2" underline>
              View All
            </Button>
          </Link>
        </div>
      </ShouldRender>
    </div>
  );
}

Table.Columns = function TableColumns({
  columnNames,
  headerClassName,
}: Pick<TableProps, "columnNames" | "headerClassName">) {
  return columnNames.map((item) => (
    <p
      className={cn(
        "text-black-100 font-semibold bg-slate-200 flex items-center max-md:hidden",
        headerClassName
      )}
      key={item}
    >
      {item}
    </p>
  ));
};

Table.Rows = function TableRows({
  data,
  ActionComponent,
  cellClassName,
  noBoldCell,
  firstCellClassName,
  colCount,
}: Pick<
  TableProps,
  | "data"
  | "ActionComponent"
  | "cellClassName"
  | "firstCellClassName"
  | "noBoldCell"
  | "colCount"
>) {
  const displayData = data.flatMap(({ id, ...item }) => {
    if (ActionComponent) (item as any).action = ActionComponent;

    return Object.entries(item);
  });

  return displayData.map(([key, value], i) => {
    // const cellContainerClassName =
    //   i === 0
    //     ? cn(cellClassName, "font-semibold", firstCellClassName)
    //     : (cellClassName as string);
    const isFirstCell = i % colCount === 0;
    const cellContainerClassName = cn(
      "border-b border-slate-300 max-md:bg-slate-100 max-md:border-x",
      cellClassName,
      {
        "font-semibold": isFirstCell && !noBoldCell,
      },
      isFirstCell && firstCellClassName
    );
    const itemIndex = Math.ceil(i / colCount) || 1;
    const item = data[itemIndex - 1];

    return (
      <Table.Cell
        className={cellContainerClassName}
        value={value}
        key={0}
        index={key}
        item={item}
      />
    );
  });
};

Table.Cell = function TableCell({
  className,
  value,
  index,
  item,
}: {
  className: string;
  value: CellItem;
  index: string;
  item: Record<string, string>;
}) {
  const isString = typeof value === "string";
  const isStatus = index === "status";
  const isDate = index === "date";
  const Component = value as ActionComponentType;
  const str = value as string;

  return (
    <p className={cn(className, "flex items-center gap-3 max-md:shadow-sm")}>
      <ShouldRender condition={isString}>
        <span className="md:hidden">{index}: </span>
        <ShouldRender condition={isStatus}>
          <Status state={str} />
        </ShouldRender>
        <ShouldRender condition={isDate}>
          <span className="text-red-100">{str}</span>
        </ShouldRender>
        <ShouldRender condition={!isDate && !isStatus}>
          <span>{str}</span>
        </ShouldRender>
      </ShouldRender>

      <ShouldRender condition={!isString}>
        <Component {...item} />
      </ShouldRender>
    </p>
  );
};

Table.Pagination = TablePagination;