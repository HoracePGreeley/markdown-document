/// <reference path="include.d.ts" />

import * as mockFs from "mock-fs";
import * as winston from "winston";

before(function() {
    winston.configure({
        level: 'silly',
        transports: [
            new winston.transports.Memory({ })
        ]
    });
});

afterEach(function() {
    mockFs.restore();
});