from config import db


class AeroportoDataBase(db.Model):
    __tablename__ = "Aeroporto"
    id_aeroporto = db.Column(db.Integer, primary_key=True)
    nome_aeroporto = db.Column(db.String(256), nullable=False)
    codigo_iata = db.Column(db.String(3), nullable=False)
    cidade = db.Column(db.String(256), nullable=False)
    codigo_pais_iso = db.Column(db.String(2), nullable=False)
    latitude = db.Column(db.Numeric(precision=10, scale=2), nullable=False)
    longitude = db.Column(db.Numeric(precision=10, scale=2), nullable=False)
    altitude = db.Column(db.Numeric(precision=10, scale=2), nullable=False)

    def __init__(self, nome_aeroporto, codigo_iata, cidade, codigo_pais_iso, latitude, longitude, altitude):
        self.nome_aeroporto = nome_aeroporto
        self.codigo_iata = codigo_iata
        self.cidade = cidade
        self.codigo_pais_iso = codigo_pais_iso
        self.latitude = latitude
        self.longitude = longitude
        self.altitude = altitude

    def create(self):
        db.session.add(self)
        db.session.commit()
        return self

    def __repr__(self):
        return f"{self.id_aeroporto, self.nome_aeroporto, self.codigo_iata, self.cidade, self.codigo_pais_iso, self.latitude, self.longitude, self.altitude}"
