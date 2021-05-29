import { truncateString } from '../../../helpers'
import { StarringRolesProps } from '../../../libs/types/organisms'
import { Container, RolesList, Artist, Overlay } from './styles'

const StarringRoles: React.FC<StarringRolesProps> = ({ data }) => (
  <Container>
    <h2>Starring Roles</h2>
    <RolesList>
      {data.map((cast) => {
        if (!cast.profile_path) return null

        return (
          <Artist key={cast.id} imagePath={cast.profile_path}>
            <Overlay>
              <p>{truncateString(cast.name, 28)}</p>
              <p>{truncateString(cast.character, 28)}</p>
            </Overlay>
          </Artist>
        )
      })}
    </RolesList>
  </Container>
)

export default StarringRoles
