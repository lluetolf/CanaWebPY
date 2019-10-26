# CanaWebPY
#
# Build ng
rm templates/*.*
rm static/*.*
cd app/http/web-app
ng build --output-path=../../../static
cd ../../../
mv templates/index.html static/
sed -ie 's/src=\"/src=\"static\//g' templates/index.html

# run Flask
python main.py

# setup
apt-get update && apt-get upgrade
https://github.com/nodesource/distributions/blob/master/README.md#deb
npm install npm@latest -g
https://help.github.com/en/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent
