"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const choose_1 = __importDefault(require("./choose"));
if (!process.argv.includes("--number-of-players")) {
    console.error("\nPlease indicate the number of players by providing the flag: --number-of-players <number>\n");
    process.exit(1);
}
const findArgumentValues = (flag) => {
    return process.argv[process.argv.findIndex((arg) => arg === flag) + 1];
};
const findNumberOfPlayers = () => {
    // Find the index of --number-of-layers and select the next argument provided
    const numberOfPlayers = parseInt(findArgumentValues("--number-of-players"));
    if (isNaN(numberOfPlayers)) {
        console.error(`\nNumber of players must be a... number. Not a ${typeof numberOfPlayers}: --number-of-players <number 1-6>\n`);
        process.exit(1);
    }
    if (numberOfPlayers > 6) {
        console.error(`\nNumber of players cannot exceed 6\n`);
        process.exit(1);
    }
    return numberOfPlayers;
};
const includeAdversary = () => {
    return !!process.argv.find((arg) => arg === "--include-adversary");
};
const includeScenario = () => {
    return !!process.argv.find((arg) => arg === "--include-scenario");
};
const includeBlightCard = () => {
    return !!process.argv.find((arg) => arg === "--include-blight");
};
console.log((0, choose_1.default)({
    numberOfPlayers: findNumberOfPlayers(),
    includeAdversary: includeAdversary(),
    includeScenario: includeScenario(),
    includeBlightCard: includeBlightCard()
}));
//# sourceMappingURL=index.js.map