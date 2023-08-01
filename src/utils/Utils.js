function calculateAngle(coordinates) {
  let startLat = coordinates[0]["latitude"];
  let startLng = coordinates[0]["longitude"];
  let endLat = coordinates[1]["latitude"];
  let endLng = coordinates[1]["longitude"];
  let dx = endLat - startLat;
  let dy = endLng - startLng;

  return (Math.atan2(dy, dx) * 180) / Math.PI;
}

const invisionIcon = require("../assets/images/SearchResults/invision.png");
const notionIcon = require("../assets/images/SearchResults/notion.png");
const snapchatIcon = require("../assets/images/SearchResults/snapchat.png");

function handleCompanyLogo(icon) {
  switch (icon) {
    case "invision":
      return invisionIcon;
    case "notion":
      return notionIcon;
    case "snapchat":
      return snapchatIcon;
    default:
      return invisionIcon;
  }
}

function calculateHourAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const minutesLeft = minutes % 60;

  const textHours = hours > 1 ? `${hours} hours` : `${hours} hour`;
  const textMinutes =
    minutesLeft > 1 ? `${minutesLeft} minutos` : `${minutesLeft} minuto`;

  if (hours > 0) {
    return `${textHours} and ${textMinutes}`;
  }

  return `${textMinutes}`;
}

const utils = {
  calculateAngle,
  handleCompanyLogo,
  calculateHourAndMinutes,
};

export default utils;
