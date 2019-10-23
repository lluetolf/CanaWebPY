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