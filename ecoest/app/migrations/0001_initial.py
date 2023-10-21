# Generated by Django 4.2.3 on 2023-10-20 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Forest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('coords', models.JSONField(blank=True, null=True)),
                ('device_name', models.CharField(blank=True, max_length=100, null=True)),
                ('gas_reading', models.CharField(blank=True, max_length=30, null=True)),
                ('temp_reading', models.CharField(blank=True, max_length=30, null=True)),
                ('humidity_reading', models.CharField(blank=True, max_length=30, null=True)),
            ],
        ),
    ]