import { MyClient as Client } from '../client'
import * as Models from '../models';

export default {
    name: 'ready',
    once: true,
    execute(client:Client) {
        Models.CharacterEquipment.sync();
        Models.Character.sync();
        Models.Equipment.sync();
        console.log(`Logged in as ${client?.user?.tag}!`);
    },
}