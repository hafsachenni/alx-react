import * as notifsData from "../../notifications.json";

export function getAllNotificationsByUser(userId){
    return notifsData.default
    .filter((datum) => datum.author.id === userId)
    .map(({ context }) => context);
}
