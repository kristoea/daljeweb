from django.conf.urls import url

from .views import MagasinOverview

urlpatterns = [
    url(r'^$',
        MagasinOverview.as_view(),
        name='magasin_overview'),
    ]