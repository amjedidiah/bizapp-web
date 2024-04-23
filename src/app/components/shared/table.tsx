import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";
import ShouldRender from "@/components/shared/should-render";
import { ClassValue } from "clsx";
import Button from "@/components/shared/button";
import Status from "@/components/shared/status";

export default function Table({
  columnNames,
  data,
  containerClassName,
  headerClassName,
  cellClassName,
  firstCellClassName,
  ActionComponent,
  pagination,
}: PropsWithChildren<{
  columnNames: string[];
  data: any[];
  containerClassName: ClassValue;
  headerClassName: ClassValue;
  cellClassName: ClassValue;
  firstCellClassName?: ClassValue;
  ActionComponent?: FC;
  pagination?: boolean;
}>) {
  return (
    <div className="text-xs">
      <div
        className={cn(
          "grid max-md:grid-cols-1 md:bg-slate-100 capitalize text-start items-stretch",
          containerClassName
        )}
      >
        {columnNames.map((item) => (
          <p
            className={cn(
              "text-black-100 font-semibold bg-slate-200 flex items-center max-md:hidden",
              headerClassName
            )}
            key={item}
          >
            {item}
          </p>
        ))}
        {data.map((item) => {
          const { id, ...rest } = item;
          const updatedRest = ActionComponent
            ? { ...rest, action: ActionComponent }
            : rest;
          const array = Object.values(updatedRest) as Array<string | FC>;
          const keysArray = Object.keys(updatedRest).map((item) =>
            item.toLowerCase()
          );

          return array.map((Item, i) => {
            // const cellContainerClassName =
            //   i === 0
            //     ? cn(cellClassName, "font-semibold", firstCellClassName)
            //     : (cellClassName as string);
            const cellContainerClassName = cn(
              "border-b border-slate-300 max-md:bg-slate-100 max-md:border-x",
              cellClassName,
              {
                "font-semibold": i === 0,
              },
              i === 0 && firstCellClassName
            );

            return (
              <Table.Cell
                className={cellContainerClassName}
                Item={Item}
                id={id}
                i={i}
                key={id}
                keysArray={keysArray}
              />
            );
          });
        })}
      </div>
      <ShouldRender condition={Boolean(pagination)}>
        <div className="flex justify-center items-center gap-4 lg:gap-6 bg-slate-200 text-black-100 font-semibold py-4 md:py-[22px] max-md:mt-[6px]">
          <p>
            Previous
            <span className="max-md:hidden"> page</span>
          </p>
          <div className="flex item-center gap-2">
            {Array(7)
              .fill(0)
              .map((item, i) => {
                const isActive = i === 0;
                return (
                  <span
                    key={i + 1}
                    className={cn(
                      "w-5 h-5 bg-slate-400 flex items-center justify-center rounded-full",
                      {
                        "max-md:hidden": i >= 4,
                        "bg-yellow": isActive,
                      }
                    )}
                  >
                    {i + 1}
                  </span>
                );
              })}
          </div>
          <p className="text-black-100 font-semibold">
            Next
            <span className="max-md:hidden"> page</span>
          </p>
        </div>
      </ShouldRender>
      <ShouldRender condition={!Boolean(pagination)}>
        <div className="flex justify-center bg-slate-100 pt-[10px]">
          <Button variant="yellow-2" underline>
            View All
          </Button>
        </div>
      </ShouldRender>
    </div>
  );
}

Table.Cell = function TableCell({
  className,
  Item,
  keysArray,
  i,
  id,
}: {
  className: string;
  Item: string | FC;
  keysArray: string[];
  i: number;
  id: string;
}) {
  const isString = typeof Item === "string";
  const isStatus = keysArray[i] === "status";
  const isDate = keysArray[i] === "date";
  const isText = !isDate && !isStatus;

  return (
    <p
      className={cn(className, "max-md:flex items-center gap-3 shadow-sm")}
      key={id}
    >
      <span
        className={cn("md:hidden", {
          hidden: keysArray[i] === "action",
        })}
      >
        {keysArray[i]}:{" "}
      </span>
      <ShouldRender condition={isStatus && isString}>
        <Status key={id} state={Item as string} />
      </ShouldRender>
      <ShouldRender condition={isDate && isString}>
        <span className="text-red-100">{Item as string}</span>
      </ShouldRender>
      <ShouldRender condition={isText && isString}>
        <span>{Item as string}</span>
      </ShouldRender>
      <ShouldRender condition={typeof Item !== "string"}>
        <Item />
      </ShouldRender>
    </p>
  );
};
