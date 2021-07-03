'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e2db95e1858437803814614504c383ef",
"index.html": "49b175a5502568ae95febd9c8b9631f2",
"/": "49b175a5502568ae95febd9c8b9631f2",
"main.dart.js": "fc69eaf167e0a206ee5a6a959b7f2466",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5b4af028eebb6b27744eb5c81ae7b82e",
"assets/eventImages/suuret.png": "35b5a8e324d87cd9fe70cea941f8113c",
"assets/eventImages/turnajaiset.jpeg": "911f0e530d07ab6757ee7a3f12e8d71e",
"assets/eventImages/kirja.jpeg": "d1cd315a529c0bf144fa35513f6b2e1e",
"assets/eventImages/musiikki.jpeg": "3635b34384bb1368850065faa9bf7026",
"assets/eventImages/swan.png": "441b1e085d9f7fd792e2da89309e9939",
"assets/eventImages/keskiaika.jpeg": "e0036fe5b5ef8b094bf6a11a1c928792",
"assets/eventImages/jazz.jpeg": "d308963bb035a3492390cfa432afc172",
"assets/eventImages/rauha.jpeg": "1a15ec06854632ae8261670d339d1be0",
"assets/eventImages/luonto.jpeg": "4ee82f97cfb3179982ae3b3f2d53b62a",
"assets/eventImages/aurafest.jpeg": "a8481fa767b1c971fcde307eac9bfa8d",
"assets/eventImages/olfest.png": "717d879e2c83e21cb40f45f403f00d66",
"assets/eventImages/itameri.png": "c2b412db3dd6b8d132e47701641ec6a7",
"assets/eventImages/taff.jpeg": "16aff89ee964bf11446d47383a65fa7a",
"assets/eventImages/lieve.png": "378fd0d99874cbd7f2dc69d74f2b9c2f",
"assets/eventImages/ladies.png": "ede2f81c91922dc0d61af8dd72453e36",
"assets/eventImages/vegania.jpeg": "405295e1a176a2ef3061702d53b99fc5",
"assets/eventImages/taiteiden.jpeg": "84f5dac4812761f66169c8519eb90425",
"assets/eventImages/placeholderimage.png": "12bb53c0b5ac82abd332cecd5e86c2d4",
"assets/images/aikataulutbutton.png": "ea7e77c2bd2a2694f69052e17f10fd8d",
"assets/images/boatright.png": "0e676911df483c7642dcc7acef899acf",
"assets/images/PointOfInterest.png": "8fd68b05ef66f3e8bf731373ab68cb85",
"assets/images/aurajoki.png": "b8f68116ba8d6c8525cb49c684cb5bfb",
"assets/images/tapahtumatbutton.png": "d03fe135c8129554887ab87d7e96611d",
"assets/images/buss.png": "5df72e17c58f567ecdab50f210683e7b",
"assets/images/testimage.png": "12bb53c0b5ac82abd332cecd5e86c2d4",
"assets/images/mapIcon.png": "cb2f7c6c1cc1feb013038709bd0ae6a8",
"assets/images/turku.jpg": "8cb419ad4083c52898a2f837b7bb2728",
"assets/images/turkulogo.png": "f53b60504d232c451ec2051f0de896b6",
"assets/images/map_location_selected.png": "ad21dcdf7b32cd892996ce06ab563f65",
"assets/images/turkuabo.png": "0ef808a35ea426b54c52e6de37499f55",
"assets/images/boatleft.png": "04f940a994a6f75bf0b555a70d21986d",
"assets/images/cancel.png": "16610dc203fefab36959b07cc13e5b1a",
"assets/images/Restaurant.png": "dba56ed2eaf1515e037e6581527ed893",
"assets/images/tapahtumat.png": "cf1bfd0f65444b15d12595d0a13a02f8",
"assets/images/rightarrow.png": "ae686aece76ec5f9c5810b18c39d890a",
"assets/images/aikataulut.png": "13576eddeeb01d7fec218e90f422b106",
"assets/images/karttaturku.png": "e8a776d6106c73217a7ed8d464a849ea",
"assets/images/karttaturku.jpg": "6e526320ec043f5b07a5e649f9a38fac",
"assets/images/background.jpg": "0c3a24672ce925af53550e319a496089",
"assets/images/selected.png": "cc900b2e67716935174777f3547bccb2",
"assets/images/nahtavyydetbutton.png": "055ac4f590da8f9fcc3d9b80039ff0be",
"assets/images/Parking.png": "9b00afc9de54e2511094d44910473f06",
"assets/images/nahtavyydet.png": "fc3eed4eddf6a8598875e2e5269d69a1",
"assets/images/upArrow.png": "35e33dbb160b63ef6d9cf5d09b6f3a1b",
"assets/images/YouAreHere.png": "bd3ed4cedf2208db8ca59246a50eb181",
"assets/images/selectbutton.png": "94967968b9d49468405ef5ee645937a3",
"assets/images/nahtavyys.png": "2998b794075bf800d64eb3624ff41115",
"assets/images/langSelect.png": "1802079cb72e7845b9adf68fd31c4eba",
"assets/images/turkumap.png": "65e734a1dd63fb132a8b44246d9f8207",
"assets/images/saaristokartta.png": "2de00352e2ecc16b9865b266ac6542b7",
"assets/images/downArrow.png": "9496971b65582625a5fde071bfaf416f",
"assets/images/Marker.png": "7a00e65cb15d4335b62f2576512fddc8",
"assets/AssetManifest.json": "7091c6a5912feb4dc5451008fd99d78a",
"assets/NOTICES": "3067bc58165949929ebc4feeffbdedda",
"assets/FontManifest.json": "db0038bb19c72c9021f21ac0c05edbe0",
"assets/appdata/bus.json": "7b1f90408279c3a50498108ea0ce5353",
"assets/appdata/events.json": "733692613763dbd485a1fe9af0b49f96",
"assets/appdata/eventsfamily.json": "6ecb8d445d202c9720416d58babf9e18",
"assets/appdata/ferry.json": "4ef49bdf655e7343164dfad9f24a6692",
"assets/appdata/sights.json": "7c534a54cdd01e20c2d70aa5332b55ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/FontFont%2520-%2520Fago%2520Offc%2520Pro.ttf": "5301aa7e3efb9bb93f53d41217d123be",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/FontFont%2520-%2520Fago%2520SC%2520Offc%2520Pro.ttf": "969f580f6bd61542de32a3e1006bdbc8",
"assets/translations/sv-SV.json": "4233583c6fcd87315f0854dd18ca1638",
"assets/translations/fi-FI.json": "bf624a9603bcb0853a22121dae2add86",
"assets/translations/en-EN.json": "219e70fc7d7dd734ac0285a291008996"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
