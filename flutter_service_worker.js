'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "4f27552b71fd9c552003d9b15f2c06e2",
"version.json": "fbbf85f41d325e0b98425a3bd811377f",
"flutter_bootstrap.js": "7b113b43f42e0815217db15acbe04c4e",
"assets/AssetManifest.bin.json": "a7584e8f8f7b59df441cfcd0e877c7d4",
"assets/AssetManifest.bin": "73578c7c87084db6f0e88487be4f475b",
"assets/AssetManifest.json": "3e57f446d4b68769f2e8d63c9e29209d",
"assets/fonts/MaterialIcons-Regular.otf": "6556648f44e6afd58a49faeeb9da4011",
"assets/FontManifest.json": "abec0000daa6807d4301dbab8efaf77b",
"assets/assets/languages/es.json": "7138ed86ca37f77084264f005adcd9ea",
"assets/assets/languages/en.json": "a076715921beb6f12b8a72ec6f2c6546",
"assets/assets/png/logo.png": "55a0136efebb6387418ec4a90fbfcc11",
"assets/assets/png/confirm.png": "6df810afceecd3df8dfccc4a0b3cd31d",
"assets/assets/images/mastercard.png": "e4940e2a74966892c29e6b1d4be7c755",
"assets/assets/images/g9.jpeg": "ea6028c68d05c8fcd9d709771764f196",
"assets/assets/images/temp_image1.jpg": "ea8e238579dafc62b597f3b80dc9c141",
"assets/assets/images/app.png": "941ffb2f3fad44788db23bf44d5957a7",
"assets/assets/images/women.png": "508b55de67c801d2c697f68106a87484",
"assets/assets/images/login-bg.jpg": "64bd8e3cbc7693040d3b055a008e8b0d",
"assets/assets/images/fire.png": "78f7445bc271c0000a302cfb61cb2304",
"assets/assets/images/Auth-BG.png": "6a6a2df7a7c62e7e79376ae8906be29e",
"assets/assets/images/games.png": "d9f598c4ab8fd6111e893804279820d5",
"assets/assets/images/g1.jpeg": "0724c973e2914be68400ac16f8ab3e11",
"assets/assets/images/music.png": "bf689a21f42ab5f53ea4d9472537fa05",
"assets/assets/images/g2.jpeg": "69c9e5e3e30777a99a8922d1f2e58445",
"assets/assets/images/visa_card.png": "547ed2d92ba479fe25d9f4c8681230de",
"assets/assets/images/casual.webp": "14a4bbb0be531efec1c00d08345c0446",
"assets/assets/images/arm_chair.jpeg": "e25a536b41630921785dea57333e045b",
"assets/assets/images/samsung_tv.jpeg": "c219e6ae82c40f905e3ec8245b01911b",
"assets/assets/images/t-shirt_ward2.jpeg": "62dc89e89549f86a128ec26a89fb677b",
"assets/assets/images/tv.jpeg": "ea0d58281b82032c7ddff810b0bad7cd",
"assets/assets/images/logo-light.png": "47437d73bac05d0fb68b2e16b48967fb",
"assets/assets/images/error-404.svg": "af59b51e4422dbf2ab61c43d336b4218",
"assets/assets/images/play.png": "e481cce2de3cecf9161636e7b2fe89e8",
"assets/assets/images/t-shirt.png": "11bdd84f6573c3a264696103ab292af9",
"assets/assets/images/g7.jpeg": "b3fd442d834248825472b1708795de35",
"assets/assets/images/t-shirt_ward.jpeg": "72ee301607bc0ba80edc3a87fe1db15f",
"assets/assets/images/g4.jpeg": "ff404ecf4f25967ecdb9e0dda72c66b4",
"assets/assets/images/offer_image2.jpg": "226cefdab2f7801f72c67ad2fc4bb2e4",
"assets/assets/images/lady_gaga.jpeg": "4d0b3ae444803d250fbe1620f5a95e97",
"assets/assets/images/sports.png": "f492f9b36ec85d7125ae424396d7ddd0",
"assets/assets/images/entertainment.png": "7b98eaff533b27b8efac4f06805a5714",
"assets/assets/images/bag.png": "42c3a706edbcf0fe888bec6de3d48135",
"assets/assets/images/art_design.png": "c96f06e13f63c0f72eeedbf5c07021ef",
"assets/assets/images/c1.jpeg": "7dd3776097da93ad0ac0cff1db45e907",
"assets/assets/images/eyeswear.webp": "2978c4aad33b7eacb20bba73009c8a56",
"assets/assets/images/ecommerce.svg": "6b47791535b525bdafafcc6e884df2e3",
"assets/assets/images/Underwear_Loungewear_Accessories.png": "aec7a767afa9e5edee31aac2a6f13c83",
"assets/assets/images/printress.png": "ebf5b268a400e30863171b147c457555",
"assets/assets/images/temp_image.jpg": "9784bbfb0f5113de7fa4e70c2739d490",
"assets/assets/images/black_dress4.jpeg": "8557be706f0ebf53ac7d31c8137f69db",
"assets/assets/images/galaxy22.jpeg": "105c1d4eba5dc229ce0288c098840290",
"assets/assets/images/offer_image1.jpg": "e43dc30c37da512bc6ed488f216a6379",
"assets/assets/images/logo-sm-old.png": "2b3e3211dd01969477110dfbbd611046",
"assets/assets/images/terms.png": "7d472c989a4ff36a87a942b4822f5f6e",
"assets/assets/images/persons.svg": "11984b61bb74dc8f1577492d58dc28f5",
"assets/assets/images/delivery_policy.png": "9f1cfd99c9d7a0be634c51b910125480",
"assets/assets/images/black_shirt.jpeg": "8eda28a750ef333c91e672aaf5399854",
"assets/assets/images/traditional.jpeg": "edd914c3c892ce7a84dd79ad8a260f14",
"assets/assets/images/western.jpeg": "571da95a4a06b764c023f842136eb2d3",
"assets/assets/images/error-500.svg": "9e45ec6665fe6bd586e2ac021bd42303",
"assets/assets/images/t-shirt_ward1.jpeg": "e4b1e60ac690cafef3761d5fd0b6580b",
"assets/assets/images/temp_image2.jpg": "9bd9a539d6c25c4dd8147e5135a74b7d",
"assets/assets/images/bagcat.webp": "b430274b24c11c17dee42faf5f4dfaf3",
"assets/assets/images/electronic.png": "03ac7b94e15f18a4e8d3d224e37e6a0f",
"assets/assets/images/murgs.jpeg": "0f6608459a3155cf3aa925a34ef91fa4",
"assets/assets/images/kitchen.png": "9c2e2c82d30de2bf0f2ddadcab20a8c1",
"assets/assets/images/black_dress3.jpeg": "dcf7efe2ff86d711a02cb5c8c285da0a",
"assets/assets/images/twitter.png": "aa23534c6ccddac18a74a6bd3197024b",
"assets/assets/images/chair.jpeg": "ba0f67ea1af6b5e9df462c31d8e7d013",
"assets/assets/images/pink_shirt.jpeg": "998ee6d4544c47abbd78637417a5b7dc",
"assets/assets/images/g8.jpeg": "077d44dde4a892a68b5b4f79541e3fbe",
"assets/assets/images/c3.jpeg": "6d4414dbffdeac0c40836915890f87a6",
"assets/assets/images/footwear.jpeg": "4134cdd0a141a9a35194f00cfbddf872",
"assets/assets/images/one_plus_tv.jpeg": "d596069c03071323f4f8416a2cdbb3f8",
"assets/assets/images/cancellation_policy.png": "7f4b72c2078cc49e5a2d758ab0de4fe3",
"assets/assets/images/sportwear.jpeg": "0a82e0c9d44fa061236472afeef3899d",
"assets/assets/images/t-shirt1.png": "f276c0ffc4e5d61726daf2660d83efc7",
"assets/assets/images/men.png": "3b69951d65c061fd25cd97e78b103326",
"assets/assets/images/privacy_policy.png": "a1da1cf9b20e7e62c0182898dcd68ba1",
"assets/assets/images/g3.jpeg": "9e3e366edc4f87cf0917f5589f7704c4",
"assets/assets/images/logo-dark-lg.png": "207993461b9cedfb95da84796cc170bd",
"assets/assets/images/g6.jpeg": "83783c7258083843dadef0145132090e",
"assets/assets/images/cloth.png": "1f081433564634424ef5c33ab5d0402a",
"assets/assets/images/makeupcat.webp": "0520ee26496f3a2837423541bbe34e6f",
"assets/assets/images/tv2.jpeg": "509e27fdcd3c6e6a53071e70bba6d168",
"assets/assets/images/logo-sm.png": "847043d6590c171daab8e1d881668485",
"assets/assets/images/offer_image.jpg": "9debb93a03ae89fa0dafd3e6a0ebd63b",
"assets/assets/images/likendin.png": "23ff3f39a71e91aa3c49c57813fb6e1b",
"assets/assets/images/b_cup.jpeg": "474ffeee32f812e52c7af5eea2e9d5fd",
"assets/assets/images/youtube.png": "10f257e97ca5dfc79f7d035dc40c8c3d",
"assets/assets/images/fancy_bag.jpeg": "cf0e2d9e755a063b559980b292b50e92",
"assets/assets/images/play_game.jpeg": "b964656be9d9df9f3d9a925bdb645dae",
"assets/assets/images/t-shirt2.png": "92434173f6f1bb08e1da2da122ef79a4",
"assets/assets/images/tv3.jpeg": "f2e0f3ac9b31e42f9b357d07c4c98ba0",
"assets/assets/images/jewellery.png": "1d9d21c9d69e24d607dad96523ec0977",
"assets/assets/images/logo-dark-lg-old.png": "5d39d74988339152cc4a10d29340a942",
"assets/assets/images/shoes.png": "50d852dba6f12a47dc7cee9747882a9f",
"assets/assets/images/dark.png": "d8b29e65064977fa8a27c975d571d142",
"assets/assets/images/maintenance.png": "4708bf7b9c7eae5075593eee0100193a",
"assets/assets/images/profile.jpeg": "1bfa2288a849de76482192038cc98c18",
"assets/assets/images/light.png": "ef5119e1c42ff149253302e0c8a819bf",
"assets/assets/images/instagram.png": "6d9870c6c49c48401897a3caf6c8daa3",
"assets/assets/images/crafts.png": "afdfe7d9d069aed7e91849615c445af0",
"assets/assets/images/facebook.png": "d16c261b5fa420fb9db0d6f37f5baf5a",
"assets/assets/images/crm_profile.png": "a37f82c5578e4d1adafbcbea5fa9f6a9",
"assets/assets/images/c2.jpeg": "a088c40cde7d3374290e88f42e80421e",
"assets/assets/images/gadgets.png": "01d50c81457e90a0eca8d1953750d990",
"assets/assets/images/filter.png": "3e41adabfd181693fee7fa60cf32296f",
"assets/assets/images/flipflop.webp": "21471877b08ccb848b1e66c811f616de",
"assets/assets/images/cap.png": "d7df33e64d4789e205ea6aa096417a91",
"assets/assets/images/tv1.jpeg": "22894d19c3b33c963b3d44277dcdedfc",
"assets/assets/images/logo-light-lg.png": "5561d4d2204f58590be9ea97a585c5d7",
"assets/assets/images/watchcat.jpeg": "18774ce0cadc712124471c38731c3dec",
"assets/assets/images/makeup.png": "3f828aaa5d07842a302c8b9bb29fc69d",
"assets/assets/images/image1.png": "50b34ac51c530c81d3b94a86b927c6d9",
"assets/assets/images/books.png": "e4f39ebca2fcce459ed9d284443b6c1c",
"assets/assets/images/grocery.png": "d33b53da952597889569fb343607991f",
"assets/assets/images/iphone.jpeg": "ef173bd9400b9989e925409fe4613629",
"assets/assets/images/black_dress2.jpeg": "ee43534abe6af01948f546d0ea344b5f",
"assets/assets/images/g5.jpeg": "3bc5992c20d233979181e5b9242eeea0",
"assets/assets/images/photography.png": "0ce6767230b0ad3596ecb0c664f76976",
"assets/assets/images/dining_chair.jpeg": "5afada18e97476710f4e0e7d63cd1370",
"assets/assets/images/watch.png": "035d07dc57482dd4faa1f916d0298f91",
"assets/assets/images/black_dress.jpeg": "9cf5b631a11e8acfa23396497f15a5bc",
"assets/assets/images/bag.jpeg": "3a9cbad02095063bbd1bb783096e7937",
"assets/assets/images/gas_stove.jpeg": "dacddf263aed8c5838c2cec8a88ac667",
"assets/assets/images/logo-light-lg-old.png": "37bc14787d2256795be892ad6f27d54c",
"assets/assets/data/members_data.json": "960d7121260c19914c79d5bea88a9ebe",
"assets/assets/image/offert_8_products.jpg": "9ac1f08df23150228679dc58d658874a",
"assets/assets/image/agua_coco_goya.jpg": "dcdd9e10fd719f8f00a3e5b993eca06b",
"assets/assets/image/pierna_de_cerdo.jpg": "730ac27afa2a166ad8718c4f5c18d676",
"assets/assets/image/deli_slice.jpg": "509634705e9dd38b40bc67cb2749f141",
"assets/assets/image/t-bone.jpg": "f776ef8337290e0a1621a4d714bc0d42",
"assets/assets/image/costilla_cerdo.jpeg": "1b1ac909d6f2a1a7bfae17c5527bff55",
"assets/assets/image/pechuga_pollo.jpeg": "e874cd625888f8eefcb7cf2c4be7c8e2",
"assets/assets/image/chicken_offert.png": "2ab1e86a6f265516838fd196359ed9c2",
"assets/assets/image/offert_8_products.png": "0fdf6d37834ff7256e8d94d4b2bdf8e0",
"assets/assets/image/sandia.jpeg": "474f1384cf9ea0661bbb9376a0cce79c",
"assets/assets/image/yuca.jpg": "1973e0ef2b3a11ab097d1f955da712e3",
"assets/assets/image/monster_energy.jpg": "74573bbf20a50807924217491860d8dd",
"assets/assets/image/aceite_mazola.jpg": "3e80961dac71670067613411f6b6fc15",
"assets/assets/image/churrasco.jpg": "1fc368726f3a9093e02a5f4cce76595a",
"assets/assets/image/hamburguesa.jpg": "18ce85d6357ba57c76845f23b262e746",
"assets/assets/icons/map.svg": "e7bdf89d64cc9c21594149f955810db4",
"assets/assets/icons/archive-2.svg": "bcac69e6304142809c5f6a382a31cd82",
"assets/assets/icons/buildings.svg": "a534b5ea1742addd30aab894237e0280",
"assets/assets/icons/close-square.svg": "9a79e8ce8aa50dfbfa7ef3790f2b07d6",
"assets/assets/icons/Admin_Kit_Text.svg": "4536dca87a4294b8db9661212724cdd6",
"assets/assets/icons/category.svg": "f62d3eb5ff6cdc3731e25c00b6477436",
"assets/assets/icons/shop.svg": "ed8cc22c0da82997c0d88e20795736b8",
"assets/assets/icons/hrm.svg": "ffb693d048e66ad0e04838527c68f22d",
"assets/assets/icons/Auth_BG.svg": "1de034439f41adb0b0bec3c105837e8a",
"assets/assets/icons/Admin_Kit.svg": "b454cd3f9db4e5aa74b601eba29c63d2",
"assets/assets/icons/crm.svg": "04b92f1f115d9238c9e3ccba282abb69",
"assets/assets/icons/twitter.svg": "1d1bf5b7f02c61afe47a503bbf858e0e",
"assets/assets/icons/box-1.svg": "d22b7147dedb2beeb1b054f407eba3ae",
"assets/assets/icons/search-normal-1.svg": "8f39818d05e1775ba1040de0d079152d",
"assets/assets/icons/arrow-left.svg": "15cde702903952f1b4ded7ada8023c40",
"assets/assets/icons/notification-1.svg": "def464219fe311fc457af1169862b194",
"assets/assets/icons/chart-pie.svg": "4aa0478dca9f5275fa0d852baef4d9dc",
"assets/assets/icons/arrow-down-2.svg": "7f74e39e4d3d0f36b81dfb66b341103b",
"assets/assets/icons/setting-2.svg": "f5eb6aef16fea6a48b49fce98c62dd50",
"assets/assets/icons/pin.svg": "6ca7416f556c9174dab111cec6821a15",
"assets/assets/icons/trash.svg": "0b5e1165ca5b2acd0d945601cf717402",
"assets/assets/icons/camera.svg": "d4f524ee0b11a17dad1faa8a53531439",
"assets/assets/icons/arrow-right-2.svg": "e89449247c4aa98318b71b3ae394032b",
"assets/assets/icons/add-square.svg": "3ca368540d130c3c807013281d82a285",
"assets/assets/icons/arrow-right-3.svg": "f689ba3a1c09ddf7a514a8b50e3f27c1",
"assets/assets/icons/sms.svg": "32c7859a8575a4528022e75f3441148f",
"assets/assets/icons/home-2.svg": "9be3c87cf1daa465befda6239a59c915",
"assets/assets/icons/verify.svg": "f6657b7e307f0cc07a743169eddf9872",
"assets/assets/icons/checkbox-circle.svg": "c9e57dc01a6fedc64718d5c42650c8ef",
"assets/assets/icons/grid-2.svg": "2cf19a1e1dedcbc070aa5813efa5b955",
"assets/assets/icons/maintenance.svg": "c1128a717dc4dfce45fb76a2d6f9fc55",
"assets/assets/icons/receipt-2-1.svg": "90bbb90f89b1bd81dc84bf2ebdc49bf9",
"assets/assets/icons/calendar-2.svg": "a4911892644a08f75a9113391844d9a9",
"assets/assets/icons/cloudcomputing.svg": "c3719a84fb38d0312e7540fa8ed958ec",
"assets/assets/icons/facebook.svg": "35b49d77b2359b18e4284ad132dda413",
"assets/assets/svg/confirm.svg": "03938b75bf1b0a423563e26462a75d09",
"assets/assets/svg/logo.svg": "126d2d2d7b8d24261d24e3cd0cef71d3",
"assets/assets/svg/login.svg": "160df0fdcc829bd8fc08e7599fe809b1",
"assets/assets/svg/google.svg": "a8e82812098977ebd9d625933519f773",
"assets/assets/svg/facebook.svg": "4c6237f972e271ce5be9ab4ace767116",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f38c93fbbaca20abbd88953c492dda9",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "17ee8e30dde24e349e70ffcdc0073fb0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c8aeab0c11e4ce96fa329fff14ffb83e",
"assets/NOTICES": "5091036b10300158b889e1d843b8b4b4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"manifest.json": "aca8e1cb43b17029e29a61bad740df8a",
"index.html": "9e2a1eb7c2b5decc12fdbe7fbe177e43",
"/": "9e2a1eb7c2b5decc12fdbe7fbe177e43",
"main.dart.js": "c51ef306d075193613795e02687a4208",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"favicon.ico": "a5f6eac86cb9db3f40abb46b31079b82",
"icons/favicon-32x32.png": "f5504304804ef3bf9809310f28a59bb3",
"icons/android-icon-96x96.png": "a35eced7f5192c4245a4f2b1bdb91e58",
"icons/apple-icon-precomposed.png": "fd51ced98e46544a02c983619872a590",
"icons/apple-icon-114x114.png": "7076eeefdd235fad9646afe5ebf00037",
"icons/apple-icon-152x152.png": "87f05ac6ac3f05fd51a45bc2334579b0",
"icons/apple-icon-72x72.png": "69e32a7c47e89099c40ea915ae8b39bf",
"icons/apple-icon-180x180.png": "08053790ff6b59d3aea41ee89f4d9e2c",
"icons/apple-icon-60x60.png": "99e7f0356db7a0e4e96b7a571cab90d7",
"icons/ms-icon-310x310.png": "e57cf3e6217331e9c3722deb53c59d1b",
"icons/android-icon-192x192.png": "43442664216a203da41530c7f3ed7021",
"icons/ms-icon-150x150.png": "1158996803378647ecb1afa73f8e4985",
"icons/android-icon-72x72.png": "69e32a7c47e89099c40ea915ae8b39bf",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/apple-icon-76x76.png": "3a6318275bbd0cc46a733df292621ebd",
"icons/apple-icon-57x57.png": "af63abc97e75dd90de3624a8635e84e6",
"icons/apple-icon-144x144.png": "3db0d6f6b9b8873c6ff413c2865de1ce",
"icons/apple-icon-120x120.png": "0aa6b6a7632e86c51b9ec5b5a41dfab3",
"icons/android-icon-48x48.png": "4dbecb4ee568a05044729a0ce1842436",
"icons/ms-icon-144x144.png": "49efbb7f4835f5ff9b09667544a2d0ed",
"icons/favicon-16x16.png": "96eba40b911528fa712aee96c8d51ffa",
"icons/android-icon-144x144.png": "3db0d6f6b9b8873c6ff413c2865de1ce",
"icons/apple-icon.png": "fd51ced98e46544a02c983619872a590",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon.ico": "a5f6eac86cb9db3f40abb46b31079b82",
"icons/android-icon-36x36.png": "4088e26719a2f6912f5c0af66b9056b6",
"icons/ms-icon-70x70.png": "bf93f381eb7bdda6a59f2d7456635438",
"icons/android-chrome-192x192.png": "616e3a2d8cbe23ab5caa9869c4ac9219",
"icons/apple-touch-icon.png": "7e30e133b7d85341f75f9c923045f689",
"icons/favicon-96x96.png": "4d1fb16f52b4b138bfbf446b38b5e6e4",
"iconos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"iconos/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"iconos/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"iconos/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"iconos/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
