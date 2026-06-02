from django.db import models
from organizations.models import Organization


class DataSource(models.Model):

    SOURCE_TYPES = [
        ('SAP', 'SAP'),
        ('UTILITY', 'Utility'),
        ('TRAVEL', 'Travel'),
    ]

    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('PROCESSING', 'Processing'),
        ('COMPLETED', 'Completed'),
        ('FAILED', 'Failed'),
    ]

    organization = models.ForeignKey(
        Organization,
        on_delete=models.CASCADE
    )

    source_type = models.CharField(
        max_length=50,
        choices=SOURCE_TYPES
    )

    file_name = models.CharField(
        max_length=255
    )

    uploaded_at = models.DateTimeField(
        auto_now_add=True
    )

    status = models.CharField(
        max_length=50,
        choices=STATUS_CHOICES,
        default='PENDING'
    )

    def __str__(self):
        return f"{self.organization.name} - {self.source_type}"


class RawRecord(models.Model):

    PROCESSING_STATUS = [
        ('VALID', 'Valid'),
        ('INVALID', 'Invalid'),
        ('REVIEW', 'Needs Review'),
    ]

    REVIEW_STATUS = [
        ('PENDING', 'Pending'),
        ('APPROVED', 'Approved'),
        ('FLAGGED', 'Flagged'),
    ]

    source = models.ForeignKey(
        DataSource,
        on_delete=models.CASCADE,
        related_name='records'
    )

    raw_payload = models.JSONField()

    processing_status = models.CharField(
        max_length=50,
        choices=PROCESSING_STATUS,
        default='VALID'
    )

    review_status = models.CharField(
        max_length=20,
        choices=REVIEW_STATUS,
        default='PENDING'
    )

    error_message = models.TextField(
        blank=True,
        null=True
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"Record {self.id}"