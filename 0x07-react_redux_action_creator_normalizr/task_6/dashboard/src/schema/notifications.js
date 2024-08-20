import * as notifsData from "../../notifications.json";
import { schema, normalize} from 'normalizr';


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



export function getAllNotificationsByUser(userId) {
    const { result, entities } = normalizeData;
    return result.filter((id) => entities.notifications[id].author === userId)
                 .map((id) => entities.notifications[id].context);
}
