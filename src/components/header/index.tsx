import css from './index.module.scss'
import logo from "../../../public/assets/logo.svg";
import Image from 'next/image'
import { Button } from "@/components/button";
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
            <Button text={'Sign up'} variant={'primary'}/>
            <Button text={'Log in'} variant={'secondary'}/>
        </div>
    </header>
  );
}
