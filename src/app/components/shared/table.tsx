import { cn } from "@/lib/utils";
import { FC, PropsWithChildren, useMemo } from "react";
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
  cellLabelClassName?: ClassValue;
  noBoldCell?: boolean;
  firstCellClassName?: ClassValue;
  ActionComponent?: ActionComponentType;
  moreLink?: string;
  pagination?: boolean;
  paginationClassName?: string;
  paginationPrevNextClassName?: string;
  paginationActiveClassName?: string;
  excludedKeys?: string[];
}>;
type ActionComponentType = FC<Record<string, string>>;
type CellItem = ActionComponentType | string;

export default function Table({
  columnNames,
  data,
  containerClassName,
  headerClassName,
  cellClassName,
  cellLabelClassName,
  noBoldCell = false,
  firstCellClassName,
  ActionComponent,
  moreLink,
  pagination,
  paginationClassName,
  paginationPrevNextClassName,
  paginationActiveClassName = "bg-yellow",
  excludedKeys,
}: TableProps) {
  const colCount = columnNames.length;

  return (
    <div className="text-xs">
      <div
        className={cn(
          "grid max-md:grid-cols-1 capitalize text-start items-stretch rounded-t",
          containerClassName
        )}
      >
        <Table.Columns
          headerClassName={headerClassName}
          columnNames={columnNames}
        />
        <Table.Rows
          excludedKeys={excludedKeys}
          cellClassName={cellClassName}
          cellLabelClassName={cellLabelClassName}
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
          prevNextClassName={paginationPrevNextClassName}
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
        "text-black-100 font-semibold bg-slate-200 flex items-center max-md:hidden capitalize rounded-t",
        headerClassName
      )}
      key={item}
    >
      {item.toLowerCase()}
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
  excludedKeys = [],
  cellLabelClassName = "max-md:block",
}: Pick<
  TableProps,
  | "data"
  | "ActionComponent"
  | "cellClassName"
  | "firstCellClassName"
  | "noBoldCell"
  | "excludedKeys"
  | "cellLabelClassName"
> & { colCount: number }) {
  const compiledExcludedKeys = useMemo(
    () => [...excludedKeys, "id"],
    [excludedKeys]
  );
  const displayData = useMemo(
    () =>
      data.flatMap((obj) => {
        const item = { ...obj };

        // Iterate through keys to delete
        compiledExcludedKeys.forEach((key) => {
          // Delete the key from the object if it exists
          if (item.hasOwnProperty(key)) delete item[key];
        });

        if (ActionComponent) (item as any).action = ActionComponent;

        return Object.entries(item);
      }),
    [ActionComponent, compiledExcludedKeys, data]
  );

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
        labelClassName={cellLabelClassName}
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
  labelClassName,
}: {
  className: string;
  value: CellItem;
  index: string;
  item: Record<string, string>;
  labelClassName: ClassValue;
}) {
  const isString = typeof value === "string";
  const isStatus = index === "status";
  const isDate = index === "date";
  const isPhone = index === "phone";
  const isEmail = index === "email";
  const Component = value as ActionComponentType;
  const str = value as string;

  return (
    <p className={cn(className, "flex items-center gap-3")}>
      <ShouldRender condition={isString}>
        <span className={cn("hidden", labelClassName)}>{index}: </span>
        <ShouldRender condition={isStatus}>
          <Status state={str} />
        </ShouldRender>
        <ShouldRender condition={isDate}>
          <span className="text-red-100">{str}</span>
        </ShouldRender>
        <ShouldRender condition={isEmail}>
          <a href={`mailto:${str}`} className="underline text-main-blue">
            {str}
          </a>
        </ShouldRender>
        <ShouldRender condition={isPhone}>
          <a href={`tel:${str}`} className="underline text-mid-gray">
            {str}
          </a>
        </ShouldRender>
        <ShouldRender condition={!isDate && !isStatus && !isEmail && !isPhone}>
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