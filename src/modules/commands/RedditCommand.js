import { dependencies as Inject } from "needlepoint";
import CommandModule from "../CommandModule";
import ChatApi from "../../core/api/ChatApi";

@Inject(ChatApi)
export default class RedditCommand extends CommandModule {
    /**
     * @param {ChatApi} api
     */
    constructor(api) {
        super();

        this.api = api;
    }

    getCommand() {
        return "reddit";
    }

    getDescription() {
        return "Returns Lapikud Subreddit link";
    }

    getUsage() {
        return ""
    }

    validate(msg, argsString) {
        return true;
    }

    execute(msg, argsString) {
        return this.api.sendMessage("https://www.reddit.com/r/Lapikud/", msg.threadID);
    }
}
