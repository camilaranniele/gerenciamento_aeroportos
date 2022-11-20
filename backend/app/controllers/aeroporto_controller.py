from flask_restful import reqparse, Api, Resource, fields

from app.models.aeroporto import AeroportoDataBase
from app.models.aeroporto_schema import AeroportoDataBaseSchema
from config import db

parser = reqparse.RequestParser()
parser.add_argument('id_aeroporto', type=int,
                    help='identificador do aeroporto')
parser.add_argument('nome_aeroporto', type=str, help='nome do aeroporto')
parser.add_argument('codigo_iata', type=str, help='codigo iata')
parser.add_argument('cidade', type=str, help='cidade')
parser.add_argument('codigo_pais_iso', type=str, help='codigo pais iso')
parser.add_argument('latitude', type=float, help='latitude')
parser.add_argument('longitude', type=float, help='longitude')
parser.add_argument('altitude', type=float, help='altitude')


class Aeroporto(Resource):
    def get(self, codigo_iata):
        aeroporto = AeroportoDataBase.query.filter_by(
            codigo_iata=codigo_iata.upper()).first()
        aeroporto_schema = AeroportoDataBaseSchema()
        resp = aeroporto_schema.dump(aeroporto)
        return  resp, 200

    def delete(self, codigo_iata):
        aeroporto = AeroportoDataBase.query.filter_by(
            codigo_iata=codigo_iata).first()
        db.session.delete(aeroporto)
        db.session.commit()
        return 'Aeroporto deletado', 204

    def put(self, codigo_iata):
        aeroporto_json = parser.parse_args()
        aeroporto = AeroportoDataBase.query.filter_by(
            codigo_iata=codigo_iata).first()

        aeroporto.nome_aeroporto = aeroporto_json.nome_aeroporto
        aeroporto.codigo_iata = aeroporto_json.codigo_iata
        aeroporto.cidade = aeroporto_json.cidade
        aeroporto.codigo_pais_iso = aeroporto_json.codigo_pais_iso
        aeroporto.latitude = aeroporto_json.latitude
        aeroporto.longitude = aeroporto_json.longitude
        aeroporto.altitude = aeroporto_json.altitude

        db.session.add(aeroporto)
        db.session.commit()

        aeroporto_schema = AeroportoDataBaseSchema(
            only=['id_aeroporto', 'nome_aeroporto', 'codigo_iata', 'cidade', 'codigo_pais_iso', 'latitude', 'longitude', 'altitude'])
        resp = aeroporto_schema.dump(aeroporto)

        return  resp, 200


class ListaAeroporto(Resource):
    def get(self):
        aeroportos = AeroportoDataBase.query.all()
        aeroporto_schema = AeroportoDataBaseSchema(many=True)
        resp = aeroporto_schema.dump(aeroportos)
        return resp, 200

    def post(self):
        aeroporto_json = parser.parse_args()
        aeroporto_schema = AeroportoDataBaseSchema()
        aeroporto = aeroporto_schema.load(aeroporto_json)
        aeroportoDataBase = AeroportoDataBase(
            aeroporto["nome_aeroporto"], aeroporto["codigo_iata"],
            aeroporto["cidade"], aeroporto["codigo_pais_iso"],
            aeroporto["latitude"], aeroporto["longitude"], aeroporto["altitude"]
        )
        resp = aeroporto_schema.dump(aeroportoDataBase.create())
        return resp, 201
