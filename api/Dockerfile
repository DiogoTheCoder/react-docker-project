FROM python:3.8

WORKDIR /api

COPY Pipfile ./
COPY Pipfile.lock ./
COPY requirements.txt ./

RUN pip3 install -r requirements.txt
RUN pipenv install --system --deploy --ignore-pipfile

COPY . .

ENV PORT=5000
EXPOSE $PORT

ENTRYPOINT ["python3"]

CMD ["main.py"]