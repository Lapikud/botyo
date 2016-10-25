import FilterModule from "../FilterModule";
import { dependencies as Inject, singleton as Singleton } from "needlepoint";
import ChatApi from "../../util/ChatApi";
import EmojifyCommand from "../commands/EmojifyCommand";

const emojifiablePattern = /\b((?:[A-Z]\s){2,}[A-Z])\b/;

@Singleton
@Inject(ChatApi)
export default class AutoEmojifyFilter extends FilterModule {
    constructor(api) {
        super();

        this.api = api;
    }

    filter(msg) {
        if (AutoEmojifyFilter.shouldEmojify(msg.body)) {
            const response = msg.body.replace(emojifiablePattern, match => EmojifyCommand.emojify(match));

            this.api.sendMessage(response, msg.threadID);
        }

        return msg;
    }

    static shouldEmojify(text) {
        return text.match(emojifiablePattern) !== null;
    }
}