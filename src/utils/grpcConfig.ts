import { FawkesReq } from "./../proto/metadata/fawkes/fawkes_pb"
import { UserToken } from "./appRequests"
import { encode } from 'uint8-to-base64'
import { Metadata } from "@/proto/metadata/metadata_pb";
import { Device } from "@/proto/metadata/device/device_pb";
import { Network } from "@/proto/metadata/network/network_pb";
import { Restriction } from "@/proto/metadata/restriction/restriction_pb";
import { Locale, LocaleIds } from "@/proto/metadata/locale/locale_pb";

export class GrpcConfig {
    OSVersion = "14.6";
    Brand = "Apple";
    Model = "iPhone 11";
    AppVersion = "6.7.0";
    Build = 6070600;
    Channel = "bilibili140";
    NetworkType = 2;
    NetworkTF = 0;
    NetworkOid = "46007";
    Cronet = "1.21.0";
    Buvid = "XZFD48CFF1E68E637D0DF11A562468A8DC314";
    MobileApp = "iphone";
    Platform = "iphone";
    Environment = "prod";
    AppId = 1;
    Region = "CN";
    Language = "zh";
    UserAgent = "bili-universal/62800300 "
        + `os/ios model/${this.Model} mobi_app/iphone `
        + `osVer/${this.OSVersion} `
        + `network/${this.NetworkType} `
        + `grpc-objc/1.32.0 grpc-c/12.0.0 (ios; cronet_http)`

    token: UserToken

    constructor(token: UserToken) {
        this.token = token
    }

    getFawkesReq() {
        return this.toBase64(new FawkesReq()
            .setAppkey(this.MobileApp)
            .setEnv(this.Environment))
    }

    getMetadata() {
        return this.toBase64(new Metadata()
            .setAccessKey(this.token.access_token)
            .setMobiApp(this.MobileApp)
            .setBuild(this.Build)
            .setChannel(this.Channel)
            .setBuvid(this.Buvid)
            .setPlatform(this.Platform))
    }

    getDevice() {
        return this.toBase64(new Device()
            .setAppId(this.AppId)
            .setMobiApp(this.MobileApp)
            .setBuild(this.Build)
            .setChannel(this.Channel)
            .setBuvid(this.Buvid)
            .setPlatform(this.Platform)
            .setBrand(this.Brand)
            .setModel(this.Model)
            .setOsver(this.OSVersion))
    }

    getNetwork() {
        return this.toBase64(new Network()
            .setType(1)
            .setOid(this.NetworkOid))
    }

    getRestriction() {
        return this.toBase64(new Restriction())
    }

    getLocale() {
        return this.toBase64(new Locale()
            .setCLocale(new LocaleIds().setLanguage(this.Language).setRegion(this.Region))
            .setSLocale(new LocaleIds().setLanguage(this.Language).setRegion(this.Region)))
    }

    toBase64(req: any) {
        const base64: string = encode(req.serializeBinary())
        if (base64.charAt(base64.length - 2) == '=') return base64.slice(0, base64.length - 2)
        if (base64.charAt(base64.length - 1) == '=') return base64.slice(0, base64.length - 1)
        return base64
    }

}