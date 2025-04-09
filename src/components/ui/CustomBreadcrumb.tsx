"use client";
import { Breadcrumb } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomBreadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const breadcrumbItems = [
    {
      title: (
        <Link href="/" className="!text-blue-500 font-medium text-md">
          Home
        </Link>
      ),
    },
    ...pathSegments.map((segment, index) => {
      const path = "/" + pathSegments.slice(0, index + 1).join("/");
      const isLast = index === pathSegments.length - 1;
      return {
        title: isLast ? (
          <span>{segment}</span>
        ) : (
          <Link href={path} className="!text-blue-500 font-medium text-md">
            {segment}
          </Link>
        ),
      };
    }),
  ];

  return (
    <div className="bg-transparent py-2 rounded-md">
      <Breadcrumb
        items={breadcrumbItems}
        className=" px-10 mt-2 "
       
      />
    </div>
  );
};

export default CustomBreadcrumb;
