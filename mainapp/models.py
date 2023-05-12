from django.db import models

# Create your models here.
class workex(models.Model):
    title=models.CharField(max_length=255)
    timeline=models.CharField(max_length=255)
    
    