import react from 'react';

const FeatureMovie = ({ item }) => {
  let firstDate = new Date(item.first_air_date);
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  let description = item.overview;
  if (description.length > 200) {
    description = description.substring(0, 200 + '...');
  }
  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured__vertical">
        <div className="featured__horizontal">
          <div className="featured__horizontal__name">{item.original_name}</div>
          <div className="featured__horizontal__info">
            <div className="featured__horizontal__points">
              {item.vote_average} pontos
            </div>
            <div className="featured__horizontal__year">
              {firstDate.getFullYear()}
            </div>
            <div className="featured__horizontal__seasons">
              {item.number_of_seasons} temporada
              {item.number_of_season !== 1 ? 's' : ''}
            </div>
          </div>
          <div className="featured__horizontal__description">
            {item.overview}
          </div>
          <div className="featured__horizontal__buttons">
            <a
              href={`/watch/${item.id}`}
              className="featured__horizontal__buttons__watchbutton"
            >
              ► Assistir
            </a>
            <a
              href={`/list/add/${item.id}`}
              className="featured__horizontal__buttons__mylistbutton"
            >
              + Minha Lista
            </a>
          </div>
          {
            <div className="featured__horizontal__genres">
              Gêneros: <strong> {genres.join(', ')} </strong>
            </div>
          }
        </div>
      </div>
    </section>
  );
};

export default FeatureMovie;
