import css from './index.module.scss'
import cn from "classnames";
import { FC, ReactNode } from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({subsets: ['latin'], weight: ['300','400','500','700']});

interface LayoutProps {
  children: ReactNode;
}
export const  MainLayout: FC<LayoutProps>=( {children} )=> {
  return <div className={cn(css.main_container,`${roboto.className}` )}>
    {children}
  </div>
}
