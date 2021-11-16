// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'http://geocode-maps.yandex.ru/1.x/',
  geocodeYandexApiKey: '07405901-73f6-4c15-878e-821590bb53aa',
  resultCitiesCount: 10,
  format: 'json',
  kind: 'locality',
  openWeatherMapApiKey: '12a9ea170695cc9489a777f1a5c6efd5',
  openWeatherMapURL: 'https://api.openweathermap.org/data/2.5/forecast'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
