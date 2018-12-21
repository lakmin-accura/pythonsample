from django.db import models

# Create your models here.

class pages(models.Model):
    page_title = models.CharField(max_length=50)
    page_description = models.CharField(max_length=150)
