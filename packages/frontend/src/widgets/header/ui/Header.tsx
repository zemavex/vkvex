import { UserMenu } from "@/features/user-menu";
import { selectAuthState } from "@/entities/user";
import { ThemeSwitcher } from "@/shared/theme";
import { LangSwitcher } from "@/shared/ui/lang-switcher";
import { AppLink } from "@/shared/ui/app-link";
import { useAppSelector } from "@/shared/lib/redux";
import { ROUTES } from "@/shared/config";
import House from "../assets/house.svg";
import cls from "./Header.module.scss";

export const Header = () => {
  const authState = useAppSelector(selectAuthState);

  return (
    <div className={cls.header__wrap}>
      <header className={`${cls.header} container`}>
        <ul className={cls.header__menu}>
          <li
            className={`${cls["header__menu-item"]} ${cls["header__menu-item-logo"]}`}
          >
            <AppLink
              to={ROUTES.HOME}
              className={cls["header__logo"]}
              color="text"
            >
              <House />
            </AppLink>
          </li>
          <li className={cls["header__menu-item"]}>
            <LangSwitcher />
          </li>
          <li className={cls["header__menu-item"]}>
            <ThemeSwitcher
              dropdownPlacement="bottom-end"
              dropdownOffset={{ y: 10 }}
            />
          </li>
          {authState === "authenticated" && (
            <li className={cls["header__menu-item"]}>
              <UserMenu />
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};
