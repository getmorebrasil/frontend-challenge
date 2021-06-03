import { memo, useMemo } from 'react'
import { truncateString } from '../../../helpers'
import { StarringRolesProps } from '../../../libs/types/organisms'
import { Container, RolesList, Artist, Overlay } from './styles'

const StarringRoles: React.FC<StarringRolesProps> = ({ data }) => {
  const formattedData = useMemo(() => {
    const result = data.map((cast) => {
      return {
        ...cast,
        name: truncateString(cast.name, 28),
        character: truncateString(cast.character, 28),
      }
    })

    return result
  }, [data])

  return (
    <Container>
      <h2>Starring Roles</h2>
      <RolesList>
        {formattedData.map((cast) => {
          if (!cast.profile_path) return null

          return (
            <Artist key={cast.id} imagePath={cast.profile_path}>
              <Overlay>
                <p>{cast.name}</p>
                <p>{cast.character}</p>
              </Overlay>
            </Artist>
          )
        })}
      </RolesList>
    </Container>
  )
}

export default memo(StarringRoles, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data)
})
