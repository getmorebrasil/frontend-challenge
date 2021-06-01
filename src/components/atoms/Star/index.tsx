import { useCallback, useMemo } from 'react'
import { IMAGES } from '../../../constants'
import { StarProps } from '../../../libs/types/atoms'

const Star: React.FC<StarProps> = ({ type }) => {
  const getStarByType = useCallback(() => {
    if (type === 'full') return IMAGES.fullStar
    if (type === 'half') return IMAGES.halfStar

    return IMAGES.star
  }, [type])

  const starByType = useMemo(() => {
    const result = getStarByType()

    return result
  }, [getStarByType])

  return <img src={starByType} alt="Estrela de classificação" />
}

export default Star
