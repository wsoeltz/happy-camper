# Generated by Django 3.0.8 on 2020-07-31 01:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('campgrounds', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reservation',
            name='date',
            field=models.DateField(),
        ),
    ]
