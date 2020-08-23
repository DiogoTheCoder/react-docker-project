from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)


class Hello(Resource):
    @staticmethod
    def get():
        return {'data': 'Hello 👋'}


api.add_resource(Hello, '/')

if __name__ == "__main__":
    app.run(debug=app.config['DEBUG'], host='0.0.0.0', port=5000)
