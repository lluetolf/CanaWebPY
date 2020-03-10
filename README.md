# CanaWebPY
#
# Python 3.7 & Angular8
#

canaadmin / j43MF5RVZzYnsu1n
db.fields.updateMany( {}, [{ "$set": { lastUpdated: { "$toDate": "$lastUpdated" } }] )

# Create Angular skeleton
ng new canaweb-ui-app --routing=true --style=scss
cd canaweb-ui-app
npm install --save @angular/material @angular/cdk @angular/animations @angular/material-moment-adapter
npm install --save hammerjs
npm install --save moment
npm install --save  date-fns
npm install angular-in-memory-web-api --save

ng add @angular/material

# Static pages
ng g c version-page --skip-tests
ng g c page-not-found --skip-tests

#Dashboard
ng g c dashboard --skip-tests

# Model
ng g class model/Field --skipTests

# Mock data service
ng generate service InMemoryData

# Fields Module
ng g m fields/fields --module app --flat --routing
ng g c fields/field-list --skip-tests
ng g c fields/edit-field-dialog --skip-tests
ng g c fields/create-field-dialog --skip-tests
ng g s fields/fields --skip-tests

# Payable Module
ng g m payable/payables --module app --flat --routing
ng g c payable/payable-list --skip-tests
ng g c payable/edit-payable --skip-tests
ng g c payable/create-payable --skip-tests
ng g s payable/payables --skip-tests

# Shared
ng g m shared/material --flat
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
