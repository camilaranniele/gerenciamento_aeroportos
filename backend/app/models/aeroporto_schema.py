from marshmallow import fields

from app.models.aeroporto import AeroportoDataBase
from backend.config import marshmallow, db


class AeroportoDataBaseSchema(marshmallow.SQLAlchemyAutoSchema):
    class Meta:
        model = AeroportoDataBase
        sqla_session = db.session

    id_aeroporto = fields.Number()  # dump_only=True)
    nome_aeroporto = fields.String(required=True)
    codigo_iata = fields.String(required=True)
    cidade = fields.String(required=True)
    codigo_pais_iso = fields.String(required=True)
    latitude = fields.Float(required=True)
    longitude = fields.Float(required=True)
    altitude = fields.Float(required=True)
