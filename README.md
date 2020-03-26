# CanaWebPY
CanawebPY provides the data endpoints for the CanaWeb UI, an Angular application used to track expenses and income from growing sugar cane.

The solution is built using:
* MongoDB on Atlas
* Python 3.8.2
* Flask
* Heroku


# Flask - configuration

    Environment Variables:
        FLASK_APP=CanaWebAPI
        FLASK_ENV=development
        CANAWEB_MONGO=mongodb+srv://canauser:<password>@server

    PyCharm config:
        Module Name: flask
        Parameters: run -p 8080
