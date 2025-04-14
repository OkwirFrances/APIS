#!/bin/bash

# Exit on any error
set -o errexit

pip install -r requirements.txt


# python manage.py makemigrations
python manage.py migrate

python manage.py collectstatic --noinput

# python manage.py runserver 0.0.0.0:8000
