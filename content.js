const bossLevels = {
    "Discarded Guardian": 20,
    "Zombie Lord Farakelsus": 20,
    "Madness Beast": 20,
    "Sukar Wererat Chief": 21,
    "Malex Herald of Dagoniel": 21,
    "Kaysha Herald of Icarus": 21,
    "Serpent Demon Bifrons": 21,
    "Tracker Leader Sharuk": 23,
    "Kuroboros' Priest": 23,
    "Greyclaw Kutus": 23,
    "Langk Matriarch Rashkos": 24,
    "Unrequited Kael": 24,
    "Soul Scavenger": 25,
    "Zombie Lord Crowl": 25,
    "Ikuntai": 25,
    "Betrayer of Urutu Freki": 25,
    "Mammon Collector Talos": 25,
    "Princess Molrang": 25,
    "Pan Dryad": 25,
    "Tiger Hornet": 26,
    "Patriarch Kuroboros": 26,
    "Partisan Leader Talakin": 28,
    "Tirak": 28,
    "Anakazel": 28,
    "Elf Renoa": 29,
    "Giant Wasteland Basilisk": 30,
    "Agent of Beres, Meana": 30,
    "Ragraman": 30,
    "Apepi": 30,
    "Boss Akata": 30,
    "Turek Mercenary Captain": 30,
    "Cat's Eye Bandit": 30,
    "Captain of Queen's Royal Guards": 32,
    "Skyla": 32,
    "Vuku Grand Seer Gharmash": 33,
    "Nurka's Messenger": 33,
    "Corsair Captain Kylon": 33,
    "Revenant of Sir Calibus": 34,
    "Cronos's Servitor Mumu": 34,
    "Breka Warlock Pastu": 34,
    "Stakato Queen Zyrnna": 34,
    "Sejarr's Servitor": 35,
    "Gargoyle Lord Sirocco": 35,
    "Guilotine, Warden of the Execution Grounds": 35,
    "Red Eye Captain Trakia": 35,
    "Eye of Beleth": 35,
    "Flame Lord Shadar": 35,
    "Tasaba Patriarch Hellena": 35,
    "Soul Collector Acheron": 35,
    "Remmel": 35,
    "Chertuba of Great Soul": 35,
    "Evil Spirit Tempest": 36,
    "Sebek": 36,
    "Rayito the Looter": 37,
    "Premo Prime": 38,
    "Lizardmen Leader Hellion": 38,
    "Nellis' Vengeful Spirit": 39,
    "Leader of Cat Gang": 39,
    "Leto Chief Talkin": 40,
    "Road Scavenger Leader": 40,
    "Shaman King Selu": 40,
    "Nakondas": 40,
    "Water Couatle Ateka": 40,
    "Fafurion's Page Sika": 40,
    "Water Spirit Lian": 40,
    "Gwindorr": 40,
    "Wizard of Storm Teruk": 40,
    "Retreat Spider Cletu": 42,
    "Crazy Mechanic Golem": 43,
    "Earth Protector Panathen": 43,
    "Rotten Tree Repiro": 44,
    "Dread Avenger Kraven": 44,
    "Flamestone Golem": 44,
    "Thief Kelbar": 44,
    "Timak Orc Chief Ranger": 44,
    "Shacram": 45,
    "Archon Suscepter": 45,
    "Tiger King Karuta": 45,
    "Timak Orc Gosmos": 45,
    "Evil Spirit Cyrion": 45,
    "Fafurion's Henchman Istary": 45,
    "Iron Giant Totem": 45,
    "Biconne of Blue Sky": 45,
    "Necrosentinel Royal Guard": 47,
    "Barion": 47,
    "King Tarlk": 48,
    "Orfen's Handmaiden": 48,
    "Mirror of Oblivion": 49,
    "Katu Van Leader Atui": 49,
    "Karte": 49,
    "Messenger of Fairy Queen Berun": 50,
    "Carnage Lord Gato": 50,
    "Cursed Clara": 50,
    "Zaken's Chief Mate Tillion": 50,
    "Ghost of Peasant Leader": 50,
    "Carnamakos": 50,
    "Lilith's Witch Marilion": 50,
    "Deadman Ereve": 51,
    "Verfa": 51,
    "Grave Robber Kim": 52,
    "Fafurion's Envoy Pingolpin": 52,
    "Gigantic Chaos Golem": 52,
    "Captain of Red Flag Shaka": 52,
    "Magus Kenishee": 53,
    "Dark Shaman Varangka": 53,
    "Atraiban": 53,
    "Paniel the Unicorn": 54,
    "Sorcerer Isirr": 55,
    "Beleth's Seer Sephia": 55,
    "Black Lily": 55,
    "Bandit Leader Barda": 55,
    "Ghost Knight Kabed": 55,
    "Eva's Spirit Niniel": 55,
    "Harit Hero Tamash": 55,
    "Zaken's Butcher Krantz": 89,
    "Furious Thieles": 55,
    "Pagan Watcher Cerberon": 55,
    "Enchanted Forest Watcher Ruell": 55,
    "Refugee Hopeful Leo": 56,
    "Harit Guardian Garangky": 56,
    "Timak Seer Ragoth": 57,
    "Eva's Guardian Millenu": 89,
    "Soulless Wild Boar": 59,
    "Demon Kurikups": 59,
    "Abyss Brukunt": 59,
    "Ghost of the Well Lidia": 60,
    "Lord Ishka": 60,
    "Giant Marpanak": 60,
    "Guardian of the Statue of Giant Karum": 60,
    "Ice Fairy Sirra": 89,
    "Ancient Weird Drake": 60,
    "Taik High Prefect Arak": 60,
    "Fairy Queen Timiniel": 61,
    "Roaring Lord Kastor": 62,
    "Gorgolos": 64,
    "Fierce Tiger King Angel": 65,
    "Hekaton Prime": 65,
    "Enmity Ghost Ramdal": 65,
    "Shilen's Priest Hisilrome": 65,
    "Gargoyle Lord Tiphon": 65,
    "Rahha": 65,
    "Last Titan Utenus": 66,
    "Demon's Agent Falston": 66,
    "Kernon's Faithful Servant Kelone": 67,
    "Spirit of Andras, the Betrayer": 69,
    "Bloody Priest Rudelto": 69,
    "Captain of the Ice Queen's Royal Guard": 59,
    "Death Lord Hallate": 73,
    "Plague Golem": 73,
    "Doom Blade Tanatos": 72,
    "Krokian Padisha Sobekk": 74,
    "Kernon": 75,
    "Daimon the White-Eyed": 89,
    "Last Lesser Giant Glaki": 78,
    "Drake Lord": 80,
    "Eilhalder von Hellmann": 80,
    "Tiamo Beast Dragon": 80,
    "Procella": 80,
    "Tiat": 82,
    "Soul of Water Ashutar": 89,
    "Ember": 85,
    "The 3rd Underwater Guardian": 60,
    "Ocean Flame Ashakiel": 76,
    "Korim": 70,
    "Storm Winged Naga": 75,
    "Death Lord Ipos": 75,
    "Unicorn Paniel": 54,
    "Longhorn Golkonda": 79,
    "Varka's Commander Mos": 84,
    "Guardian of the Status of Giant Karum": 60,
    "Ketra's Commander Tayr": 84,
    "Ketra's Hero Hekaton": 80,
    "Meanas Anor": 70,
    "Anakim's Nemesis Zakaron": 70,
    "Beast Lord Behemoth": 70,
    "Grave Robber Leader Akata": 30,
    "Icicle Emperor Bumbalump": 89,
    "Vanor Chief Kandra": 72,
    "Ketra's Chief Brakki": 87,
    "Death Lord Shax": 75,
    "Benom": 70,
    "Antharas": 80,
    "Antharas B": 99,
    "Core": 80,
    "High Priestess van Halter": 89,
    "Baium": 80,
    "Sailren": 87,
    "Captain of the Ice Queens Royal Guard": 59,
    "Soul of Fire Nastron": 89,
    "Icarus Sample 1": 40,
    "Water Dragon Seer Sheshark": 72,
    "Fire of Wrath Shuriel": 78,
    "Fafurion's Herald Lokness": 70,
    "Hestia, Guardian Deity of the Hot Springs": 78,
    "Antharas Priest Cloe": 74,
    "Immortal Savior Mardil": 71,
    "Palatanos of Horrific Power": 75,
    "Cherub Galaxia": 79,
    "Last Lesser Giant Olkuth": 75,
    "Shilen's Messenger Cabrio": 70,
    "Palibati Queen Themis": 70,
    "Varka's Hero Shadith": 80,
    "Varka's Chief Horus": 87,
    "Bloody Empress Decarbia": 75,
    "Flame of Splendor Barakiel": 80,
    "Queen Shyeed": 80,
    "Flamestone Giant": 76,
    "Anakim": 80,
    "Antharas C": 99,
    "Lord of Splendor Anays": 89,
    "Uruka": 86,
    "Nellis Vengeful Spirit": 39,
    "Gordon": 99,
    "Queen Ant": 80,
    "Valakas": 80
};

function getBossLevel(name) {
    let cleanName = name.replace(/^\(RDM BOSS\) /, '').trim();

    // Точное совпадение
    if (bossLevels[cleanName]) {
        return bossLevels[cleanName];
    }

    // Частичное совпадение (на случай вариаций)
    for (let key in bossLevels) {
        if (cleanName.toLowerCase().includes(key.toLowerCase()) ||
            key.toLowerCase().includes(cleanName.toLowerCase())) {
            return bossLevels[key];
        }
    }

    return '?'; // неизвестный босс
}

function parseKillTime(timeStr) {
    if (timeStr === 'Alive' || timeStr === 'Dead') return 0;
    // Пример: "24-05 09:59" → timestamp сегодня
    const [date, time] = timeStr.split(' ');
    const [day, month] = date.split('-').map(Number);
    const [hour, min] = time.split(':').map(Number);
    
    const now = new Date();
    const ts = new Date(now.getFullYear(), month-1, day, hour, min);
    return ts.getTime();
}

// Основная функция
function enhanceTable() {
    const table = document.querySelector('#tab-top_raidboss table');
    if (!table) return;

    const thead = table.querySelector('thead');
    const tbody = table.querySelector('tbody');

    if (!thead || !tbody) return;

    // === 1. Добавляем колонку "Level" ===
    if (!thead.querySelector('th[data-col="level"]')) {
        const levelTh = document.createElement('th');
        levelTh.textContent = 'Level';
        levelTh.style.width = '60px';
        levelTh.setAttribute('data-col', 'level');
        thead.querySelector('tr').insertBefore(levelTh, thead.querySelector('th:nth-child(3)')); // после имени
    }

    // Заполняем уровни (без дублирования)
    Array.from(tbody.rows).forEach(row => {
        if (row.cells.length < 3) return;

        // Проверяем, есть ли уже ячейка уровня (по data-атрибуту)
        let levelCell = row.querySelector('td[data-col="level"]');
        if (!levelCell) {
            levelCell = document.createElement('td');
            levelCell.setAttribute('data-col', 'level');
            levelCell.style.fontWeight = 'bold';
            levelCell.style.textAlign = 'center';
            row.insertBefore(levelCell, row.cells[2]);
        }
        const nameCell = row.cells[1];
        levelCell.textContent = getBossLevel(nameCell.textContent);
    });

    // === 2. Добавляем панель фильтров и сортировки ===
    let controls = document.getElementById('raidboss-controls');
    if (!controls) {
        controls = document.createElement('div');
        controls.id = 'raidboss-controls';
        controls.style.cssText = `
            padding: 12px; 
            background: #1a2533; 
            border-radius: 6px; 
            margin-bottom: 15px;
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            align-items: center;
        `;

        controls.innerHTML = `
            <label><input type="checkbox" id="hide-rdm" checked> Скрыть RDM</label>
            <label><input type="checkbox" id="only-alive"> Только живые</label>
            
            <select id="sort-by">
                <option value="default">По умолчанию</option>
                <option value="level-desc">Уровень ▼</option>
                <option value="level-asc" selected>Уровень ▲</option>
            </select>
            
            <button id="refresh-btn">Обновить</button>
        `;

        const tabContent = document.getElementById('tab-top_raidboss');
        if (tabContent) tabContent.prepend(controls);
    }

    // === Логика фильтров и сортировки ===
    function applyFiltersAndSort() {
        const hideRDM = document.getElementById('hide-rdm').checked;
        const onlyAlive = document.getElementById('only-alive').checked;
        const sortMode = document.getElementById('sort-by').value;

        const rows = Array.from(tbody.rows);

        rows.forEach(row => {
            const nameCell = row.cells[1];
            const statusCell = row.cells[row.cells.length - 1];
            const name = nameCell.textContent.trim();

            let visible = true;

            // Фильтр RDM BOSS: проверяем наличие "(RDM BOSS)" или "RDM BOSS"
            if (hideRDM && (name.includes('(RDM BOSS)') || name.includes('RDM BOSS'))) {
                visible = false;
            }
            // Фильтр "Только живые": скрываем, если статус не содержит "Alive"
            if (onlyAlive && statusCell.textContent.trim() !== 'Alive') {
                visible = false;
            }

            row.style.display = visible ? '' : 'none';
        });

        // Сортировка
        if (sortMode !== 'default') {
            const visibleRows = Array.from(tbody.rows).filter(r => r.style.display !== 'none');

            visibleRows.sort((a, b) => {
                if (sortMode.startsWith('level')) {
                    const lvlA = parseInt(a.cells[2]?.textContent) || 0;
                    const lvlB = parseInt(b.cells[2]?.textContent) || 0;
                    return sortMode === 'level-desc' ? lvlB - lvlA : lvlA - lvlB;
                }
                else if (sortMode.startsWith('time')) {
                    const timeA = parseKillTime(a.cells[a.cells.length-1].textContent);
                    const timeB = parseKillTime(b.cells[b.cells.length-1].textContent);
                    return sortMode === 'time-desc' ? timeB - timeA : timeA - timeB;
                }
                return 0;
            });

            // Перемещаем строки
            visibleRows.forEach(row => tbody.appendChild(row));
        }
    }

    // Назначаем обработчики
    document.getElementById('hide-rdm').onchange =
    document.getElementById('only-alive').onchange =
    document.getElementById('sort-by').onchange = applyFiltersAndSort;

    // Применяем фильтры и сортировку при загрузке
    applyFiltersAndSort();

    document.getElementById('refresh-btn').onclick = () => location.reload();
}

// Запуск
setTimeout(enhanceTable, 800);
// setTimeout(enhanceTable, 2000); // на всякий случай (Vue может подгружать)