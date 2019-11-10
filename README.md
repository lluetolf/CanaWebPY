# CanaWebPY
#
# Python 3.7 & Angular8
#

# Create Angular skeleton
ng new canaweb-ui-app --routing=true --style=scss
cd canaweb-ui-app
ng g m shared
ng g c shared/material --flat --skip-tests --inline-style --inline-template
ng g c shared/toolbar --skip-tests
touch shared/components/index.ts
ng g m core
ng g s core/services/auth --skip-tests
ng g s core/services/local-storage --skip-tests
 
ng g m fields
ng g c fields/sidenav-content --skip-tests
ng g c fields/main-content --skip-tests
ng g c fields/fields-list --skip-tests
ng g c fields/field-edit-dialog --skip-tests
ng g s fields/fields --skip-tests
cd ..

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
