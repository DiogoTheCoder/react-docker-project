from flask import Flask
from flask_restful import Api, Resource
import os

app = Flask(__name__)
api = Api(app)


class Hello(Resource):
    @staticmethod
    def get():
        return {'data': 'https://github.com/DiogoTheCoder'}


api.add_resource(Hello, '/', '/hello')

if __name__ == "__main__":
    port = os.getenv('PORT', 5000)
    ip = os.getenv('IP', '0.0.0.0')
    app.run(debug=app.config['DEBUG'], host=ip, port=port)
