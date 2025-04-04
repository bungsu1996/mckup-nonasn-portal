import React from "react";
import { NavLink, Link  } from "react-router";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb"

interface dataBreadCrumbsI {
  link: string;
  title: string;
}

interface BreadcrumbCustomV1Props {
  classLinkCustom?: string;
  classCurrentPageCustom?: string;
  dataBreadcrumbs: Array<dataBreadCrumbsI>;
}

export function BreadcrumbCustomV1({ classLinkCustom, classCurrentPageCustom, dataBreadcrumbs }: BreadcrumbCustomV1Props) {

  return (
    dataBreadcrumbs && dataBreadcrumbs.length ? <Breadcrumb>
      <BreadcrumbList>
        {
          dataBreadcrumbs.map((x, i) => (
            <React.Fragment key={i}>
              <BreadcrumbItem>
                {
                  i == (dataBreadcrumbs.length-1) ? <BreadcrumbPage className={`${classCurrentPageCustom}`}>{x.title}</BreadcrumbPage> : <BreadcrumbLink asChild>
                    <Link to={x.link} className={`${classLinkCustom}`}>{x.title}</Link>
                  </BreadcrumbLink>
                }
              </BreadcrumbItem>
              { i == (dataBreadcrumbs.length-1) ? null : <BreadcrumbSeparator /> }
            </React.Fragment>
          ))
        }
      </BreadcrumbList>
    </Breadcrumb>
     : null
  )
}
