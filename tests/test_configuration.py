from unittest import TestCase

from CanaWebAPI import create_app

app = create_app()


class TestTestingConfig(TestCase):
    def test_app_is_testing(self):
        self.assertTrue(app.config['SECRET_KEY'] == 'my_precious')
        self.assertTrue(app.config['DEBUG'])
        self.assertTrue(app.config['TESTING'])
