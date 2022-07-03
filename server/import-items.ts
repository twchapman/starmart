import * as axios from 'axios';
import { ItemsCollection } from '/imports/api/items';

function insertItem(name: string) {
    ItemsCollection.insert({ name });
}

export const populateEquipment = async () => {
    ItemsCollection.remove({});
    if (ItemsCollection.find().count() === 0) {
        const weaponQuery = 'https://starcitizen.tools/api.php?action=query&format=json&list=categorymembers&cmtitle=Category%3APersonal_weapons&cmlimit=max';

        const weaponsResult = await axios.get(weaponQuery);
        const weaponData = weaponsResult.data.query.categorymembers;
        const weapons = weaponData.map(w => w.title).filter(w => !w.startsWith('Category:') && !w.startsWith('File:'));

        for (const weapon of weapons) {
            insertItem(weapon);
        }
    }
}