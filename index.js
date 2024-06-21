const shout = (message) => {
  return message.toUpperCase();
};

const whisper = (message) => {
  return message.toLowerCase();
};

const logShout = (message) => {
  console.log(message.toUpperCase());
};

const logWhisper = (message) => {
  console.log(message.toLowerCase());
};

const sayHiToHeadphonedRoommate = (message) => {
  if (message === message.toLowerCase()) {
    return "I can't hear you!";
  } else if (message === message.toUpperCase()) {
    return "YES INDEED!";
  } else if (message === "Let's have dinner together!") {
    return "I would love to!";
  } else {
    return "";
  }
};
