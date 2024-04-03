select count("cityId") as "numberOfCities",
      "countries"."name" as "country"
      from "cities"
      join "countries" using ("countryId")
      group by "countryId";
