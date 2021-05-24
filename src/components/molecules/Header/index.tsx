import { useCallback } from "react";
import { useHistory } from "react-router";
import { ICONS } from "../../../constants";
import { useTheme } from "../../../hooks";
import { Logo, BackActionIcon, FlexOffset } from "../../atoms";
import { Container, GroupActions, ThemeSwitch } from "./styles";

const Header: React.FC<{ withBackAction?: boolean }> = ({ withBackAction }) => {
  const { theme, toggleTheme } = useTheme();
  const history = useHistory();

  const handleNavigatePerfil = useCallback(() => {
    history.push("perfil");
  }, [history]);

  const handleLogout = useCallback(() => {
    console.log("Logout!");
  }, []);

  return (
    <Container>
      {withBackAction && <BackActionIcon />}

      <Logo size={68} />

      <GroupActions>
        <ThemeSwitch>
          <label>Light mode?</label>
          <div onClick={() => toggleTheme()}>
            {theme.name === "light" && <FlexOffset />}
            <div />
          </div>
        </ThemeSwitch>

        <ICONS.MD.MdPersonOutline
          color={theme.colors.primary}
          size={36}
          onClick={handleNavigatePerfil}
        />

        <ICONS.IO.IoLogOutOutline
          color={theme.colors.secondary}
          size={32}
          onClick={handleLogout}
        />
      </GroupActions>
    </Container>
  );
};

export default Header;
