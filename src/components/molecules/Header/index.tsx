import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { ICONS } from '../../../constants'
import { useTheme } from '../../../hooks'
import { Logo, BackActionIcon, FlexOffset } from '../../atoms'
import { Container, GroupActions, ThemeSwitch } from './styles'

const Header: React.FC<{ withBackAction?: boolean }> = ({ withBackAction }) => {
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  const handleNavigatePerfil = useCallback(() => {
    router.push('/perfil')
  }, [router])

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleLogout = useCallback(() => {}, [])

  return (
    <Container>
      {withBackAction && <BackActionIcon />}

      <Logo size={68} />

      <GroupActions>
        <ThemeSwitch>
          <label>Light mode?</label>
          <div onClick={() => toggleTheme()}>
            {theme.name === 'light' && <FlexOffset />}
            <div />
          </div>
        </ThemeSwitch>

        <ICONS.MD.MdPersonOutline
          color={theme.colors.primary}
          size={36}
          onClick={handleNavigatePerfil}
        />

        <ICONS.IO.IoLogOutOutline color={theme.colors.secondary} size={32} onClick={handleLogout} />
      </GroupActions>
    </Container>
  )
}

export default Header
