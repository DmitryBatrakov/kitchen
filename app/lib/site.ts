// Единый источник правды по контактам и соцсетям студии.
export const site = {
  // TODO(deploy): заменить на реальный домен перед публикацией.
  url: "https://nagar-il.example.com",
  phone: "+972533060739",
  phoneDisplay: "+972 53-306-0739",
  email: "nagar.il@yahoo.com",
  address: "המוסכים 22 חיפה",
  instagram:
    "https://www.instagram.com/nagar.il?igsh=MW1zZTJpeXdtbnJ5NA%3D%3D&utm_source=qr",
  facebook: "https://www.facebook.com/share/1N6U7x8Biw/?mibextid=wwXIfr",
  // Waze deep-link по адресу мастерской.
  waze: "https://waze.com/ul?q=%D7%94%D7%9E%D7%95%D7%A1%D7%9A%D7%99%D7%9D%2022%20%D7%97%D7%99%D7%A4%D7%94&navigate=yes",
  // Встраиваемая карта Google (без API-ключа).
  mapEmbed:
    "https://maps.google.com/maps?q=%D7%94%D7%9E%D7%95%D7%A1%D7%9A%D7%99%D7%9D%2022%20%D7%97%D7%99%D7%A4%D7%94&output=embed",
} as const;

export const telHref = `tel:${site.phone}`;
export const mailHref = `mailto:${site.email}`;
