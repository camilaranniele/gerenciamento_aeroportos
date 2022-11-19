from flask_restful import Api

from config import app, db
from app.controllers.aeroporto_controller import Aeroporto, ListaAeroporto


api = Api(app)

api.add_resource(ListaAeroporto, '/aeroportos')
api.add_resource(Aeroporto, '/aeroportos/<codigo_iata>')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
