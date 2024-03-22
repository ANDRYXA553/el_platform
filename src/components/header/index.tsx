import css from './index.module.scss'
import logo from "../../../public/assets/logo.svg";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import classNames from "classnames";

export const Header = () => {
  return (
    <header className={classNames(css.header)}>
        <Image
            priority
            src={logo}
            alt="logo"
        />

        <div className={classNames(css.buttons)}>
            <Button variant={'default'}>Sign up</Button>
            <Button variant={'outline'}>Log in</Button>
        </div>
    </header>
  );
}
