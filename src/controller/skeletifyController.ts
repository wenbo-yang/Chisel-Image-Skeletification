import { Request } from 'express-serve-static-core';
import { ParsedQs } from 'qs';
import { SkeletifyModel } from '../model/skeletifyModel';
import { SkeletifyRequestBody, SkeletifyResponse } from '../types/skeletifyTypes';
import { ImageType } from '../utils/bitMapBuffer';

export class SkeletifyController {
    private skeletifyModel: SkeletifyModel;
    constructor(skeletifyModel: SkeletifyModel) {
        this.skeletifyModel = skeletifyModel;
    }

    public async skeletify(req: Request<{}, any, any, ParsedQs, Record<string, any>>): Promise<SkeletifyResponse> {
        // stubby
        const body = req.body as SkeletifyRequestBody;
        console.log(body);

        return {
            imageType: ImageType.PNG,
            skeleton: Buffer.from('stubby'),
            strokes: [],
        };
    }

    static makeController(): SkeletifyController {
        return new SkeletifyController(new SkeletifyModel());
    }
}
