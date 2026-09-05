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
    toilets = models.PositiveIntegerField(
        default=1, verbose_name="تعداد سرویس بهداشتی "
    )
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
#                       Amenity
# ==================================================
class Category(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=200, verbose_name="نام طبقه بندی")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")
    is_active = models.BooleanField(default=False, verbose_name="وضعیت")


class Amenity(models.Model):
    # Relationship
    property_obj = models.ManyToManyField(
        Property, related_name="amenities", verbose_name="اقامتگاه‌ها"
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        related_name="amenities",
        verbose_name="طبقه بندی ",
    )

    # Identity
    name = models.CharField(max_length=50, verbose_name="نام امکانات رفاهی")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")

    # Status
    is_active = models.BooleanField(default=False, verbose_name="وضعیت")


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


# ===================================================
#                Laws and regulations
# ===================================================
GENERAL_RULE_CHOICES = [
    ("party", "مهمانی"),
    ("smoking", "سیگار"),
    ("pets", "حیوانات خانگی"),
    ("quiet_hours", "ساعات سکوت"),
    ("check_in", "ورود"),
    ("check_out", "خروج"),
    ("extra_guests", "مهمان اضافه"),
    ("visitors", "مراجعه‌کننده"),
    ("age_restriction", "محدودیت سنی"),
    ("filming", "فیلم‌برداری و عکاسی"),
    ("event", "برگزاری مراسم"),
]


class PropertyRule(models.Model):
    # Identity
    id = models.BigAutoField(primary_key=True)

    # Relations
    propertyy = models.ForeignKey(
        Property, on_delete=models.CASCADE, related_name="rules", verbose_name="ملک"
    )
    amenity = models.ForeignKey(
        Amenity,
        on_delete=models.CASCADE,
        related_name="rules",
        null=True,
        blank=True,
        verbose_name="امکانات",
    )

    # Classification
    rule_key = models.CharField(
        max_length=50,
        choices=GENERAL_RULE_CHOICES,
        verbose_name="",
    )


class PermissionRule(models.Model):
    # Relation
    rule = models.OneToOneField(
        PropertyRule,
        on_delete=models.CASCADE,
        related_name="permission",
        verbose_name="قانون",
    )

    # Value
    allowed = models.BooleanField(default=False, verbose_name="مجوز")


class TimeRule(models.Model):

    # Relation
    rule = models.OneToOneField(
        PropertyRule,
        on_delete=models.CASCADE,
        related_name="time",
        verbose_name="قانون",
    )

    # Time
    start_time = models.TimeField()
    end_time = models.TimeField()


class QuantityRule(models.Model):

    # Relation
    rule = models.OneToOneField(
        PropertyRule,
        on_delete=models.CASCADE,
        related_name="quantity",
        verbose_name="قانون",
    )

    # Value
    value = models.PositiveIntegerField(
        null=True, blank=True, verbose_name="تعداد مجاز"
    )


# ===================================================
#               Cancellation Policies
# ===================================================


class CancellationPolicy(models.Model):

    # Relations
    property_obj = models.ForeignKey(
        Property,
        on_delete=models.CASCADE,
        related_name="cancellation_policies",
        verbose_name="اقامتگاه",
    )

    # Identity & Basic Information
    title = models.CharField(max_length=350, verbose_name="عنوان سیاست")
    slug = models.SlugField(unique=True, verbose_name="اسلاگ")
    description = models.TextField(verbose_name="توضیحات تکمیلی")

    # Status & Timestamps
    is_active = models.BooleanField(default=False, verbose_name="وضعیت فعالیت")

    # Timestamps
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="تاریخ و زمان ثبت"
    )
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name="تاریخ و زمان آخرین بروزرسانی"
    )


class CancellationRule(models.Model):
    # Relation
    policy = models.ForeignKey(
        CancellationPolicy,
        on_delete=models.CASCADE,
        related_name="rules",
        verbose_name="سیاست لغو",
    )

    # Conditions
    hours_before_checkin = models.PositiveIntegerField(
        verbose_name="تعداد ساعت های باقی مانده"
    )
    hours_before_checkin_max = models.PositiveIntegerField(
        null=True, blank=True, verbose_name="حداکثر ساعت باقی مانده "
    )
    # Values
    refund_percentage = models.DecimalField(
        max_digits=4, decimal_places=2, verbose_name="درصد بازگشت وجه"
    )

    # Additional Rules
    charge_first_night = models.BooleanField(
        default=False, verbose_name="کسر هزینه شب اول"
    )

    # Display & Ordering
    note = models.CharField(
        max_length=1000, verbose_name="توضیحات کوتاه برای نمایش در فاکتور"
    )

    priority = models.PositiveIntegerField(verbose_name="ترتیب برسی قانون")


# ====================================================
#         Accommodation Verification Status
# ====================================================
VERIFICATION_STATUS = [
    ("pending", "در انتظار بررسی"),
    ("approved", "تایید شده"),
    ("rejected", "رد شده"),
]


class PropertyVerification(models.Model):
    # Relation
    propertyy = models.OneToOneField(
        Property,
        on_delete=models.CASCADE,
        related_name="verification",
        verbose_name="اقامتگاه",
    )

    # Verification Status
    status = models.CharField(
        max_length=20, choices=VERIFICATION_STATUS, verbose_name=""
    )

    # Verification Information
    verified_at = models.DateTimeField(
        null=True, blank=True, verbose_name="تاریخ و زمان تأیید"
    )
    # verified_by = models.ForeignKey()

    # Rejection
    rejection_reason = models.TextField(
        max_length=1000, null=True, blank=True, verbose_name="دلیل رد "
    )

    # Notes
    admin_note = models.TextField(
        max_length=1000, null=True, blank=True, verbose_name="یادداشت مدیر"
    )

    # Timestamps
    created_at = models.DateTimeField(
        auto_now_add=True, verbose_name="تاریخ و زمان ثبت"
    )
    updated_at = models.DateTimeField(
        auto_now=True, verbose_name="تاریخ و زمان آخرین بروزرسانی"
    )
