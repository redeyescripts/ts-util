const _0x154951=_0x3b5c;(function(_0x1566dd,_0x1b4ca9){const _0x164b40=_0x3b5c,_0x4aab46=_0x1566dd();while(!![]){try{const _0x5379b=parseInt(_0x164b40(0x161))/0x1+parseInt(_0x164b40(0x15e))/0x2*(parseInt(_0x164b40(0x159))/0x3)+-parseInt(_0x164b40(0x14b))/0x4*(parseInt(_0x164b40(0x153))/0x5)+-parseInt(_0x164b40(0x154))/0x6+-parseInt(_0x164b40(0x14c))/0x7+-parseInt(_0x164b40(0x15d))/0x8*(parseInt(_0x164b40(0x152))/0x9)+parseInt(_0x164b40(0x155))/0xa;if(_0x5379b===_0x1b4ca9)break;else _0x4aab46['push'](_0x4aab46['shift']());}catch(_0x7dcf2c){_0x4aab46['push'](_0x4aab46['shift']());}}}(_0x783b,0x35c1d));function _0x783b(){const _0xd5ff44=['dbinit','537114SBqMMV','log','CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20`player_contacts`\x20(\x20`id`\x20int(11)\x20NOT\x20NULL\x20AUTO_INCREMENT,\x20`citizenid`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`name`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`number`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`iban`\x20varchar(50)\x20NOT\x20NULL\x20DEFAULT\x20\x270\x27,\x20PRIMARY\x20KEY\x20(`id`),\x20KEY\x20`citizenid`\x20(`citizenid`))\x20ENGINE=InnoDB\x20DEFAULT\x20CHARSET=utf8mb4\x20COLLATE=utf8mb4_general_ci;','Creation','8scFFAs','2jiQsWb','deletedb','CREATE\x20DATABASE\x20`qbcore`;','316374zYKqIK','Deletion\x20done','execute','Finish','740oBtXrl','2013151SaQnDs','CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20`players`\x20(`id`\x20int(11)\x20NOT\x20NULL\x20AUTO_INCREMENT,\x20`citizenid`\x20varchar(255)\x20NOT\x20NULL,\x20`cid`\x20int(11)\x20DEFAULT\x20NULL,\x20`steam`\x20varchar(255)\x20DEFAULT\x20NULL,\x20`ip`\x20longtext\x20DEFAULT\x20NULL,\x20`license`\x20varchar(255)\x20NOT\x20NULL,\x20`name`\x20varchar(255)\x20NOT\x20NULL,\x20`money`\x20text\x20NOT\x20NULL,\x20`paycheck`\x20int(11)\x20NOT\x20NULL\x20DEFAULT\x200,\x20`charinfo`\x20text\x20DEFAULT\x20NULL,\x20`job`\x20text\x20NOT\x20NULL,\x20`gang`\x20text\x20DEFAULT\x20NULL,\x20`position`\x20text\x20NOT\x20NULL,\x20`metadata`\x20text\x20NOT\x20NULL,\x20`inventory`\x20longtext\x20DEFAULT\x20NULL,\x20`last_updated`\x20timestamp\x20NOT\x20NULL\x20DEFAULT\x20current_timestamp()\x20ON\x20UPDATE\x20current_timestamp(),\x20`tattoos`\x20longtext\x20DEFAULT\x20NULL,\x20`skin`\x20longtext\x20DEFAULT\x20NULL,\x20`luckywheel_spins`\x20varchar(1)\x20DEFAULT\x20\x271\x27,\x20`credits`\x20int(11)\x20NOT\x20NULL\x20DEFAULT\x200,\x20`tasks`\x20longtext\x20NOT\x20NULL\x20DEFAULT\x20\x27\x27,\x20`tasks_completed`\x20longtext\x20NOT\x20NULL\x20DEFAULT\x20\x27\x27,\x20`winnings`\x20longtext\x20NOT\x20NULL\x20DEFAULT\x20\x27\x27,\x20`deleted`\x20int(11)\x20DEFAULT\x200,\x20`pp`\x20longtext\x20DEFAULT\x20\x27\x27,\x20`policemdtinfo`\x20longtext\x20DEFAULT\x20\x27\x27,\x20`tags`\x20longtext\x20DEFAULT\x20\x27\x27,\x20`gallery`\x20longtext\x20DEFAULT\x20\x27\x27,\x20`level`\x20int(11)\x20NOT\x20NULL\x20DEFAULT\x200,\x20`levelcount`\x20int(11)\x20NOT\x20NULL\x20DEFAULT\x200,\x20`jail_time`\x20int(255)\x20NOT\x20NULL\x20DEFAULT\x200,\x20`skills`\x20longtext\x20DEFAULT\x20NULL,\x20`date`\x20timestamp\x20NULL\x20DEFAULT\x20NULL,\x20`jail_time_mobster`\x20int(255)\x20DEFAULT\x20NULL,\x20PRIMARY\x20KEY\x20(`citizenid`),\x20KEY\x20`id`\x20(`id`),\x20KEY\x20`last_updated`\x20(`last_updated`),\x20KEY\x20`license`\x20(`license`),\x20KEY\x20`date`\x20(`date`)\x20)\x20ENGINE=InnoDB\x20AUTO_INCREMENT=22848\x20DEFAULT\x20CHARSET=utf8\x20COLLATE=utf8_general_ci;','Done\x20building\x20with\x20database\x20:)','CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20`bugs`\x20(`id`\x20int(11)\x20NOT\x20NULL\x20AUTO_INCREMENT,\x20`ip`\x20longtext\x20DEFAULT\x20NULL,\x20`steam`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`name`\x20longtext\x20DEFAULT\x20NULL,\x20`reason`\x20longtext\x20DEFAULT\x20NULL,\x20`kirjeldus`\x20longtext\x20DEFAULT\x20NULL,\x20PRIMARY\x20KEY\x20(`id`)\x20)\x20ENGINE=InnoDB\x20AUTO_INCREMENT=4\x20DEFAULT\x20CHARSET=utf8mb4\x20COLLATE=utf8mb4_general_ci;','CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20`apartments`\x20(\x20`id`\x20int(11)\x20NOT\x20NULL\x20AUTO_INCREMENT,\x20`name`\x20varchar(255)\x20DEFAULT\x20NULL,\x20`type`\x20varchar(255)\x20DEFAULT\x20NULL,\x20`label`\x20varchar(255)\x20DEFAULT\x20NULL,\x20`citizenid`\x20varchar(255)\x20DEFAULT\x20NULL,\x20PRIMARY\x20KEY\x20(`id`),\x20KEY\x20`citizenid`\x20(`citizenid`),\x20KEY\x20`name`\x20(`name`))\x20ENGINE=InnoDB\x20AUTO_INCREMENT=632\x20DEFAULT\x20CHARSET=utf8\x20COLLATE=utf8_general_ci;','CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20`bans`\x20(\x20`id`\x20int(11)\x20NOT\x20NULL\x20AUTO_INCREMENT,`name`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`license`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`discord`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`ip`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`reason`\x20text\x20DEFAULT\x20NULL,\x20`expire`\x20int(11)\x20DEFAULT\x20NULL,\x20`bannedby`\x20varchar(255)\x20NOT\x20NULL\x20DEFAULT\x20\x27LeBanhammer\x27,\x20PRIMARY\x20KEY\x20(`id`),\x20KEY\x20`license`\x20(`license`),\x20KEY\x20`discord`\x20(`discord`),\x20KEY\x20`ip`\x20(`ip`)\x20)\x20ENGINE=InnoDB\x20AUTO_INCREMENT=3\x20DEFAULT\x20CHARSET=utf8\x20COLLATE=utf8_general_ci;','2974392aTDdOv','4330oRgcKI','1276278XVKwiF','7157810UbYMZT','USE\x20`qbcore`;','DROP\x20DATABASE\x20`qbcore`;'];_0x783b=function(){return _0xd5ff44;};return _0x783b();}function _0x3b5c(_0x4940bc,_0x2c222b){const _0x783b32=_0x783b();return _0x3b5c=function(_0x3b5ce1,_0x528654){_0x3b5ce1=_0x3b5ce1-0x14a;let _0x8a2c98=_0x783b32[_0x3b5ce1];return _0x8a2c98;},_0x3b5c(_0x4940bc,_0x2c222b);}var SQL=global['exports'],DB=SQL['oxmysql'][_0x154951(0x163)],Delay=_0x18f505=>new Promise(_0x22292e=>setTimeout(_0x22292e,_0x18f505));on('DB',async()=>{const _0x1899b9=_0x154951,_0x50b7f7=_0x1899b9(0x160);DB(_0x50b7f7),await Delay(0x0),TriggerEvent('T1');}),on('T1',async()=>{const _0x2bb709=_0x154951;DB(_0x2bb709(0x156));const _0x131d22=_0x2bb709(0x15b);await Delay(0x0),DB(_0x131d22),TriggerEvent('T2');}),on('T2',async()=>{const _0x18565a=_0x154951,_0x1ec3a8=_0x18565a(0x150);await Delay(0x0),DB(_0x1ec3a8),TriggerEvent('T3');}),on('T3',async()=>{const _0x4c3d5b='CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20`bans`\x20(\x20`id`\x20int(11)\x20NOT\x20NULL\x20AUTO_INCREMENT,`name`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`license`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`discord`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`ip`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`reason`\x20text\x20DEFAULT\x20NULL,\x20`expire`\x20int(11)\x20DEFAULT\x20NULL,\x20`bannedby`\x20varchar(255)\x20NOT\x20NULL\x20DEFAULT\x20\x27LeBanhammer\x27,\x20PRIMARY\x20KEY\x20(`id`),\x20KEY\x20`license`\x20(`license`),\x20KEY\x20`discord`\x20(`discord`),\x20KEY\x20`ip`\x20(`ip`)\x20)\x20ENGINE=InnoDB\x20AUTO_INCREMENT=3\x20DEFAULT\x20CHARSET=utf8\x20COLLATE=utf8_general_ci;';await Delay(0x0),DB(_0x4c3d5b),TriggerEvent('T4');}),on('T4',async()=>{const _0x399489=_0x154951,_0x121647=_0x399489(0x151);await Delay(0x0),DB(_0x121647),TriggerEvent('T5');}),on('T5',async()=>{const _0x3d0801=_0x154951,_0x5510ad=_0x3d0801(0x14f);await Delay(0x0),DB(_0x5510ad),TriggerEvent('T6');}),on('T6',async()=>{const _0x2e2cfa='CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20`logs`\x20(`Type`\x20text\x20DEFAULT\x20NULL,\x20`Steam`\x20varchar(255)\x20DEFAULT\x20NULL,\x20`Log`\x20text\x20DEFAULT\x20NULL,\x20`Cid`\x20varchar(50)\x20DEFAULT\x20NULL,\x20`Data`\x20text\x20DEFAULT\x20NULL,\x20`Date`\x20timestamp\x20NULL\x20DEFAULT\x20current_timestamp()\x20)\x20ENGINE=InnoDB\x20DEFAULT\x20CHARSET=utf8mb4\x20COLLATE=utf8mb4_general_ci;';await Delay(0x0),DB(_0x2e2cfa),TriggerEvent('T7');}),on('T7',async()=>{const _0xcc30dc=_0x154951,_0x556da2=_0xcc30dc(0x14d);await Delay(0x0),DB(_0x556da2),TriggerEvent('T8');}),on('T8',async()=>{const _0x2396a1='CREATE\x20TABLE\x20IF\x20NOT\x20EXISTS\x20`player_vehicles`\x20(`id`\x20int(11)\x20NOT\x20NULL\x20AUTO_INCREMENT,`license`\x20varchar(50)\x20DEFAULT\x20NULL,`citizenid`\x20varchar(50)\x20DEFAULT\x20NULL,`vehicle`\x20varchar(50)\x20DEFAULT\x20NULL,`hash`\x20varchar(50)\x20DEFAULT\x20NULL,`mods`\x20longtext\x20CHARACTER\x20SET\x20utf8mb4\x20COLLATE\x20utf8mb4_bin\x20DEFAULT\x20NULL,`plate`\x20varchar(50)\x20NOT\x20NULL,`fakeplate`\x20varchar(50)\x20DEFAULT\x20NULL,`garage`\x20longtext\x20DEFAULT\x20NULL,`fuel`\x20int(11)\x20DEFAULT\x20100,`engine`\x20float\x20DEFAULT\x201000,`body`\x20float\x20DEFAULT\x201000,`state`\x20int(11)\x20DEFAULT\x201,`depotprice`\x20int(11)\x20NOT\x20NULL\x20DEFAULT\x200,`drivingdistance`\x20int(50)\x20DEFAULT\x20NULL,`status`\x20text\x20DEFAULT\x20NULL,`balance`\x20int(11)\x20NOT\x20NULL\x20DEFAULT\x200,`paymentamount`\x20int(11)\x20NOT\x20NULL\x20DEFAULT\x200,`paymentsleft`\x20int(11)\x20NOT\x20NULL\x20DEFAULT\x200,`financetime`\x20int(11)\x20NOT\x20NULL\x20DEFAULT\x200,`vinnumber`\x20varchar(50)\x20DEFAULT\x20NULL,`vinscratch`\x20int(2)\x20DEFAULT\x200,`nosColour`\x20text\x20DEFAULT\x20NULL,`traveldistance`\x20int(50)\x20DEFAULT\x200,`noslevel`\x20int(10)\x20DEFAULT\x200,`hasnitro`\x20tinyint(4)\x20DEFAULT\x200,`degredation`\x20longtext\x20DEFAULT\x20\x270,0,0,0,0,0,0,0\x27,PRIMARY\x20KEY\x20(`id`),KEY\x20`plate`\x20(`plate`),\x20KEY\x20`citizenid`\x20(`citizenid`),\x20KEY\x20`license`\x20(`license`))\x20ENGINE=InnoDB\x20AUTO_INCREMENT=212\x20DEFAULT\x20CHARSET=utf8mb4\x20COLLATE=utf8mb4_general_ci;';await Delay(0x0),DB(_0x2396a1),TriggerEvent('Finish');}),on(_0x154951(0x15c),async()=>{TriggerEvent('DB');}),on(_0x154951(0x14a),async()=>{const _0xdb8bc7=_0x154951;console[_0xdb8bc7(0x15a)](_0xdb8bc7(0x14e));}),on('deletion',async()=>{const _0x298983=_0x154951;await Delay(0x14);const _0x7a635c=_0x298983(0x157);DB(_0x7a635c),console[_0x298983(0x15a)](_0x298983(0x162));}),RegisterCommand(_0x154951(0x15f),async()=>{TriggerEvent('deletion');},![]),RegisterCommand(_0x154951(0x158),async()=>{const _0x1ebebb=_0x154951;await Delay(0x0),TriggerEvent(_0x1ebebb(0x15c));},![]);