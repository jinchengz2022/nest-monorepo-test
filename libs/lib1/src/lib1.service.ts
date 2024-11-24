import { Injectable } from '@nestjs/common';

@Injectable()
export class Lib1Service {

    libtest() {
        return 'lib service'
    }
}
