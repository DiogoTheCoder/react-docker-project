FROM python:3.8

WORKDIR /api

COPY . ./

RUN pip3 install -r requirements.txt

RUN pipenv install --system --deploy --ignore-pipfile

ENTRYPOINT ["python3"]

CMD ["main.py"]