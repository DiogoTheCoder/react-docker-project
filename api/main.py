from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)


class Hello(Resource):
    @staticmethod
    def get():
        return {'data': 'Hello 👋🏼'}


api.add_resource(Hello, '/hello')

if __name__ == "__main__":
    app.run(debug=True)
