# CanaWebPY
#
# Python 3.7 & Angular8
#

# Create Angular skeleton
ng new canaweb-ui-app --routing=true --style=scss
cd canaweb-ui-app
npm install --save @angular/material @angular/cdk @angular/animations
npm install --save hammerjs

# Static pages
ng g c version-page --skip-tests
ng g c page-not-found --skip-tests

# Mock data service
ng generate service InMemoryData

# Fields Module
ng g m fields/fields --module app --flat --routing
ng g c fields/field-list --skip-tests
ng g c fields/edit-field-dialog --skip-tests
ng g c fields/create-field-dialog --skip-tests
ng g s fields/fields --skip-tests

# Shared
# ng g m core
# ng g s core/services/auth --skip-tests
# ng g s core/services/local-storage --skip-tests

# Build ng
rm templates/*.*
rm static/*.*
cd canaweb-ui-app
ng build --output-path="../static/"
cd ..
cp static/index.html templates/
sed -ie 's/src=\"/src=\"..\/static\//g' templates/index.html

# run Flask
pip3.7 install -r requirements.txt
python main.py

# setup
apt-get update && apt-get upgrade
https://github.com/nodesource/distributions/blob/master/README.md#deb
npm install npm@latest -g
https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
