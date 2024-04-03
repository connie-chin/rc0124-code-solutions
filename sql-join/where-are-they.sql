select "addresses"."line1" as "address",
        "cities"."name" as "city",
        "addresses"."district" as "district"
    from "addresses"
    join "cities" using ("cityId");
