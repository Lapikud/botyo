import FilterModule from "../FilterModule";
import {dependencies as Inject, singleton as Singleton} from "needlepoint";
import ChatApi from "../../core/api/ChatApi";
import Configuration from "../../core/config/Configuration";


@Singleton
@Inject(ChatApi, Configuration)
export default class ThatsNotNiceFilter extends FilterModule {

    constructor(api, config) {
        super();

        this.api = api;
        this.listOfLessThanDesirablePhrases = config.get('inappropriate-phrases.triggers');
        this.responses = config.get('inappropriate-phrases.responses');
    }

    filter(msg) {
        if (!msg.body) return msg;

        if (this.messageContainsInappropriatePhrases(msg.body)) {
            this.api.sendMessage(this.getRandomResponse(), msg.threadID);
            return msg;
        }

        return msg;
    }

    messageContainsInappropriatePhrases(message) {
        for (let phrase of this.listOfLessThanDesirablePhrases) {
            if (message.toLowerCase().includes(phrase)) {
                return true;
            }
        }
        return false;
    }

    getRandomResponse() {
       return this.responses[Math.floor(Math.random()*this.responses.length)];
    }
}