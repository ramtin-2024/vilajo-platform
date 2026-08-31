from django.db import models
from django.core.validators import MinValueValidator

# ==================================================
#     Key Accommodation Information
# ==================================================


class Property(models.Model):
    PROPERTY_TYPE_CHOICES = [
        ("villa", "ویلا"),
        ("cottage", "کلبه"),
        ("apartment", "آپارتمان"),
        ("suite", "سوئیت"),
        ("house", "خانه"),
        ("eco_lodge", "بوم‌گردی"),
    ]

    # Identity
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=150, verbose_name="عنوان")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")
    description = models.TextField(verbose_name="توضیحات")
    property_type = models.CharField(
        max_length=20, choices=PROPERTY_TYPE_CHOICES, verbose_name="نوع ملک"
    )

    # Capacity & Physical Information
    max_guests = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], verbose_name="تعداد مهمان"
    )
    bedrooms = models.PositiveIntegerField(
        validators=[MinValueValidator(1)], verbose_name="تعداد اتاق "
    )
    beds = models.PositiveIntegerField(verbose_name="تعداد تخت")
    bathrooms = models.PositiveIntegerField(default=1, verbose_name="تعداد حمام")
    building_area = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name="مساحت ساختمان"
    )
    land_area = models.DecimalField(
        max_digits=10, decimal_places=2, verbose_name="مساحت زمین"
    )
    floor = models.IntegerField(default=1, verbose_name="طبقه")

    # Ownership
    # owner =

    # Status
    STATUS_CHOICES = [
        ("draft", "پیش نویس"),
        ("pending_review", "در انتظار برسی"),
        ("published", "منتشر شده"),
        ("rejected", "رد شده"),
        ("paused", "متوقف شده"),
        ("suspended", "تعلیق شده"),
        ("archived", "بایگانی شده"),
    ]

    VERIFICATION_STATUS = [
        ("unverified", "تاییدنشده"),
        ("pending", "در انتظار بررسی"),
        ("verified", "تاییدشده"),
        ("rejected", "ردشده"),
    ]

    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default="draft",
        verbose_name="وضعیت اقامتگاه",
    )
    verification_status = models.CharField(
        max_length=30,
        choices=VERIFICATION_STATUS,
        default="unverified",
        verbose_name="وضعیت تایید بازرس",
    )

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ثبت")
    updated_at = models.DateTimeField(
        auto_now_add=True, verbose_name="تاریخ آخرین بروزرسانی"
    )
    published_at = models.DateTimeField(
        null=True, blank=True, verbose_name="تاریخ انتشار "
    )

    def __str__(self):
        return self.title


# ===================================================
#                   Location
# ===================================================
class Country(models.Model):
    # Identity
    name = models.CharField(max_length=60, verbose_name="نام کشور")
    code = models.CharField(max_length=6, verbose_name="کد کشور")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")


class Province(models.Model):
    # Relationship
    country = models.ForeignKey(
        Country, on_delete=models.CASCADE, related_name="provinces", verbose_name="کشور"
    )
    # Identity
    name = models.CharField(max_length=25, verbose_name="نام استان")
    code = models.CharField(max_length=6, verbose_name="کد استان")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")


class County(models.Model):
    # Relationship
    province = models.ForeignKey(
        Province,
        on_delete=models.CASCADE,
        related_name="counties",
        verbose_name="استان",
    )
    # Identity
    name = models.CharField(max_length=20, verbose_name="نام شهرستان")
    code = models.CharField(max_length=6, verbose_name="کد شهرستان")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")


class District(models.Model):
    # Relationship
    county = models.ForeignKey(
        County,
        on_delete=models.CASCADE,
        related_name="rural_districts",
        verbose_name="شهرستان",
    )
    # Identity
    name = models.CharField(max_length=35, verbose_name="نام بخش")
    code = models.CharField(max_length=6, verbose_name="کد بخش")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")


class RuralDistrict(models.Model):
    # Relationship
    district = models.ForeignKey(
        District,
        on_delete=models.CASCADE,
        related_name="ruraldistricts",
        verbose_name="بخش",
    )
    # Identity
    name = models.CharField(max_length=50, verbose_name="نام دهستان")
    code = models.CharField(max_length=6, verbose_name="کد دهستان")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")


class City(models.Model):
    # Relationship
    province = models.ForeignKey(
        Province, on_delete=models.CASCADE, related_name="cities", verbose_name="استان"
    )
    county = models.ForeignKey(
        County, on_delete=models.CASCADE, related_name="cities", verbose_name="شهرستان"
    )
    district = models.ForeignKey(
        District, on_delete=models.CASCADE, related_name="cities", verbose_name="بخش"
    )
    # Identity
    name = models.CharField(max_length=50, verbose_name="نام شهر")
    code = models.CharField(max_length=6, verbose_name="کد شهر")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")


class PropertyLocation(models.Model):
    # Relationship
    property_obj = models.OneToOneField(
        Property,
        on_delete=models.CASCADE,
        related_name="location",
        verbose_name="موقعیت مکانی",
    )
    country = models.ForeignKey(
        Country,
        on_delete=models.CASCADE,
        related_name="properties",
        verbose_name="کشور",
    )
    province = models.ForeignKey(
        Province,
        on_delete=models.CASCADE,
        related_name="properties",
        verbose_name="استان",
    )
    county = models.ForeignKey(
        County,
        on_delete=models.CASCADE,
        related_name="properties",
        verbose_name="شهرستان",
    )
    district = models.ForeignKey(
        District,
        on_delete=models.CASCADE,
        related_name="properties",
        verbose_name="بخش",
    )
    rural_district = models.ForeignKey(
        RuralDistrict,
        on_delete=models.CASCADE,
        related_name="properties",
        verbose_name="دهستان",
    )
    city = models.ForeignKey(
        City, on_delete=models.CASCADE, related_name="properties", verbose_name="شهر"
    )
    # Address
    address = models.CharField(
        max_length=350, null=True, blank=True, verbose_name="آدرس تکمیلی"
    )
    postal_code = models.CharField(max_length=10, verbose_name="کد پستی")

    # Geographic Coordinates
    latitude = models.DecimalField(
        max_digits=9, decimal_places=6, verbose_name="عرض جغرافیایی"
    )
    longitude = models.DecimalField(
        max_digits=9, decimal_places=6, verbose_name="طول جغرافیایی"
    )


# ==================================================
#                       Images
# ==================================================


class PropertyImage(models.Model):

    # Relationship
    propertyimg = models.ForeignKey(
        Property,
        on_delete=models.CASCADE,
        related_name="images",
        verbose_name="اقامتگاه",
    )

    # Image
    image = models.ImageField(upload_to="properties/images/", verbose_name="تصویر")
    alt_text = models.CharField(max_length=255, blank=True, verbose_name="متن جایگزین")

    # Display
    is_cover = models.BooleanField(default=False, verbose_name="تصویر اصلی")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")

    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ثبت")
    updated_at = models.DateTimeField(
        auto_now_add=True, verbose_name="تاریخ اخرین بروزرسانی"
    )

    def __str__(self):
        return f"{self.Property.title} - {self.order}"
