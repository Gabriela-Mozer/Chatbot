// class MessageParser {
//   constructor(actionProvider, state) {
//     this.actionProvider = actionProvider;
//     this.state = state;
//   }

//   parse(message) {
//     console.log(message);
//     const lowerCaseMessage = message.toLowerCase();
//     if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
//       this.actionProvider.greet();
//     } else if (
//       lowerCaseMessage.includes("bye") ||
//       lowerCaseMessage.includes("i don't need help")
//     ) {
//       this.actionProvider.bye();
//     } else if (lowerCaseMessage.includes("manager")) {
//       this.actionProvider.karen();
//     } else if (lowerCaseMessage.includes("javascript")) {
//       this.actionProvider.handleJavascriptList();
//     } else if (lowerCaseMessage.includes("data")) {
//       this.actionProvider.handleDataList();
//     } else if (lowerCaseMessage.includes("security")) {
//       this.actionProvider.handleSecurityList();
//     } else if (lowerCaseMessage.includes("Api")) {
//       this.actionProvider.handleAPIList();
//     } else if (
//       lowerCaseMessage.includes("interview") ||
//       lowerCaseMessage.includes("job preparation")
//     ) {
//       this.actionProvider.handleInterviewList();
//     } else {
//       this.actionProvider.optional();
//     }
//   }
// }

//export default MessageParser;

//Wersja z funkcją

function MessageParser(actionProvider, state) {
  console.log(actionProvider)
  function parse(message) {
    const lowerCaseMessage = message.toLowerCase();
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      actionProvider.greet();
    } else if (
      lowerCaseMessage.includes("bye") ||
      lowerCaseMessage.includes("i don't need help")
    ) {
      actionProvider.bye();
    } else if (lowerCaseMessage.includes("manager")) {
      actionProvider.karen();
    } else if (lowerCaseMessage.includes("javascript")) {
      actionProvider.handleJavascriptList();
    } else if (lowerCaseMessage.includes("data")) {
      actionProvider.handleDataList();
    } else if (lowerCaseMessage.includes("security")) {
      actionProvider.handleSecurityList();
    } else if (lowerCaseMessage.includes("Api")) {
      actionProvider.handleAPIList();
    } else if (
      lowerCaseMessage.includes("interview") ||
      lowerCaseMessage.includes("job preparation")
    ) {
      actionProvider.handleInterviewList();
    } else {
      actionProvider.optional();
    }
    // return message;
  }
  return parse;
}

export default MessageParser;
