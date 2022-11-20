export default function AirportDetails(props) {
  const { airport } = props;

  return (
    <div className="details">
      <p className="info">
        <b>Nome: </b>
        {airport.nome_aeroporto}
      </p>
      <p className="info">
        <b>Código IATA: </b>
        {airport.codigo_iata}
      </p>
      <p className="info">
        <b>Cidade: </b>
        {airport.cidade}
      </p>
      <p className="info">
        <b>Código do país: </b>
        {airport.codigo_pais_iso}
      </p>
      <p className="local">
        <b>Longitude: </b>
        {airport.longitude}
      </p>
      <p className="local">
        <b>Latitude: </b>
        {airport.latitude}
      </p>
      <p className="local">
        <b>Altitude: </b>
        {airport.altitude}
      </p>
    </div>
  );
}
