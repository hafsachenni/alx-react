import * as notifsData from "../../notifications.json";
import { schema, normalize} from 'normalizr';

export function getAllNotificationsByUser(userId){
    return notifsData.default
    .filter((datum) => datum.author.id === userId)
    .map(({ context }) => context);
}

const user = new schema.Entity("users");
const message = new schema.Entity("messages", {}, {
    idAttribute: "guid",
});
const notification = new schema.Entity("notifications", {
    author: user,
    context: message,
});

const normalizeData = normalize(notifsData.default, [notification]);
export { normalizeData };
