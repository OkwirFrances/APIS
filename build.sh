#!/bin/bash

# Exit on any error
set -o errexit

export PYTHONPATH="$PYTHONPATH:$PWD/backend"

pip install -r requirements.txt

export DJANGO_SETTINGS_MODULE=backend.settings


# python manage.py makemigrations
python manage.py migrate

python manage.py collectstatic --noinput

# python manage.py runserver 0.0.0.0:8000
